import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerContainer from './DrawerStack'
import { PhotosProvider } from '@/Context/PhotosContext'
import { useNetInfo } from '@react-native-community/netinfo'
import { DetailsFavorite, Favorites, Network } from '@/Screens'
import { FavoriteProvider } from '@/Context/FavoritesContext'
import { Colors } from '@/Styles/Colors'

const Stack = createStackNavigator()

const StackNavigator = () => {
  const netInfo = useNetInfo()
  const [isConnected, setIsConnected] = useState<boolean>(true)

  useEffect(() => {
    const connected = netInfo.isConnected
    if(connected !== null) {
      setIsConnected(connected)
    }
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
              headerTintColor: Colors.secundary,
              headerStyle: {
                backgroundColor: Colors.primary,
              },
              headerTitle: 'Favoritos',
            }}
          />
          <Stack.Screen name="DetailsFavorite" component={DetailsFavorite} />
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
