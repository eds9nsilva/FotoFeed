import React from 'react'
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'
import {
  Container,
  Item,
  Title,
  Logo,
  Categories,
  Content,
  TextCategories,
  Button,
  TextButton,
} from './styles'
import image from '@/Asserts/logo.png'
import { useNavigation } from '@react-navigation/native'

const Drawer: React.FC<DrawerContentComponentProps> = () => {
  const { navigate } = useNavigation()

  const handleFavorites = () => {
    navigate('Favorites', {})
  }

  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        paddingBottom: 20,
      }}
      style={{ flex: 1, backgroundColor: '#181a20' }}
      showsVerticalScrollIndicator={false}
    >
      <Container>
        <Logo source={image} />
        <Item>
          <Content onPress={() => handleFavorites()}>
            <Title>FAVORITOS</Title>
          </Content>
        </Item>
        <Item>
          <Content>
            <Title>LIMPAR FILTRO</Title>
          </Content>
        </Item>
      </Container>
    </DrawerContentScrollView>
  )
}

export default Drawer
