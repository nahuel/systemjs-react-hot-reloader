import { browserHistory, hashHistory } from 'react-router'

const history = (env.PLATFORM == 'web' && env.NODE_ENV == 'production') ? browserHistory : hashHistory

export { history as default, history }