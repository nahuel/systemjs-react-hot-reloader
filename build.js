require('dotenv').config({silent: true});
require('babel-core/register')

var fs = require('fs-extra')
var utils = require('./server/utils')

fs.mkdirsSync('build')

fs.copy('config.js', 'build/config.js', {});
fs.copy('jspm_packages/system.js', 'build/jspm_packages/system.js', {});
fs.copy('jspm_packages/system.js.map', 'build/jspm_packages/system.js.map', {});
fs.copy('jspm_packages/system-polyfills.js', 'build/jspm_packages/system-polyfills.js', {});
fs.copy('jspm_packages/system-pollyfills.js.map', 'build/jspm_packages/system-polyfills.js.map', {});
fs.copy('resources', 'build/resources', {});

const index = utils.constructIndex()
const mobile = process.env.PLATFORM === 'mobile'

fs.writeFileSync('build/index.html', index)

const css = utils.renderSCSS({
        file: 'app/app.scss',
        outputStyle: 'compressed',
        sourceMap: true
    }, {
        from: 'app/app.scss',
        to: 'build/app.css'
    }
).then(function (result) {
    fs.writeFileSync('build/app.css', result.css);
    if (result.map) fs.writeFileSync('build/app.css.map', result.map);
    console.log('Finished SCSS')
});

(new utils.jspm.Builder()).bundle('app/app.js', 'build/bundle.js', {
    minify: true,
    mangle: true,
    sourceMaps: true,
    lowResSourceMaps: true,
}).then(function () {
    console.log('Finished JS')
})