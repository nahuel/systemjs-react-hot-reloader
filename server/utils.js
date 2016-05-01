import chokidar from 'chokidar'
import jspm from 'jspm'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import sass from 'node-sass'
import path from 'path'
import fs from 'fs'
import cheerio from 'cheerio'
import _ from 'lodash'
import minimist from 'minimist'

const args = minimist(process.argv)

process.env.NODE_ENV = args.production || args.mobile ? 'production' : process.env.NODE_ENV || 'production'
process.env.API_HOST = process.env.API_HOST || "localhost"
process.env.API_PORT = process.env.API_PORT || '3000'
process.env.MOCK = process.env.MOCK || false
process.env.PLATFORM = args.mobile ? 'mobile' : process.env.PLATFORM || 'web'
process.env.DEBUG = process.env.NODE_ENV === 'production' ? false : process.env.DEBUG || false
process.env.MODELIZR_CHEAP_MOCK = process.env.NODE_ENV === 'production' ? true : process.env.MODELIZR_CHEAP_MOCK || false

export const env = JSON.stringify({
    NODE_ENV: process.env.NODE_ENV,
    API_HOST: process.env.API_HOST,
    API_PORT: process.env.API_PORT,
    MOCK: process.env.MOCK,
    PLATFORM: process.env.PLATFORM,
    DEBUG: process.env.DEBUG,
    MODELIZR_CHEAP_MOCK: process.env.MODELIZR_CHEAP_MOCK
})

console.log(process.env.NODE_ENV)
console.log(process.env.PLATFORM)

const production = process.env.NODE_ENV == 'production',
    mobile = process.env.PLATFORM == 'mobile'

export const watcher = () => chokidar.watch('.', {
    ignored: ["**/jspm_packages", "**/node_modules", "**/icons"],
    ignoreInitial: true
})

export {jspm}

export const renderSCSS = (nodeSassOpts, postcssOpts) => {
    const css = sass.renderSync(nodeSassOpts).css
    return postcss([autoprefixer({browsers: 'last 8 versions'})]).process(css, postcssOpts)
        .then((result) => {
            result.warnings().forEach((warn) => {
                console.warn(warn.toString());
            })
            return result
        })
}

export const sysjs = () =>
    `
<script type="text/javascript" charset="utf-8">
    var oldLoad = window.onload
    window.onload = function() {

        if (oldLoad) oldLoad();

        ${production ? `System.import('dibbs/app.js')` : ''}

        ${!mobile && !production ? `
        var server = 'http://' + window.location.hostname + ':' + (window.location.port == '' ? '80' : window.location.port)
	    System.trace = true
        System.import('capaj/systemjs-hot-reloader').then(function (HotReloader) { new HotReloader.default(server)}).then(function () {
        System.import('app.css!')
        System.import('dibbs/app.js')
    });` : ''}
    }</script>`

export const constructIndex = () => {
    const index = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8'),
        injector = cheerio.load(index)

    const variables = `<script>window.env = ${env}</script>`
    const js = []
    const css = []

    const appendDash = content => {
        if (!mobile) {
            return `/${content}`
        }
        return content
    }

    js.push(`<script src="${appendDash('jspm_packages/system.js')}"></script>`)
    js.push(`<script defer src="${appendDash('jspm.browser.js')}"></script>`)
    js.push(`<script defer src="${appendDash('jspm.config.js')}"></script>`)

    css.push(`<link rel="stylesheet" href="${appendDash('resources/icomoon/style.css')}">`)
    css.push(`<link rel="stylesheet" href="${appendDash('resources/css/react-select.css')}">`)
    css.push(`<link rel="stylesheet" href="${appendDash('resources/css/react-datepicker.css')}">`)
    css.push(`<link rel="stylesheet" href="${appendDash('resources/css/react-virtualized.css')}">`)
    css.push(`<link rel="stylesheet" href="${appendDash('resources/css/lato.css')}">`)

    if (production && !mobile) {
        js.push(`<script defer src="/build/bundle.js"></script>`)
        css.push(`<link rel="stylesheet" href="/build/app.css">`)
    }

    if (!production && !mobile) {
        js.push(`<script defer src="/build/dev-bundle.js"></script>`)
    }

    if (production) {

        js.push(
            `<script>
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                ga('create', 'UA-63513106-2', 'auto');
                ga('send', 'pageview');
            </script>`
        )
    }
    
    injector('head').append(`
    <script type="text/javascript" charset="utf-8">
        window.process = {
            env: ${env}
        }
    </script>
    `)

    if (mobile) {
        js.push(`<script src="cordova.js"></script>`)
        js.push(`<script defer src="bundle.js"></script>`)

        css.push(`<link rel="stylesheet" href="app.css">`)
    }

    js.push(sysjs())
    
    _.forEach(css, resource => injector('head').append(`${resource}\n`))
    _.forEach(js, script => injector('body').append(`${script}\n`))
    injector('body').append(`${variables}\n`)
    injector('div').append(`
        <div class="loader-container">
        <div class="dibbs-image">
            <img src="${mobile || production ? '' : '/'}resources/images/racoon.png" alt="">
        </div>
    </div>
    `)

    return injector.html()
}