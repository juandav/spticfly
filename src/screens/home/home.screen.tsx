import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Animated,
  StyleSheet,
  View
} from 'react-native'
import {
  Layout,
  Modal
} from '@ui-kitten/components'
import { 
  colors, 
  device, 
  gStyle, 
} from '../../constants'

// Components
import LinearGradient from '../../components/LinearGradient'
import { LineItemSong } from '../../components/song'
import albums from '../../mockdata/albums'
import { func } from '../../constants'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { Playlist } from '../../components/playlist'


function Home({ data }) {
  const [loaded, setLoaded] = useState(false)
  const [visible, setVisible] = React.useState(false)
  const history = useHistory()

  const renderModalElement = () => (
    <Layout level='3' style={styles.modalContainer}>
      <Playlist />
    </Layout>
  )

  const toggleModal = () => {
    setVisible(!visible)
  }
  
  useEffect(() => {
    (async () => {
      await func.loadAssetsAsync()
      setLoaded(true)
    })()
  }, [])

  const album = albums['Ex:Re']
  const scrollY = new Animated.Value(0)
  const stickyArray = device.web ? [] : [0]
  const shuffleRange = device.web ? [40, 80] : [40, 80]

  const opacityShuffle = scrollY.interpolate({
    inputRange: shuffleRange,
    outputRange: [0, 1],
    extrapolate: 'clamp'
  })
  
  console.log(data)
  return (
    loaded && (
      <View style={gStyle.container}>
        <Header 
          handleLeftPress={() => history.push('/signin') }
          handleRightPress={() => setVisible(!visible)}
        />
        <Animated.ScrollView
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={stickyArray}
          style={styles.containerScroll}
        >
          <View style={styles.containerSticky}>
            <Animated.View
              style={[
                styles.containerStickyLinear,
                { opacity: opacityShuffle }
              ]}
            >
              <LinearGradient fill={colors.black20} height={50} />
            </Animated.View>
            
          </View>
          <View style={styles.containerSongs}>

            {data && (
                data.map(
                  item => (
                    <LineItemSong
                      active={true}
                      key={item.track.id}
                      onPress={() => console.log('change song')}
                      songData={{
                        album: '',
                        artist: item.track.artists[0].name,
                        length: 7,
                        title: item.track.name
                      }}
                    />
                  )
                )
            )}

            {/*album.tracks &&
              album.tracks.map((track, index) => (
                <LineItemSong
                  active={true}
                  
                  key={index.toString()}
                  onPress={() => console.log('change song')}
                  songData={{
                    album: album.title,
                    artist: album.artist,
                    image: album.image,
                    length: track.seconds,
                    title: track.title
                  }}
                />
                ))*/}
          </View>
          <View style={gStyle.spacer16} />
        </Animated.ScrollView>

        <Footer />
        
        <Modal
          backdropStyle={styles.backdrop}
          onBackdropPress={toggleModal}
          visible={visible}>
          {renderModalElement()}
        </Modal>
      </View>
    )
  )
}

const styles = StyleSheet.create({
  containerHeader: {
    height: 89,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 100
  },
  headerLinear: {
    height: 89,
    width: '100%'
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: device.iPhoneX ? 48 : 24,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  headerTitle: {
    ...gStyle.textSpotifyBold16,
    color: colors.white,
    paddingHorizontal: 8,
    marginTop: 2,
    textAlign: 'center',
    width: device.width - 100
  },
  containerFixed: {
    alignItems: 'center',
    paddingTop: device.iPhoneX ? 94 : 60,
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
  containerScroll: {
    paddingTop: 89
  },
  containerSticky: {
    marginTop: device.iPhoneX ? 238 : 184
  },
  containerShuffle: {
    alignItems: 'center',
    height: 50,
    shadowColor: colors.blackBg,
    shadowOffset: { height: -10, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 20
  },
  containerStickyLinear: {
    top: 0,
    position: 'absolute',
    width: '100%'
  },
  btn: {
    backgroundColor: colors.brandPrimary,
    borderRadius: 25,
    height: 50,
    width: 220
  },
  btnText: {
    ...gStyle.textSpotifyBold16,
    color: colors.white,
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  containerSongs: {
    alignItems: 'center',
    backgroundColor: colors.blackBg,
    minHeight: 540
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    width: '100%'
  },
  downloadText: {
    ...gStyle.textSpotifyBold18,
    color: colors.white
  },



  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 256,
    padding: 16,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Home


/**
 * 
 *  {album.tracks &&
              album.tracks.map((track, index) => (
                <LineItemSong
                  active={true}
                  
                  key={index.toString()}
                  onPress={() => console.log('change song')}
                  songData={{
                    album: album.title,
                    artist: album.artist,
                    image: album.image,
                    length: track.seconds,
                    title: track.title
                  }}
                />
              ))}
 */