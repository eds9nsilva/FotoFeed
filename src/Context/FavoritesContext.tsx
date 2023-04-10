import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UnsplashImage } from '@/Services/Types/Photos'

interface IFavoriteContext {
  favorites: UnsplashImage[]
  handlerFavorite: (image: UnsplashImage) => void
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
    const newFavoritesList = [...favorites, image]
    setFavorites(newFavoritesList)
    await AsyncStorage.setItem(favoritesData, JSON.stringify(newFavoritesList))
  }

  const removeFavorites = async (favoriteId: string) => {
    const newFavoritesList = favorites.filter(item => item.id !== favoriteId)
    setFavorites(newFavoritesList)
    await AsyncStorage.setItem(favoritesData, JSON.stringify(newFavoritesList))
  }

  const handlerFavorite = (image: UnsplashImage) => {
    const isFavorite = favorites.find(item => {
      return item.id === image.id
    })
    isFavorite ? removeFavorites(image.id) : addFavorites(image)
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        handlerFavorite,
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
