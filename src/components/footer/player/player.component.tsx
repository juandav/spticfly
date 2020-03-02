import React from 'react'
import PropTypes from 'prop-types'
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Container } from './player.style'
import { colors, device, gStyle } from '../../../constants'

import * as FileSystem from 'expo-file-system'
import { Audio } from 'expo-av'


class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorited: false,
      paused: true
    };

    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
  }

  toggleFavorite() {
    this.setState(prev => ({
      favorited: !prev.favorited
    }));
  }

  togglePlay() {
    this.setState(prev => ({
      paused: !prev.paused
    }));
  }

  async _onPressPlaySound() {
    const { song } = this.props
    try {
    //sound uri: https://p.scdn.co/mp3-preview/9477b2075a943660c3bf2146149585430723a440?cid=f1aeb9af575e45aca038e5bec3e380c9.mp3
    //console.log(soundUri.url)
    const soundUri = song.url
    const arr = soundUri.toString().split("/")
    const filename = arr[arr.length-1] + '.mp3'
    console.log(`uri for sound: ${soundUri}`)

    FileSystem.downloadAsync(soundUri, FileSystem.documentDirectory + filename)
      .then(({ uri })=>{
        console.log("finishing", uri)
      })
      .catch(error=>{
        console.error(error)
      })  
   
     const sound = new Audio.Sound()
     
      await sound.loadAsync({ uri: FileSystem.documentDirectory+filename }) 
      await sound.playAsync()
     } catch (error) {
      console.error(error.message)
     }
   }

  render() {
    const { song } = this.props;
    const { favorited, paused } = this.state;

    const favoriteColor = favorited ? colors.brandPrimary : colors.white;
    const favoriteIcon = favorited ? 'heart' : 'heart-o';
    const iconPlay = paused ? 'play-circle' : 'pause-circle';

    return (
      <Container activeOpacity={1} style={styles.container}>
        <TouchableOpacity
          activeOpacity={gStyle.activeOpacity}
          hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
          onPress={this.toggleFavorite}
          style={styles.containerIcon}
        >
          <FontAwesome color={favoriteColor} name={favoriteIcon} size={20} />
        </TouchableOpacity>
        {song && (
          <View>
            <View style={[gStyle.flexRowCenter, gStyle.mTHalf, styles.containerSong]}>
              <Text style={styles.title}>{`${song.title} · `}</Text>
              <Text style={styles.artist}>{song.artist}</Text>
            </View>
          </View>
        )}
        <TouchableOpacity
          activeOpacity={gStyle.activeOpacity}
          hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
          onPress={() => {
            this._onPressPlaySound()
            this.togglePlay()
          }}
          style={styles.containerIcon}
        >
          <FontAwesome color={colors.white} name={iconPlay} size={28} />
        </TouchableOpacity>
      </Container>
    );
  }
}


Player.propTypes = {
  song: PropTypes.shape({
    artist: PropTypes.string,
    title: PropTypes.string
  })
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: colors.grey,
    borderBottomColor: colors.blackBg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    width: '100%'
  },
  containerIcon: {
    ...gStyle.flexCenter,
    width: 50
  },
  containerSong: {
    ...gStyle.flexRowCenter,
    overflow: 'hidden',
    width: device.width - 100
  },
  title: {
    ...gStyle.textSpotify12,
    color: colors.white
  },
  artist: {
    ...gStyle.textSpotify12,
    color: colors.greyLight
  },
  device: {
    ...gStyle.textSpotify10,
    color: colors.brandPrimary,
    marginLeft: 4,
    textTransform: 'uppercase'
  }
});

export default Player
