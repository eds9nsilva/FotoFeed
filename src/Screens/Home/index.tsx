import { getPhotos } from '@/Services/Photos/getPhotos'
import React from 'react'
import { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { Container, ImageBackground } from './styles'
import { Photo, ResponseData } from '@/Services/Types/Photos'
import { Header } from '@/Components'
import LoadingImage from '@/Components/LoadingImage'

interface Itens {
  item: Photo
}
const Home = () => {
  const [photos, setPhotos] = useState<ResponseData>()
  const [loading, setLoading] = useState(false)
  const getMorePhotos = async () => {
    setLoading(true)
    const res = await getPhotos().finally(() => setLoading(false))
    setPhotos(res)
  }

  useEffect(() => {
    getMorePhotos()
  }, [])

  const renderItem = ({ item }: Itens) => {
    return (
      <Container>
        <ImageBackground
          source={{
            uri: item.src.large2x,
            priority: 'high',
          }}
          resizeMode={'cover'}
        >
          <Header />
        </ImageBackground>
      </Container>
    )
  }

  return loading ? (
    <LoadingImage />
  ) : (
    photos?.photos && (
      <FlatList
        data={photos.photos}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        pagingEnabled
        initialNumToRender={photos.photos.length}
        showsVerticalScrollIndicator={false}
      />
    )
  )
}

export default Home
