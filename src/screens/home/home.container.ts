import { connect } from 'react-redux'
import HomeScreen from './home.screen'
import { fetchTracks, setCurrentSong } from '../../store/tracks/actions'

const mapStateToProps = ({
  tracks: { data, error, loading, current_song }
}) => ({
  data,
  error,
  loading,
  current_song
})
const mapDispatchToProps = ({ fetchTracks, setCurrentSong })
  
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)