import { merge, of, concat } from 'rxjs'
import { ofType } from 'redux-observable'
import {
  switchMap,
  map,
  catchError,
  mergeMap,
  debounceTime,
  takeUntil
} from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'


/**
 * Epics factory for request. (only GET method)
 * @param {String} type TYPE
 * @param {String} path /offering
 * @param {Object} actions [ loading, success, error ]
 * @param {Function} triggers payload => [ otherActionOne, otherActionTwo, OtherActionN, .......]
 * @param {Array} blockers [........]
 * @param {Number} delay 1500
 */
export const EpicFactory = (
  type,
  path,
  actions,
  triggers,
  blockers = [],
  delay = 1500
) => action$ => {
  const [loading, success, error] = actions
  const interrupts = merge(...blockers)

  return action$.pipe(
    ofType(type),
    debounceTime(delay),
    switchMap(({ payload }) => concat(
      of(loading(true)),
      ajax({
        method: 'GET',
        url: API_URL(path, payload.query)
      })
        .pipe(
          map(response => null),
          catchError(err => of(
            loading(false),
            error(err)
          ))          
        )
    ))
  )
}