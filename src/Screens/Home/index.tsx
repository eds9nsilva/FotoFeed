import React, { useContext, useState } from 'react'
import { Alert, Dimensions, PermissionsAndroid } from 'react-native'
import { Author, Content, ContentLoading, ImageBackground } from './styles'
import { UnsplashImage } from '@/Services/Types/Photos'
import { Buttons, Header, Empyt } from '@/Components'
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
  const { photos, handlerMorePhotos, downloadImage } = useContext(PhotosContext)
  const { handlerFavorite, favorites, checkIsFavorite } =
    useContext(FavoriteContext)

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

  const renderItem = ({ item }: Itens) => {
    const isFavorite = checkIsFavorite(item.id)
    return (
      <>
        <ImageBackground
          key={item.id}
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
              handlerAlert(item.links.download, `Photo-by-${item.user?.username}`)
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
    <FlashList
      data={photos}
      extraData={favorites}
      keyExtractor={item => String(item.id)}
      renderItem={renderItem}
      pagingEnabled
      decelerationRate="fast"
      snapToInterval={height}
      ListEmptyComponent={
        <Empyt text="Infelizmente ocorreu um erro ao carregar as fotos, tente novamente mais tarde!" />
      }
      viewabilityConfig={{ itemVisiblePercentThreshold: 90 }}
      onEndReached={() => handlerMorePhotos()}
      onEndReachedThreshold={0.1}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default Home
