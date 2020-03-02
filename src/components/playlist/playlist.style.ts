import styled from 'styled-components/native'
import { 
  Image,
  Text, 
  View 
} from 'react-native'

export const Container = styled(View)``

export const Item = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`

export const Link = styled(Text)`
  text-decoration: none;
  color: #fff;
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #273b47;
  padding: 8px 20px;
  min-height: 34px;
  text-decoration-line: underline;
  font-size: 14px;
`

export const Cover = styled(Image)`
  width: 72px;
  height: 72px;
  margin-left: 10px;
`
