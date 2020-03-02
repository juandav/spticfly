import React from 'react'
import { Feather } from '@expo/vector-icons'
import {
  Animated
} from 'react-native'
import { 
  colors, 
  device,  
} from '../../constants'
import LinearGradient from '../../components/LinearGradient'
import TouchIcon from '../../components/TouchIcon'
import albums from '../../mockdata/albums'
import { 
  Container,
  AnimatedView,
  AppBarContainer
} from './header.style'
import { Artist } from './artist'

export default function HeaderMenu({
  handleLeftPress,
  handleRightPress
}) {
    const album = albums['Ex:Re']
    const scrollY = new Animated.Value(0)
    
    const headingRange = device.web ? [140, 200] : [230, 280];
    const opacityHeading = scrollY.interpolate({
      inputRange: headingRange,
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

  return (
    <>
      <Container>
        <AnimatedView style={[{ opacity: opacityHeading }]}>
            <LinearGradient fill={album.backgroundColor} height={89} />
        </AnimatedView>

        <AppBarContainer >
          <TouchIcon
            icon={<Feather color={colors.white} name="chevron-left" />}
            onPress={handleLeftPress}  
          />
          <TouchIcon
            icon={<Feather color={colors.white} name="more-horizontal" />}
            onPress={handleRightPress}
          />
        </AppBarContainer>
      </Container>
      <Artist />
    </>
  )
}
