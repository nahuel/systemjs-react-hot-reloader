import path from 'path'
import socketio from 'socket.io'
import deps from '../package.json'

import {
    renderSCSS,
    watcher,
    jspm
} from './utils'


export default function(app, server) {
    
    
    const builder = new jspm.Builder()
    
    // builder.bundle(Object.keys(deps["jspm"]["dependencies"]).filter((dep) => {
    //     const ignores = [
    //         // 'react',
    //         // 'react-dom'
    //     ].forEach((ignore) =>{
    //         if (ignore == dep) {
    //             return false
    //         }
    //     })
    //     return true
    // }).join(' + '), 'build/dev-bundle.js', {
    //     minify: false,
    //     mangle: false,
    //     sourceMaps: true,
    //     lowResSourceMaps: false
    // }).then(function() {
    //     console.log('Built - You can now start developing')
    // })

    // builder.bundle('app/app.js - [app/**/*]', 'build/dev-bundle.js', {
    //     minify: false,
    //     mangle: false,
    //     sourceMaps: true,
    //     lowResSourceMaps: false,
    //     development: true
    // }).then(function() {
    //     console.log('Built - You can now start developing')
    // })

    app.get('/app.css', (request, response) => {
        response.setHeader("Content-Type", 'text/css');

        const options = {
            file: 'app/app.scss',
            //outputStyle: 'compressed',
            sourceMap: false
        }

        renderSCSS(options).then(function (result) {
            response.end(result.css);
        })
    })

    const io = socketio(server)

    watcher().on('all', (event, changePath) => {
        console.log('File ', changePath, ' emitted: ', event)
        let absolutePath = path.join(process.cwd(), changePath)

        if (changePath.endsWith('.scss')) {
            absolutePath = path.join(process.cwd(), 'app.css')
            changePath = 'app.css!'
            console.log(absolutePath)
        }

        clients.forEach((socket) => socket.emit(event, {path: changePath, absolutePath}))
    })

    let clients = [];

    io.on('connect', socket => {
        const index = clients.push(socket)

        socket.on('identification', (name) => {
            console.log('connected client: ', name)
        })

        socket.on('disconnect', () => clients.splice(index - 1, 1))
    })

}
