import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerContainer from './DrawerStack'
import { PhotosProvider } from '@/Context/PhotosContext'
import { useNetInfo } from '@react-native-community/netinfo'
import { Network } from '@/Screens'

const Stack = createStackNavigator()
const StackNetwork = createStackNavigator()

const StackNavigator = () => {
  const netInfo = useNetInfo()
  const [isConnected, setIsConnected] = useState(netInfo.isConnected)

  useEffect(() => {
    setIsConnected(netInfo.isConnected)
  }, [netInfo])

  return isConnected ? (
    <PhotosProvider>
      <Stack.Navigator
        detachInactiveScreens={false}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Main" component={DrawerContainer} />
      </Stack.Navigator>
    </PhotosProvider>
  ) : (
    <Stack.Navigator
      detachInactiveScreens={false}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Network" component={Network} />
    </Stack.Navigator>
  )
}

export default StackNavigator
