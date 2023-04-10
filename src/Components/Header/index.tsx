import React, { useState } from 'react'
import { ButtonSearch, Container, InputSearch } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'
interface Props {
  searchImages: (query: string) => void
  valueSearch: string | undefined
}

const Header = ({ searchImages, valueSearch }: Props) => {
  const [search, setSearch] = useState('')
  const navigation = useNavigation()

  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  }
  return (
    <>
      <Container enabled>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => handleOpenDrawer()}
        >
          <Icon name="subject" color="#fff" size={41} style={{ right: 42 }} />
        </TouchableOpacity>
        <InputSearch
          placeholder="Pesquisar imagem"
          placeholderTextColor={'#fff'}
          value={valueSearch ? valueSearch : search}
          onSubmitEditing={() => {
            searchImages(search)
          }}
          onChangeText={value => setSearch(value)}
        />
        <ButtonSearch activeOpacity={0.6} onPress={() => searchImages(search)}>
          <Icon name="search" size={26} color={'#fff'} />
        </ButtonSearch>
      </Container>
    </>
  )
}

export default Header
