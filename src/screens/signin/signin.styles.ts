import styled from 'styled-components/native'
import { 
  ImageBackground, 
  Image 
} from 'react-native'
import {  
  Text as TextKitten, 
  Button as ButtonKitten
} from '@ui-kitten/components'

export const Logo = styled(Image)`
  width: 140px; 
  height: 70px;
`

export const Text = styled(TextKitten)`
  color: white;
`

export const View = styled(ImageBackground)`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

export const Button = styled(ButtonKitten)`
  background-color: rgb(131, 0, 255) none repeat scroll 0% 0%;
  border: 2px solid rgb(131, 0, 255);
  border-radius: 50px;
`
