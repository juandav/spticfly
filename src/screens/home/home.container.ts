import { connect } from 'react-redux'
import HomeScreen from './home.screen'
import { fetchTracks } from '../../store/tracks/actions'

const mapStateToProps = ({
  tracks: { data, error, loading }
}) => ({
  data,
  error,
  loading
})
const mapDispatchToProps = ({ fetchTracks })
  
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)