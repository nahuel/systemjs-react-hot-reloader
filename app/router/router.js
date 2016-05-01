import { Router } from 'react-router'
import React from 'react'
import { syncHistoryWithStore } from 'react-router-redux'
import History from 'dibbs/router/history'
import store from 'dibbs/store'
import routes from 'dibbs/router/routes'
import { $ } from 'dibbs/components'

// const history = syncHistoryWithStore(History, store, {
//     selectLocationState: state => state.router
// })

const router = $(Router, {history: History}, ...routes)

export { router as default, router }

console.log("Router Imported")