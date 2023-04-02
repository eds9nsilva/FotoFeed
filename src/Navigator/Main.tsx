import React from 'react'
import { Home } from '@/Screens'
import { createStackNavigator } from '@react-navigation/stack'
import { PhotosProvider } from '@/Context/PhotosContext'

const Stack = createStackNavigator()

const MainNavigator = () => {
  return (
    <PhotosProvider>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </PhotosProvider>
  )
}

export default MainNavigator
