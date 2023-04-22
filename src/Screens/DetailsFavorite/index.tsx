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
import { Alert, PermissionsAndroid } from 'react-native'
import { FavoriteContext } from '@/Context/FavoritesContext'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PhotosContext } from '@/Context/PhotosContext'
import { Colors } from '@/Styles/Colors'

const DetailsFavorite = () => {
  const route = useRoute()
  const {goBack} = useNavigation()
  const [loadingImage, setLoadingImage] = useState<boolean>(false)
  const image = route.params as UnsplashImage
  const { handlerFavorite, checkIsFavorite } = useContext(FavoriteContext)
  const { downloadImage } = useContext(PhotosContext)

  const handlerAlert = async (url: string, name: string) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Permissão para salvar arquivos',
          message:
            'Este aplicativo precisa da permissão de armazenamento externo para salvar arquivos.',
          buttonNeutral: 'Perguntar depois',
          buttonNegative: 'Cancelar',
          buttonPositive: 'OK',
        },
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Aviso', 'Deseja fazer download desta imagem?', [
          {
            text: 'Cancelar',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'Baixar', onPress: () => downloadImage(url, name) },
        ])
      }
    } catch (err) {
      console.warn(err)
    }
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
        <Icon name='arrow-back' color={Colors.black} size={26} />
        <Text>Voltar</Text>
      </GoBack>

      {loadingImage && (
        <ContentLoading>
          <Loading type="9CubeGrid" size={42} color={Colors.secundary} />
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
