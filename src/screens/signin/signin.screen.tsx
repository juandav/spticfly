import { AuthSession, Linking } from 'expo'
import { Asset } from 'expo-asset'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { 
  View,
  Button
} from './signin.styles'
import { 
  BACKGROUND_IMAGE,
  SPOTIFY_AUTHORIZE_ENDPOINT,
  SPOTIFY_AUTHORIZE_ENDPOINT_NATIVE
} from './signin.constants'
import { AsyncStorage } from 'react-native'

export default function Signin() {
  const redirectUrl = window.location? `${window.location}`: AuthSession.getRedirectUrl()
  const isBrowser = window.location? true: false
  const [loaded, setLoaded] = useState(false)
  const [session, setSession] = useState('')
  const history = useHistory()
  let background = BACKGROUND_IMAGE

  useEffect(() => {
    (async () => {
      await Asset.loadAsync([
        background
      ])
      setLoaded(true)
    })()
  }, [])


  useEffect(function () {
    if (isBrowser) {
      const url = window.location.href
      if (url.indexOf('_token') > -1) {
        const urlToken = url.split('_token=')[1].split('&')[0].trim()
        setSession(urlToken)
      }
    }
  }, [])

  async function handleLogin() {
    if(isBrowser) {
      Linking.openURL(SPOTIFY_AUTHORIZE_ENDPOINT(redirectUrl))
    } else {
      let result = await AuthSession.startAsync({ authUrl: SPOTIFY_AUTHORIZE_ENDPOINT_NATIVE( redirectUrl )})
      await AsyncStorage.setItem('@token', result['params']['access_token'])
      setSession(result['params']['access_token'])
    }
  }

  const GoHome = () => history.push('/home')
  
  
  return (
    loaded && (
      <View source={background}>
        <Button onPress={session? GoHome : handleLogin}> {session? 'Proceed to app' : 'Signin with spotify'}  </Button>
      </View>
    )
  )
}
