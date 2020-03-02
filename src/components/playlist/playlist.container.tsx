import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import PlaylistComponent from './playlist.component'
import { fetchPlaylist } from '../../store/playlist/actions' 
import { fetchTracks } from '../../store/tracks/actions'
import { toggleTimeline } from '../../store/meta/actions'
import { AsyncStorage } from 'react-native'

const Playlist = ({
  data,
  error,
  loading,
  fetchPlaylist,
  fetchTracks
}) => {
  const [token, setToken] = useState('')

  useEffect(() => {
   (async () => {
    const token = await AsyncStorage.getItem('@token')
    setToken(token)
    fetchPlaylist(token)
   })()
  }, [])

  const handleTracks = (_event, endpoint) => {
    const urlTracks = `${endpoint}?access_token=${token}`
    fetchTracks(urlTracks)
  }

  return (
    loading
    ? <Text>Cargando...</Text>
    : error
      ? <Text>Error</Text>
      : (
        <PlaylistComponent
          data={data}
          token={token}
          handleTracks={handleTracks}
        />
      )
  )
}

const mapStateToProps = ({
  playlist: { data, error, loading },
  meta: { isOpenTimeLine }
}) => ({
  data,
  error,
  loading,
  isOpenTimeLine
})
const mapDispatchToProps = ({ fetchPlaylist, toggleTimeline, fetchTracks })

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
