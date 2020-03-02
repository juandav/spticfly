import styled from 'styled-components/native'
import {  
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { colors } from '../../../constants'

export const Container = styled(TouchableOpacity)`
  align-self: center;
  background-color: ${colors.grey};
  border-bottom-color: ${colors.blackBg};
  border-bottom-width: ${StyleSheet.hairlineWidth + 'px'};
  flex-direction: row;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
`
