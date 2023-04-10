import { FavoriteContext } from '@/Context/FavoritesContext'
import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import { Card } from './Component/Card'
import { Container } from './styles'

const Favorites = () => {
  const { favorites } = useContext(FavoriteContext)

  return (
    <Container>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => <Card imageUrl={item.urls.small} />}
      />
    </Container>
  )
}

export default Favorites
