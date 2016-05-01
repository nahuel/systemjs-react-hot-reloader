import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { history } from 'dibbs/router/history'

const createStoreWithMiddleware = compose(
    applyMiddleware(thunk, routerMiddleware(history))
)(createStore)

const store = createStoreWithMiddleware(a => a, {})
export default store
