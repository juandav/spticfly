import { Asset } from 'expo-asset'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { 
  View, 
  Button
} from './signin.styles'

export default function Signin() {
  const [loaded, setLoaded] = useState(false)
  let history = useHistory()

  useEffect(() => {
    (async () => {
      await Asset.loadAsync([
        require('../../../assets/images/background.jpg')
      ])
      setLoaded(true)
    })()
  }, [])
  
  function handleClick() {
    history.push("/home")
  }

  return (
    loaded && (
      <View source={require('../../../assets/images/background.jpg')}>
        <Button onPress={handleClick}> Signin with spotify </Button>
      </View>
    )
  )
}
