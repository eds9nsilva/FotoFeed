import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerContainer from './DrawerStack'
import { PhotosProvider } from '@/Context/PhotosContext'
import { useNetInfo } from '@react-native-community/netinfo'
import { Favorites, Network } from '@/Screens'
import { FavoriteProvider } from '@/Context/FavoritesContext'

const Stack = createStackNavigator()

const StackNavigator = () => {
  const netInfo = useNetInfo()
  const [isConnected, setIsConnected] = useState(netInfo.isConnected)

  useEffect(() => {
    setIsConnected(netInfo.isConnected)
  }, [netInfo])

  return isConnected ? (
    <PhotosProvider>
      <FavoriteProvider>
        <Stack.Navigator
          detachInactiveScreens={false}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Main" component={DrawerContainer} />
          <Stack.Screen
            name="Favorites"
            component={Favorites}
            options={{
              headerShown: true,
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#181a20',
              },
              headerTitle: 'Favoritos',
            }}
          />
        </Stack.Navigator>
      </FavoriteProvider>
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
