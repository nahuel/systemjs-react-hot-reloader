import { Component } from 'react'
import { $, div, DevTools } from 'dibbs/components'
import store from 'dibbs/store'
import { Provider } from 'react-redux'
import router from 'dibbs/router'

// import injectTapEventPlugin from "react-tap-event-plugin"
// import {acrossReload} from 'dibbs/utils/acrossReload'
// acrossReload("injectTapEventPlugin", injectTapEventPlugin)()

// DEVELOPMENT STUFF
window.dispatch = store.dispatch

const RootComponent = () => div({},
    $(Provider, {store}, router),
);

export default RootComponent