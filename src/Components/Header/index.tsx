import React, { useContext, useEffect, useState } from 'react'
import {
  ButtonClose,
  ButtonSearch,
  Container,
  Content,
  InputSearch,
  TextClean,
} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { PhotosContext } from '@/Context/PhotosContext'

const Header = () => {
  const { filter, SearchPhotos, cleanFilter } = useContext(PhotosContext)
  const [search, setSearch] = useState(filter.query)

  const navigation = useNavigation()

  useEffect(() => {
    setSearch(filter.query)
  }, [filter.query])

  const handleCleanFilter = () => {
    cleanFilter()
    setSearch('')
  }

  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  }

  return (
    <>
      <Container enabled>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{ marginRight: 18 }}
          onPress={() => handleOpenDrawer()}
        >
          <Icon name="subject" color="#fff" size={41} />
        </TouchableOpacity>
        <Content>
          <InputSearch
            placeholder="Pesquisar imagem"
            placeholderTextColor={'#fff'}
            value={search}
            onSubmitEditing={() => {
              SearchPhotos(search)
            }}
            onChangeText={value => setSearch(value)}
          />
          <ButtonSearch
            activeOpacity={0.6}
            onPress={() => SearchPhotos(search)}
          >
            <Icon name="search" size={26} color={'#fff'} />
          </ButtonSearch>
        </Content>
        {search?.length >= 1 && (
          <ButtonClose
            style={{ marginLeft: 16 }}
            activeOpacity={0.6}
            onPress={() => handleCleanFilter()}
          >
            <TextClean>Limpar</TextClean>
          </ButtonClose>
        )}
      </Container>
    </>
  )
}

export default Header
