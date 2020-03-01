import { 
  configureStore, 
  getDefaultMiddleware 
} from '@reduxjs/toolkit'
import { createEpicMiddleware } from "redux-observable"
import rootEpic from './root-epics'
import rootReducer from './root-reducer'

function makeStore() {
  const devTools = process.env.NODE_ENV !== 'production'
  const epicMiddleware = createEpicMiddleware();
  const middleware = [
    ...getDefaultMiddleware({
      thunk: false
    }),
    epicMiddleware
  ]
  const store = configureStore({ 
    reducer: rootReducer,
    middleware,
    devTools
  })

  epicMiddleware.run(rootEpic)
  return { store }
}

export default makeStore()
