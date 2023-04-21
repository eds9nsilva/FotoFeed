import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import { FavoriteContext } from '@/Context/FavoritesContext'
import { Card } from './Component/Card'
import { Container } from './styles'
import { Empyt } from '@/Components'

const Favorites = () => {
  const { favorites } = useContext(FavoriteContext)
  return (
    <Container>
      <FlatList
        data={favorites.reverse()}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Card image={item} />}
        ListEmptyComponent={
          <Empyt text="Você não tem nenhuma imagem como favorita" />
        }
      />
    </Container>
  )
}

export default Favorites
