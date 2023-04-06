import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UnsplashImage } from '@/Services/Types/Photos'

export interface IFavoriteContext {
  favorites: UnsplashImage[]
}

interface IProps {
  children: React.ReactElement
}

const favoritesData = '@MyFavorite:Favorite'

export const FavoriteContext = createContext<IFavoriteContext>(
  {} as IFavoriteContext,
)

export const FavoriteProvider: React.FunctionComponent<IProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<UnsplashImage[]>([])

  useEffect(() => {
    async function loadFavorites() {
      const favoritesList = await AsyncStorage.getItem(favoritesData)
      if (favoritesList) {
        setFavorites(JSON.parse(favoritesList))
      }
    }
    loadFavorites()
  }, [])

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}

export function useFavorite(): IFavoriteContext {
  const context = useContext(FavoriteContext)
  if (!context) {
    throw new Error('useFavorite deve ser usado em um FavoriteProvider')
  }
  return context
}
