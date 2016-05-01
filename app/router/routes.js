import { Route } from 'react-router'
import { fact } from 'dibbs/components'
const route = fact(Route)
/**
 * Containers
 */

import Playground from 'dibbs/containers/Playground/Playground'

/**
 * Routes
 */
const routes = [
    route({path: '/', component: Playground},
        route({path: ':id'})
    )
]

export { routes as default, routes }