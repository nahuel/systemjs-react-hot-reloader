import 'isomorphic-fetch'
import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader/lib/index.js';
import { render } from 'react-dom'
import { createElement as $ } from 'react'

import Root from 'dibbs/containers/Root/Root'

render(
    $(AppContainer, {}, 
        $(Root)
    ), 
    document.getElementById('root')
)

console.log("App Imported")