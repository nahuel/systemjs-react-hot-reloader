require('dotenv').config({silent: true});
require('babel-core/register')

var args = require('minimist')(process.argv)

if (args.webpack) {
    require('./webpack/index.js')
} else {
    require('./server/server.js')
}