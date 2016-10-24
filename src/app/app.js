import 'react-hot-loader/patch'
import {render} from 'react-dom'
import React, {createElement, DOM} from 'react'
import {devtools} from 'jspm-devtools/dist/client.js'

import Playground from './playground.js'

devtools()

render(
    <Playground></Playground>,
    // createElement(Playground),
    document.body
)

