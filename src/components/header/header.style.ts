import styled from 'styled-components/native'
import {
  View,
  Animated
} from 'react-native'

export const Container = styled(View)`
  height: 89px;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 100;
`

export const AnimatedView = styled(Animated.View)`
  height: 89px;
  width: 100%;
`

export const AppBarContainer = styled(View)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 48px;
  position: absolute;
  top: 0;
  width: 100%;
`
