import React from 'react'
import { 
  View, 
  Text, 
  TextInput, 
  Button 
} from './home.styles'
import { routes } from './home.routes'
import RouteWithSubRoutes from '../../components/shared/Routes'

export default function Home() {
  return (
    <View>
      <Text> Home Route </Text>
      <TextInput />
      <Button color="#0BBFD6" title="Login"/>
      {
        routes.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))
      }
    </View>
  )
}
