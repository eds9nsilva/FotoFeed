import { getPhotos } from '@/Services/Photos/getPhotos'
import React from 'react'
import { useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, Dimensions } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Container } from './styles'
import { Photo, ResponseData } from '@/Services/Types/Photos'

interface Itens {
  item: Photo
}
const Home = () => {
  const [photos, setPhotos] = useState<ResponseData>()
  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height

  const getMorePhotos = async () => {
    const res = await getPhotos()
    setPhotos(res)
  }

  useEffect(() => {
    getMorePhotos()
  }, [])

  const renderItem = (item: Itens) => {
    return (
      <Container>
        <FastImage
          source={{
            uri: item.item.src.large2x,
          }}
          style={{ width: width, height: height, flex: 1 }}
        />
      </Container>
    )
  }

  return (
    !!photos?.photos && (
      <FlatList
        data={photos.photos}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        pagingEnabled
      />
    )
  )
}

export default Home
