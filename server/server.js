import express from 'express'
import http from 'http'
import compression from 'compression'

import { constructIndex } from './utils'

import development from './development'

const production = process.env.NODE_ENV == 'production',
      mobile = process.env.PLATFORM == 'mobile'

const app = express()
const server = http.Server(app)

app.use(compression());

if (!mobile && !production) development(app, server)

app.use('/', express.static(__dirname + '/..'))

app.get('*', (req, res) => res.send(constructIndex()))

server.listen(3000, err => console.log(err ? err : `Listening at http://localhost:3000`))
