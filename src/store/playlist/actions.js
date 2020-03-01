import { createAction } from 'redux-actions'
import * as types from './action-types'

export const fetchPlaylist = createAction(types.GET_PLAYLIST)
export const fetchPlaylistSuccess = createAction(types.GET_PLAYLIST_SUCCESS, ({ response: { items } }) => items)
export const fetchPlaylistError = createAction(types.GET_PLAYLIST_ERROR)
export const fetchPlaylistLoading = createAction(types.GET_PLAYLIST_LOADING, payload => JSON.parse(payload))
