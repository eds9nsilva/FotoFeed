import React from 'react'
import { UnsplashImage } from '@/Services/Types/Photos'
import { useNavigation } from '@react-navigation/native'
import { Image, Container } from './styles'

interface Props {
  image: UnsplashImage
}

export const Card = ({ image }: Props) => {
  const { navigate } = useNavigation()

  const handlerOpenDetails = () => {
    navigate('DetailsFavorite', image)
  }

  return (
    <Container onPress={() => handlerOpenDetails()}>
      <Image
        source={{
          uri: image.urls.small ? image.urls.small : image.urls.regular,
        }}
      />
    </Container>
  )
}
