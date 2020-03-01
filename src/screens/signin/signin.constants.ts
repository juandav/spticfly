export const BACKGROUND_IMAGE = require('../../../assets/images/background.jpg')
export const SPOTIFY_ENDPOINT = 'https://accounts.spotify.com/authorize/'
export const SPOTIFY_ENDPOINT_TOKEN = 'https://accounts.spotify.com/api/token'
export const RESPONSE_TYPE = 'token'
export const CLIENT_ID = 'f1aeb9af575e45aca038e5bec3e380c9'
export const CLIENT_SECRET = '4c57d03329cd47e48cf30e8cfdf8bb3f'
export const SCOPES = 'user-read-private user-read-email playlist-read-private user-top-read user-read-recently-played playlist-modify-public playlist-modify-private'
export const SPOTIFY_AUTHORIZE_ENDPOINT = URL_REDIRECT =>
  `${SPOTIFY_ENDPOINT}` +
  `?client_id=${CLIENT_ID}` +
  '&response_type=token' +
  `&redirect_uri=${URL_REDIRECT}` +
  `&scope=${SCOPES}`
export const SPOTIFY_AUTHORIZE_ENDPOINT_NATIVE = URL_REDIRECT => `${SPOTIFY_ENDPOINT}?response_type=${encodeURIComponent(RESPONSE_TYPE)}&client_id=${encodeURIComponent(CLIENT_ID)}&scope=${encodeURIComponent(SCOPES)}&redirect_uri=${encodeURIComponent(URL_REDIRECT)}`
