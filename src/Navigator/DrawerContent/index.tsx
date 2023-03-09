import React from 'react'
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'
import { Container, Item, Title } from './styles'

const Drawer: React.FC<DrawerContentComponentProps> = props => {
  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        paddingBottom: 20,
      }}
      style={{ flex: 1, backgroundColor: '#181a20' }}
      showsVerticalScrollIndicator={false}
    >
      <Container>
        <Item>
          <Title>Filtro</Title>
        </Item>
      </Container>
    </DrawerContentScrollView>
  )
}

export default Drawer
