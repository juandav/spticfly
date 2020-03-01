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

const getOptions = url => ({ url, method: 'GET' })

const fetchTracksEpic = action$ => action$.pipe(
  ofType(types.FETCH_TRACKS),
  switchMap(action => {
    const { payload } = action
    const options = getOptions(payload)

    const req = request(options)
      .pipe(
        mergeMap(
          resp => concat(
            of(actions.fetchTracksLoading(false)),
            of(actions.fetchTracksSuccess(resp))
          )
        ),
        catchError(
          error => concat(
            of(actions.fetchTracksLoading(false)),
            of(actions.fetchTracksError(error))
          )
        )
      )
    return concat(
      of(actions.fetchTracksLoading(true)),
      req
    )
  })
)

export const tracksEpics = combineEpics(fetchTracksEpic)
