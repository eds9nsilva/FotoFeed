import React from 'react'
import { ButtonSearch, Container, InputSearch } from './styles'
import { MagnifyingGlass } from 'phosphor-react-native'

const Header = () => {
  return (
    <>
      <Container>
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
