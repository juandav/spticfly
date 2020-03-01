import { PlaylistScreen } from './playlist'
import { SongsScreen } from './songs'

export const routes = [
  {
    path: "/home/playlist",
    component: PlaylistScreen
  },
  {
    path: "/home/songs",
    component: SongsScreen
  }
]
