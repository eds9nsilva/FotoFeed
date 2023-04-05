import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerContainer from './DrawerStack'
import { PhotosProvider } from '@/Context/PhotosContext'
import { useNetInfo } from '@react-native-community/netinfo'
import { Network } from '@/Screens'

const Stack = createStackNavigator()

const StackNavigator = () => {
  const netInfo = useNetInfo()

  const checkNetwork = useMemo(() => {
    return netInfo.isConnected
  }, [netInfo.isConnected])


  return (
    <PhotosProvider>
      <Stack.Navigator
        detachInactiveScreens={false}
        screenOptions={{ headerShown: false }}
        initialRouteName={checkNetwork ? "Main" : "Network"}
      >
        <Stack.Screen name="Main" component={DrawerContainer} />
        <Stack.Screen name="Network" component={Network} />
      </Stack.Navigator>
    </PhotosProvider>
  )
}

export default StackNavigator
