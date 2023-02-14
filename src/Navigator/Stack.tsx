import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '@/Screens'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      detachInactiveScreens={false}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={Home} />
    </Stack.Navigator>
  )
}

export default StackNavigator
