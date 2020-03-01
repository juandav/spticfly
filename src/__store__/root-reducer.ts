import { combineReducers } from 'redux'
import account from './auth/account.slice'

const rootReducers = combineReducers({
  account
})

export default rootReducers
