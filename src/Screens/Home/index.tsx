import React, { useEffect, useState } from 'react'
import { Platform, Alert } from 'react-native'
import { Author, Content, ContentLoading, ImageBackground } from './styles'
import { UnsplashImage } from '@/Services/Types/Photos'
import { Buttons, Header, LoadingImage } from '@/Components'
import RNFetchBlob from 'rn-fetch-blob'
import Loading from 'react-native-spinkit'
import { FlashList } from '@shopify/flash-list'
import { getPhotos, searchPhotos } from '@/Services/Photos/getPhotos'
import { DefaultFilter } from '@/Constants/OptionFilter'
import { Filter } from '@/Services/Types/Filters'
interface Itens {
  item: UnsplashImage
}
const Home = () => {
  const [photos, setPhotos] = useState<UnsplashImage[]>([])
  const [filter, setFilter] = useState<Filter>(DefaultFilter)
  const [loading, setLoading] = useState<boolean>(false)
  const [loadingImage, setLoadingImage] = useState<boolean>(false)

  useEffect(() => {
    async function loadFotos() {
      setLoading(true)
      const response = await getPhotos(filter).finally(() => {
        setLoading(false)
      })
      !!response && setPhotos(response)
    }
    loadFotos()
  })

  const addPhotos = async (filter: Filter) => {
    setLoading(true)
    await getPhotos(filter)
      .then(response => {
        if (filter.page === 1) {
          !!response && setPhotos(response)
        } else {
          const newPhotos = [...photos, ...response]
          setPhotos(newPhotos)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const SearchPhotos = async (query: string) => {
    const newFilter = {
      page: filter.query ? filter.page + 1 : 1,
      query,
    }
    updateFilter(newFilter)
    await searchPhotos(newFilter).then(response => {
      if (newFilter.page === 1) {
        setPhotos(response.photos.results)
      } else {
        setPhotos([...photos, response.photos.results])
      }
    })
  }

  const updateFilter = (filter: Filter) => {
    setFilter(filter)
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
      })
  }

  const shareImage = () => {}

  const handlerMorePhotos = () => {
    const newFilter = {
      ...filter,
      page: filter.page + 1,
    }
    updateFilter(newFilter)
    if (newFilter.query) {
      SearchPhotos(newFilter.query)
    } else {
      addPhotos(newFilter)
    }
  }

  const renderItem = ({ item }: Itens) => {
    return (
      <ImageBackground
        source={{
          uri: item.urls.regular ? item.urls.regular : item.urls.small,
          priority: 'high',
        }}
        onLoadStart={() => setLoadingImage(true)}
        onLoadEnd={() => setLoadingImage(false)}
        resizeMode={'cover'}
      >
        <Header
          valueSearch={filter.query}
          searchImages={query => SearchPhotos(query)}
        />
        {loadingImage && (
          <ContentLoading>
            <Loading type="9CubeGrid" size={42} color={'#fff'} />
          </ContentLoading>
        )}
        <Buttons
          share={() => shareImage()}
          download={() =>
            handlerAlert(
              item.urls.regular ? item.urls.regular : item.urls.small,
              `Photo-by ${item.user.username}`,
            )
          }
          save={() => {}}
        />
        <Content>
          <Author>Fotografo(a): {item.user.username}</Author>
        </Content>
      </ImageBackground>
    )
  }

  if (loading) {
    return <LoadingImage />
  }

  return (
    photos && (
      <FlashList
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
