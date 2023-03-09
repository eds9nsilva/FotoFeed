import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '@/Screens'
import { TabBarLabel } from './styles'
import { createStackNavigator } from '@react-navigation/stack'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false}}
    >
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  )
}

export default MainNavigator
