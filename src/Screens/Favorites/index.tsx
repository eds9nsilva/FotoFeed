import React, { useContext } from 'react'
import { FlatList, Image } from 'react-native'
import { FavoriteContext } from '@/Context/FavoritesContext'
import { Card } from './Component/Card'
import { Container, ContainerEmpyt, TextEmpyt } from './styles'
import empyt from '@/Asserts/empty-photos.png'

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
          <ContainerEmpyt>
            <Image source={empyt} />
            <TextEmpyt>Você não tem nenhuma imagem como favorita</TextEmpyt>
          </ContainerEmpyt>
        }
      />
    </Container>
  )
}

export default Favorites
