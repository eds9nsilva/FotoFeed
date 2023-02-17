import React from 'react'
import { Container } from './styles'
import Loading from 'react-native-spinkit'

const LoadingImage = () => {
  return (
    <Container>
      <Loading type="9CubeGrid" size={42} color={'#fff'} />
    </Container>
  )
}

export default LoadingImage
