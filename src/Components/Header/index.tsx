import React from 'react'
import { ButtonSearch, Container, InputSearch } from './styles'
import { MagnifyingGlass, List } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'

const Header = () => {
  return (
    <>
      <Container>
        <TouchableOpacity activeOpacity={0.6}>
          <List color="#fff" size={38} style={{ right: 42 }} />
        </TouchableOpacity>
        <InputSearch
          placeholder="Pesquisar imagem"
          placeholderTextColor={'#fff'}
        />
        <ButtonSearch activeOpacity={0.6}>
          <MagnifyingGlass size={22} color={'#fff'} />
        </ButtonSearch>
      </Container>
    </>
  )
}

export default Header
