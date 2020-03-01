import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic } from './root-epics'
import { rootReducer } from './root-reducers'

export default function initStore (initialState) {
  const epicMiddleware = createEpicMiddleware()
  const logger = createLogger({ collapsed: true })
  const reduxMiddleware = composeWithDevTools(
    applyMiddleware(
      epicMiddleware,
      logger
    ))
  const store = createStore(rootReducer, initialState, reduxMiddleware)
  epicMiddleware.run(rootEpic)
  return store
}
