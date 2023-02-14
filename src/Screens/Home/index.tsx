import { getPhotos } from '@/Services/Photos/getPhotos'
import React from 'react'
import { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { ImageBackground } from './styles'
import { Photo, ResponseData } from '@/Services/Types/Photos'
import { InputSearch } from '@/Components/Header/styles'
import { Header } from '@/Components'

interface Itens {
  item: Photo
}
const Home = () => {
  const [photos, setPhotos] = useState<ResponseData>()

  const getMorePhotos = async () => {
    const res = await getPhotos()
    setPhotos(res)
  }

  useEffect(() => {
    getMorePhotos()
  }, [])

  const renderItem = (item: Itens) => {
    return (
      <ImageBackground
        source={{
          uri: item.item.src.large2x,
        }}
        resizeMode={'cover'}
      >
        <Header />
      </ImageBackground>
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
