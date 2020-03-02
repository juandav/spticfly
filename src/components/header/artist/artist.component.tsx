import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { 
  colors, 
  device, 
  gStyle, 
  images 
} from '../../../constants'
import LinearGradient from '../../../components/LinearGradient'
import albums from '../../../mockdata/albums'

function Artist({ currentSong }) {
  const album = albums['Ex:Re']
  return (
    <View style={styles.containerFixed}>
      <View style={styles.containerLinear}>
        <LinearGradient fill={album.backgroundColor} />
      </View>
      <View style={styles.containerImage}>
        <Image source={{uri: currentSong.image} || images[album.image]} style={styles.image} />
      </View>
      <View style={styles.containerTitle}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
          {currentSong.title || album.title}
        </Text>
      </View>
      <View style={styles.containerAlbum}>
        <Text style={styles.albumInfo}>
          {`Album by ${currentSong.artist || album.artist} · ${currentSong.release || album.released}`}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    containerFixed: {
      alignItems: 'center',
      paddingTop: device.iPhoneX ? 94 : 80,
      position: 'absolute',
      width: '100%'
    },
    containerLinear: {
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex: device.web ? 5 : 0
    },
    containerImage: {
      shadowColor: colors.black,
      shadowOffset: { height: 8, width: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 6,
      zIndex: device.web ? 20 : 0
    },
    image: {
      height: 148,
      marginBottom: device.web ? 0 : 16,
      width: 148
    },
    containerTitle: {
      marginTop: device.web ? 8 : 0,
      zIndex: device.web ? 20 : 0
    },
    title: {
      ...gStyle.textSpotifyBold20,
      color: colors.white,
      paddingHorizontal: 24,
      marginBottom: 8,
      textAlign: 'center'
    },
    containerAlbum: {
      zIndex: device.web ? 20 : 0
    },
    albumInfo: {
      ...gStyle.textSpotify12,
      color: colors.greyInactive,
      marginBottom: 48
    },
  })

export default Artist