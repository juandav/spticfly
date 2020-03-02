export const URL_REDIRECT = process.env.URL_AUTH_REDIRECT || 'http://localhost:3000'
export const SPOTIFY_AUTHORIZE_ENDPOINT =
  '' +
  'https://accounts.spotify.com/authorize/' +
  `?client_id=${process.env.SPOTIFY_KEY}` +
  '&response_type=token' +
  `&redirect_uri=${URL_REDIRECT}` +
  `&scope=${process.env.SPOTIFY_SCOPES}`
export const SPOTIFY_PROFILE_ENDPOINT = token =>
  `https://api.spotify.com/v1/me?access_token=${token}`
export const SPOTIFY_PLAYLIST_ENDPOINT = token =>
  `https://api.spotify.com/v1/me/playlists?access_token=${token}`
export const SPOTIFY_PLAYLIST_DETAIL_ENDPOINT = (endpoint, token) =>
  `${endpoint}?access_token=${token}`

// PLAYLIST CRUD
export const SPOTIFY_PLAYLIST_CREATE = (userId, token) =>
  `https://api.spotify.com/v1/users/${userId}/playlists?access_token=${token}`
export const SPOTIFY_PLAYLIST_UPDATE = (playlistId, token) =>
  `https://api.spotify.com/v1/playlists/${playlistId}?access_token=${token}`
export const SPOTIFY_PLAYLIST_REMOVE = (playlistId, token) =>
  `https://api.spotify.com/v1/playlists/${playlistId}/followers?access_token=${token}`

export const SPOTIFY_TRACK_SEARCH = query =>
  `https://api.spotify.com/v1/search?q=${query}&type=track`