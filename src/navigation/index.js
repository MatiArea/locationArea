import MainStackNavigator from './main-navigator'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

const navigation = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  )
}

export default navigation
