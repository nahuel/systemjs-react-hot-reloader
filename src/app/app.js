import 'react-hot-loader/patch'
import {AppContainer} from 'react-hot-loader'
import {render} from 'react-dom'
import React, {createElement, DOM} from 'react'
import {devtools} from 'jspm-devtools/dist/client.js'

import Playground from './playground.js'

devtools()

render(
    // JSX works
    <AppContainer>
        <Playground />
    </AppContainer>,
    // plain createElement fails
    // createElement(AppContainer, {},
    //     createElement(Playground, {})
    // ),
    document.body
)

