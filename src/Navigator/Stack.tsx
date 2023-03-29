import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerContainer from './DrawerStack'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      detachInactiveScreens={false}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Main"
        component={DrawerContainer}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
