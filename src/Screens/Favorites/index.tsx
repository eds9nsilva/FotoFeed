import { FavoriteContext } from '@/Context/FavoritesContext'
import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import { Card } from './Component/Card'
import { Container } from './styles'

const Favorites = () => {
  const {favorites} = useContext(FavoriteContext)

  console.log('FAVORITOS: ' , favorites.length)
  return <Container></Container>
}

export default Favorites
