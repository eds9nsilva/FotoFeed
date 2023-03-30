import React, { useState } from 'react'
import { ButtonSearch, Container, InputSearch } from './styles'
import { MagnifyingGlass, List } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { asyncSearchPhotos, setOptionFilter } from '@/Store/Photos/getPhotos'
import { RootState } from '@/Store'
import { DrawerActions, useNavigation } from '@react-navigation/native'

const Header = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const navigation = useNavigation()

  const { filter } = useSelector((state: RootState) => state.photos)

  const searchImages = async () => {
    if (search.length < 1) return
    const newFilter = {
      ...filter,
      query: search,
    }
    dispatch(setOptionFilter(newFilter))
    dispatch(asyncSearchPhotos(newFilter))
  }

  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  }
  return (
    <>
      <Container>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => handleOpenDrawer()}
        >
          <List color="#fff" size={41} style={{ right: 42 }} />
        </TouchableOpacity>
        <InputSearch
          placeholder="Pesquisar imagem"
          placeholderTextColor={'#fff'}
          value={search}
          onChangeText={value => setSearch(value)}
        />
        <ButtonSearch activeOpacity={0.6} onPress={() => searchImages()}>
          <MagnifyingGlass size={22} color={'#fff'} />
        </ButtonSearch>
      </Container>
    </>
  )
}

export default Header
