import React from 'react'
import { ApplicationProvider } from '@ui-kitten/components'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { Router, Switch, Route } from './react-router'
import { SigninScreen } from './src/screens/signin'
import { HomeScreen } from './src/screens/home'

export default function App() {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <Router>
        <Switch>
          <Route exact path="/" component={SigninScreen} />
          <Route path='/signin' component={SigninScreen} />
          <Route path='/home' component={HomeScreen} />
        </Switch>
      </Router>
    </ApplicationProvider>
  )
}
