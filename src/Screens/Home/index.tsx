import { getPhotos } from '@/Services/Photos/getPhotos'
import React from 'react'
import { useState, useEffect } from 'react'
import { FlatList, Platform } from 'react-native'
import { Author, Content, ImageBackground } from './styles'
import { Photo, ResponseData } from '@/Services/Types/Photos'
import { Buttons, Header } from '@/Components'
import LoadingImage from '@/Components/LoadingImage'
import RNFetchBlob from 'rn-fetch-blob'
import AwesomeAlert from 'react-native-awesome-alerts'
import { Alert } from 'react-native'

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

  const handlerAlert = (url: string, name: string) =>
    Alert.alert('Aviso', 'Deseja fazer download desta imagem?', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Baixar', onPress: () => downloadImage(url, name) },
    ])

  const downloadImage = (url: string, name: string) => {
    const { config, fs } = RNFetchBlob
    const { DownloadDir, PictureDir } = fs.dirs
    const platform = Platform.OS
    const isIOS = platform === 'ios'
    const isAndroid = platform === 'android'
    let imagePath = ''
    if (isIOS) {
      imagePath = `${DownloadDir}/${name}`
    } else if (isAndroid) {
      imagePath = `${PictureDir}/${name}`
    }
    config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        title: name,
        path: imagePath,
      },
      path: imagePath,
    })
      .fetch('GET', url)
      .then(res => {
        toast?.show('Download realizado com sucesso!', {
          type: 'success',
        })
        console.log('The file saved to ', res.path())
      })
  }

  const shareImage = () => {}

  useEffect(() => {
    getMorePhotos()
  }, [])

  const renderItem = ({ item }: Itens) => {
    return (
      <ImageBackground
        source={{
          uri: item.src.large2x,
          priority: 'high',
        }}
        resizeMode={'cover'}
      >
        <Header />
        <Buttons
          share={() => shareImage()}
          download={() =>
            handlerAlert(item.src.large2x, `Photo-by ${item.photographer}`)
          }
        />
        <Content>
          <Author>Fotografo(a): {item.photographer}</Author>
        </Content>
      </ImageBackground>
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
