import React from 'react'
import { Home } from '@/Screens'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  )
}

export default MainNavigator
