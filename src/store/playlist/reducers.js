import { handleActions } from 'redux-actions'
import update from 'immutability-helper'
import * as types from './action-types'

const INITIAL_STATE = {
  error: null,
  data: [],
  loading: false
}

const getPlaylistSuccess = (state, { payload }) => {
  const data = update(state.data, { $set: [...payload] })
  return ({
    ...state,
    data
  })
}
const getPlaylistError = (state, error) => ({ ...state, error })
const setPaylistloading = (state, { payload: loading }) => ({ ...state, loading })

export default handleActions({
  [types.GET_PLAYLIST_SUCCESS]: getPlaylistSuccess,
  [types.GET_PLAYLIST_ERROR]: getPlaylistError,
  [types.GET_PLAYLIST_LOADING]: setPaylistloading
}, INITIAL_STATE)
