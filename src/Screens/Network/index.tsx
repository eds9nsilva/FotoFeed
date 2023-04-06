import React from 'react'
import { Container, Image, Message } from './styles'
import error from '@/Asserts/erro-de-conexao.png'

const Network = () => {
  return (
    <Container>
      <Image source={error} />
      <Message>
        Sem conexão com a internet no momento. Por favor, verifique suas
        configurações de rede ou tente novamente mais tarde.
      </Message>
    </Container>
  )
}
export default Network
