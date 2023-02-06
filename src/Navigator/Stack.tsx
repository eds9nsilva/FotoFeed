import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MainNavigator from './Main'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      detachInactiveScreens={false}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  )
}

export default StackNavigator
