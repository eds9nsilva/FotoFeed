import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerContainer from './DrawerStack'
import { PhotosProvider } from '@/Context/PhotosContext'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <PhotosProvider>
    <Stack.Navigator
      detachInactiveScreens={false}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Main"
        component={DrawerContainer}
      />
    </Stack.Navigator>
    </PhotosProvider>
  )
}

export default StackNavigator
