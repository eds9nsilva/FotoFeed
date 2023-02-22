import React, { useCallback } from 'react'
import { useEffect } from 'react'
import { FlatList, Platform } from 'react-native'
import { Author, Content, ImageBackground } from './styles'
import { Photo } from '@/Services/Types/Photos'
import { Buttons, Header } from '@/Components'
import LoadingImage from '@/Components/LoadingImage'
import RNFetchBlob from 'rn-fetch-blob'
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { asyncGetPhotos } from '@/Store/Photos/getPhotos'
import { useSelector } from 'react-redux'
import { RootState } from '@/Store'

interface Itens {
  item: Photo
}
const Home = () => {
  const dispatch = useDispatch()

  const { photos, loading: loadingPhotos, filter } = useSelector(
    (state: RootState) => state.photos,
  )

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

  const getPhotos = useCallback(() => dispatch(asyncGetPhotos(filter)), [])

  useEffect(() => {
    getPhotos()
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

  if (loadingPhotos) {
    return <LoadingImage />
  }

  return (
    photos && (
      <FlatList
        data={photos}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        pagingEnabled
        initialNumToRender={photos.length}
        showsVerticalScrollIndicator={false}
      />
    )
  )
}

export default Home
