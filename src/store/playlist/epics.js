import {
  combineEpics,
  ofType
} from 'redux-observable'
import {
  mergeMap,
  catchError,
  switchMap
} from 'rxjs/operators'
import { request } from 'universal-rxjs-ajax'
import { of, concat } from 'rxjs'
import * as types from './action-types'
import * as actions from './actions'
import { SPOTIFY_PLAYLIST_ENDPOINT } from '../../config'

const getOptions = token => ({
  url: SPOTIFY_PLAYLIST_ENDPOINT(token),
  method: 'GET'
})

const fetchPlaylistEpic = action$ => action$.pipe(
  ofType(types.GET_PLAYLIST),
  switchMap(action => {
    const { payload } = action
    const options = getOptions(payload)

    const req = request(options)
      .pipe(
        mergeMap(
          resp => concat(
            of(actions.fetchPlaylistLoading(false)),
            of(actions.fetchPlaylistSuccess(resp))
          )
        ),
        catchError(
          error => concat(
            of(actions.fetchPlaylistLoading(false)),
            of(actions.fetchPlaylistError(error))
          )
        )
      )
    return concat(
      of(actions.fetchPlaylistLoading(true)),
      req
    )
  })
)

export const playlistEpics = combineEpics(fetchPlaylistEpic)
