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
import { ArrowDown, ArrowRight } from 'phosphor-react-native'
import { DefaultFilter, OptionFilter } from '@/Constants/OptionFilter'
import { FlashList } from '@shopify/flash-list'
import { useDispatch, useSelector } from 'react-redux'
import { setOptionFilter } from '@/Store/Photos/getPhotos'
import { RootState } from '@/Store'
import { DrawerActions, useNavigation } from '@react-navigation/native'

const Drawer: React.FC<DrawerContentComponentProps> = () => {
  const [open, setOpen] = useState(false)
  const [optionFilterState, setOptionFilterState] = useState(OptionFilter)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { filter } = useSelector((state: RootState) => state.photos)

  const updateOptionFilterState = (value: string) => {
    const index = OptionFilter.findIndex(option => option.value === value)
    if (index !== -1) {
      const newOptionFilterState = [...OptionFilter]
      newOptionFilterState[index].isActive =
        !newOptionFilterState[index].isActive
      setOptionFilterState(newOptionFilterState)
    }
  }

  const handlerFilter = () => {
    const activeValues = optionFilterState
      .filter(item => item.isActive)
      .map(item => item.value)
    const newQuery = filter.query
      .concat(activeValues)
      .filter((value, index, self) => {
        return self.indexOf(value) === index
      })
    const newFilter = {
      ...filter,
      query: newQuery,
    }
    dispatch(setOptionFilter(newFilter))
    navigation.dispatch(DrawerActions.closeDrawer())
    setOpen(false)
  }

  const listCategoriesFilter = useCallback(() => {
    return (
      <>
        <FlashList
          data={optionFilterState}
          keyExtractor={item => String(item.id)}
          numColumns={2}
          renderItem={item => {
            return (
              <Categories
                onPress={() => updateOptionFilterState(item.item.value)}
                style={{ borderColor: item.item.isActive ? '#0f0f' : '#fff' }}
              >
                <TextCategories>{item.item.name}</TextCategories>
              </Categories>
            )
          }}
        />
        <Button onPress={() => handlerFilter()}>
          <TextButton>Filtrar</TextButton>
        </Button>
      </>
    )
  }, [filter.query, optionFilterState])

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
        {/*
        <Item>
          <Content onPress={() => setOpen(!open)}>
            <Title>CATEGORIAS</Title>
            {open ? (
              <ArrowDown color="#ffff" style={{ top: 10, left: 8 }} size={22} />
            ) : (
              <ArrowRight
                color="#ffff"
                style={{ top: 10, left: 8 }}
                size={22}
              />
            )}
          </Content>
          {open && listCategoriesFilter()}
        </Item>
        */}
        <Item>
          <Content onPress={() => {}}>
            <Title>FAVORITOS</Title>
          </Content>
        </Item>
        <Item>
          <Content onPress={() => dispatch(setOptionFilter(DefaultFilter))}>
            <Title>LIMPAR FILTRO</Title>
          </Content>
        </Item>
      </Container>
    </DrawerContentScrollView>
  )
}

export default Drawer
