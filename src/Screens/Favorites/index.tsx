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
        data={favorites.reverse()}
        columnWrapperStyle={{justifyContent: 'space-around'}}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Card image={item} />}
      />
    </Container>
  )
}

export default Favorites
