import React, { useState } from 'react'
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
} from './styles'
import image from '@/Asserts/logo.png'
import { ArrowDown, ArrowRight } from 'phosphor-react-native'
import { OptionFilter } from '@/Constants/OptionFilter'
import { FlashList } from '@shopify/flash-list'

const Drawer: React.FC<DrawerContentComponentProps> = () => {
  const [open, setOpen] = useState(false)

  const listCategoriesFilter = () => {
    return (
      <FlashList
        data={OptionFilter}
        keyExtractor={item => String(item.id)}
        numColumns={2}
        renderItem={item => {
          return (
            <Categories>
              <TextCategories>{item.item.name}</TextCategories>
            </Categories>
          )
        }}
      />
    )
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
          <Content onPress={() => setOpen(!open)}>
            <Title>CATEGORIAS</Title>
            {open ? (
              <ArrowRight
                color="#ffff"
                style={{ top: 10, left: 8 }}
                size={22}
              />
            ) : (
              <ArrowDown color="#ffff" style={{ top: 10, left: 8 }} size={22} />
            )}
          </Content>
          {open && listCategoriesFilter()}
        </Item>
        <Item>
          <Content onPress={() => {}}>
            <Title>FAVORITOS</Title>
          </Content>
        </Item>
      </Container>
    </DrawerContentScrollView>
  )
}

export default Drawer
