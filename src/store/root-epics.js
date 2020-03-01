import { combineEpics } from 'redux-observable'
import { playlistEpics } from './playlist/epics'
import { tracksEpics } from './tracks/epics'

export const rootEpic = combineEpics(
  playlistEpics,
  tracksEpics
)
