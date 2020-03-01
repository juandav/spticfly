import { handleActions } from 'redux-actions'
import * as types from './action-types'

const INITIAL_STATE = {
  isOpenTimeLine: false
}

const toggleTimeline = (state, { payload: isOpenTimeLine }) => ({ ...state, isOpenTimeLine })

export default handleActions({
  [types.TOGGLE_TIMELINE]: toggleTimeline
}, INITIAL_STATE)
