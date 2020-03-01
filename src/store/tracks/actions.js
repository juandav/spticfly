import { createAction } from 'redux-actions'
import * as types from './action-types'

export const fetchTracks = createAction(types.FETCH_TRACKS)
export const fetchTracksSuccess = createAction(types.FETCH_TRACKS_SUCCESS, ({ response: { items } }) => items)
export const fetchTracksError = createAction(types.FETCH_TRACKS_ERROR)
export const fetchTracksLoading = createAction(types.FETCH_TRACKS_LOADING, payload => JSON.parse(payload))
export const setCurrentSong = createAction(types.SET_CURRENT_SONG)
