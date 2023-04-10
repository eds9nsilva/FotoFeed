import React, { useContext, useState } from 'react'
import { UnsplashImage } from '@/Services/Types/Photos'
import {
  Author,
  Content,
  ContentLoading,
  GoBack,
  ImageBackground,
  Text,
} from './style'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Buttons } from '@/Components'
import Loading from 'react-native-spinkit'
import RNFetchBlob from 'rn-fetch-blob'
import { Alert, Platform } from 'react-native'
import { FavoriteContext } from '@/Context/FavoritesContext'
import Icon from 'react-native-vector-icons/MaterialIcons'

const DetailsFavorite = () => {
  const route = useRoute()
  const {goBack} = useNavigation()
  const [loadingImage, setLoadingImage] = useState<boolean>(false)
  const image = route.params as UnsplashImage
  const { handlerFavorite, checkIsFavorite } = useContext(FavoriteContext)

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

  const isFavorite = checkIsFavorite(image.id)

  return (
    <ImageBackground
      source={{
        uri: image.urls?.regular ? image.urls?.regular : image.urls?.small,
      }}
      onLoadStart={() => setLoadingImage(true)}
      onLoadEnd={() => setLoadingImage(false)}
      resizeMode={'cover'}
    >
      <GoBack onPress={() => goBack()}>
        <Icon name='arrow-back' color='#000' size={26} />
        <Text>Voltar</Text>
      </GoBack>

      {loadingImage && (
        <ContentLoading>
          <Loading type="9CubeGrid" size={42} color={'#fff'} />
        </ContentLoading>
      )}
      <Buttons
        download={() =>
          handlerAlert(
            image.urls?.regular ? image.urls?.regular : image.urls?.small,
            `Photo-by ${image.user?.username}`,
          )
        }
        isFavorito={isFavorite}
        save={() => handlerFavorite(image)}
      />
      <Content>
        <Author>Fotografo(a): {image.user?.username}</Author>
      </Content>
    </ImageBackground>
  )
}

export default DetailsFavorite
