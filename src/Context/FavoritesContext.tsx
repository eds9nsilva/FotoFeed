import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UnsplashImage } from '@/Services/Types/Photos'

interface IFavoriteContext {
  favorites: UnsplashImage[]
  addFavorites: (image: UnsplashImage) => void
  removeFavorites: (id: string) => void
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

  const addFavorites = async (image: UnsplashImage) => {
    try {
      const newFavoritesList = [...favorites, image]
      console.log('CHAMOU addFavorites')
      console.log('NO CONTEXT: ',  newFavoritesList.length)
      setFavorites(newFavoritesList)
      await AsyncStorage.setItem(
        favoritesData,
        JSON.stringify(newFavoritesList),
      )
    } catch (error) {
      throw new Error(error as string)
    }
  }

  const removeFavorites = async (id: string) => {
    try {
      const newFavoritesList = favorites.filter(item => item.id !== id);
      setFavorites(newFavoritesList)
      await AsyncStorage.setItem(
        favoritesData,
        JSON.stringify(newFavoritesList),
      )
    } catch (error) {
      throw new Error(error as string)
    }
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorites,
        removeFavorites,
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
