import React, { useContext, useState } from 'react'
import { Platform, Alert, FlatList } from 'react-native'
import { Author, Content, ContentLoading, ImageBackground } from './styles'
import { UnsplashImage } from '@/Services/Types/Photos'
import { Buttons, Header } from '@/Components'
import LoadingImage from '@/Components/LoadingImage'
import RNFetchBlob from 'rn-fetch-blob'
import { useDispatch } from 'react-redux'
import {
  asyncGetPhotos,
  asyncSearchPhotos,
  setOptionFilter,
} from '@/Store/Photos/getPhotos'
import { RootState } from '@/Store'
import Loading from 'react-native-spinkit'
import { FlashList } from '@shopify/flash-list'
import { PhotosContext } from '@/Context/PhotosContext'
interface Itens {
  item: UnsplashImage
}
const Home = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const {photos, filter, loading: loadingPhotos} = useContext(PhotosContext)
  
  console.log(filter)

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


  const handlerMorePhotos = () => {

  }
  
  const renderItem = ({ item }: Itens) => {
    return (
      <ImageBackground
        source={{
          uri: item.urls.regular,
          priority: 'high',
        }}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        resizeMode={'cover'}
      >
        <Header />
        {loading && (
          <ContentLoading>
            <Loading type="9CubeGrid" size={42} color={'#fff'} />
          </ContentLoading>
        )}
        <Buttons
          share={() => shareImage()}
          download={() =>
            handlerAlert(item.urls.regular, `Photo-by ${item.user.username}`)
          }
        />
        <Content>
          <Author>Fotografo(a): {item.user.username}</Author>
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
        onEndReached={handlerMorePhotos}
        onEndReachedThreshold={0.2}
        showsVerticalScrollIndicator={false}
      />
    )
  )
}

export default Home
