import React, { useCallback, useState } from 'react'
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
import { DefaultFilter, OptionFilter } from '@/Constants/OptionFilter'
import { FlashList } from '@shopify/flash-list'
import { DrawerActions, useNavigation } from '@react-navigation/native'

const Drawer: React.FC<DrawerContentComponentProps> = () => {
  const [open, setOpen] = useState(false)
  const [optionFilterState, setOptionFilterState] = useState(OptionFilter)
  const navigation = useNavigation()

  const updateOptionFilterState = (value: string) => {
    const index = OptionFilter.findIndex(option => option.value === value)
    if (index !== -1) {
      const newOptionFilterState = [...OptionFilter]
      newOptionFilterState[index].isActive =
        !newOptionFilterState[index].isActive
      setOptionFilterState(newOptionFilterState)
    }
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
          <Content onPress={() => {}}>
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
