import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'

import { teamReducer } from './teams/teamReducer'
const store = createStore(
  teamReducer,
  compose(
    applyMiddleware(
      logger,
    ) /* ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : '', */
  ),
)
export default store
