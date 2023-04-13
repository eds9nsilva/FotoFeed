import React, { useContext, useState } from 'react'
import { Platform, Alert, Dimensions } from 'react-native'
import { Author, Content, ContentLoading, ImageBackground } from './styles'
import { UnsplashImage } from '@/Services/Types/Photos'
import { Buttons, Header } from '@/Components'
import RNFetchBlob from 'rn-fetch-blob'
import Loading from 'react-native-spinkit'
import { FlashList } from '@shopify/flash-list'
import { PhotosContext } from '@/Context/PhotosContext'
import { FavoriteContext } from '@/Context/FavoritesContext'
interface Itens {
  item: UnsplashImage
}
const Home = () => {
  const [loadingImage, setLoadingImage] = useState<boolean>(false)
  const height = Dimensions.get('window').height
  const { photos, handlerMorePhotos } = useContext(PhotosContext)
  const { handlerFavorite, favorites, checkIsFavorite } =
    useContext(FavoriteContext)

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
      .then(() => {
        toast?.show('Download realizado com sucesso!', {
          type: 'success',
        })
      })
  }

  const renderItem = ({ item }: Itens) => {
    const isFavorite = checkIsFavorite(item.id)
    return (
      <>
        <ImageBackground
          source={{
            uri: item.urls?.regular ? item.urls?.regular : item.urls?.small,
          }}
          onLoadStart={() => setLoadingImage(true)}
          onLoadEnd={() => setLoadingImage(false)}
          resizeMode={'cover'}
        >
          <Header />
          {loadingImage && (
            <ContentLoading>
              <Loading type="9CubeGrid" size={42} color={'#fff'} />
            </ContentLoading>
          )}
          <Buttons
            download={() =>
              handlerAlert(
                item.urls?.regular ? item.urls?.regular : item.urls?.small,
                `Photo-by ${item.user?.username}`,
              )
            }
            isFavorito={isFavorite}
            save={() => handlerFavorite(item)}
          />
          <Content>
            <Author>Fotografo(a): {item.user?.username}</Author>
          </Content>
        </ImageBackground>
      </>
    )
  }

  return (
    photos && (
      <FlashList
        data={photos}
        extraData={favorites}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        pagingEnabled
        decelerationRate="fast"
        snapToInterval={height}
        viewabilityConfig={{ itemVisiblePercentThreshold: 90 }}
        onEndReached={handlerMorePhotos}
        onEndReachedThreshold={0.2}
        showsVerticalScrollIndicator={false}
      />
    )
  )
}

export default Home
