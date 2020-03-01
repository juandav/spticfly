import { combineReducers } from 'redux'
import playlist from './playlist/reducers'
import meta from './meta/reducers'
import tracks from './tracks/reducers'

export const rootReducer = combineReducers({ playlist, meta, tracks })
