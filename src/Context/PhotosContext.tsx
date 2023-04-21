import React, { createContext, useContext, useEffect, useState } from 'react'
import { DefaultFilter } from '@/Constants/OptionFilter'
import { getPhotos, searchPhotos } from '@/Services/Photos/getPhotos'
import { Filter } from '@/Services/Types/Filters'
import { UnsplashImage } from '@/Services/Types/Photos'
import RNFetchBlob from 'rn-fetch-blob'
import { Platform } from 'react-native'

export interface IPhotosContext {
  photos: UnsplashImage[]
  filter: Filter
  loading: boolean
  addPhotos: (filte: Filter) => void
  updateFilter: (filte: Filter) => void
  handlerMorePhotos: () => void
  SearchPhotos: (filter: Filter) => void
  cleanFilter: () => void
  downloadImage: (url: string, name: string) => void
}

interface IProps {
  children: React.ReactElement
}

export const PhotosContext = createContext<IPhotosContext>({} as IPhotosContext)

export const PhotosProvider: React.FunctionComponent<IProps> = ({
  children,
}) => {
  const [photos, setPhotos] = useState<UnsplashImage[]>([])
  const [filter, setFilter] = useState<Filter>(DefaultFilter)
  const [loading, setLoading] = useState<boolean>(false)
  const [totalPage, setTotalPage] = useState<number | undefined>()
 
  useEffect(() => {
    async function loadFotos() {
      setLoading(true)
      setFilter(DefaultFilter)
      const response = await getPhotos(DefaultFilter).finally(() => {
        setLoading(false)
      })
      !!response?.data && setPhotos(response.data)
      setTotalPage(response?.TotalPage)
    }
    loadFotos()
  }, [])

  const addPhotos = async (filter: Filter) => {
    setLoading(true)
    await getPhotos(filter)
      .then(response => {
        setTotalPage(response?.TotalPage)
        const newPhotos = [...photos, ...response?.data]
        setPhotos(newPhotos)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const updateFilter = (filter: Filter) => {
    setFilter(filter)
  }

  const cleanFilter = () => {
    updateFilter(DefaultFilter)
    async function loadFotos() {
      setLoading(true)
      setFilter(DefaultFilter)
      const response = await getPhotos(DefaultFilter).finally(() => {
        setLoading(false)
      })
      !response?.data && setPhotos(response?.data)
      setFilter(response?.TotalPage)
    }
    loadFotos()
  }

  const SearchPhotos = async (filter: Filter) => {
    await searchPhotos(filter).then(response => {
      setTotalPage(response?.TotalPage)
      if (filter.page === 1) {
        setPhotos(response?.data)
      } else {
        setPhotos([...photos, response?.data])
      }
    })
  }

  const handlerMorePhotos = () => {
    if (filter.page === totalPage) {
      toast?.show('Fim da lista!', {
        type: 'warning',
      })
      return
    }
    const newFilter = {
      ...filter,
      page: filter.page + 1,
    }
    updateFilter(newFilter)
    if (newFilter.query) {
      SearchPhotos(newFilter)
    } else {
      addPhotos(newFilter)
    }
  }

  const downloadImage = async (url: string, name: string) => {
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

  return (
    <PhotosContext.Provider
      value={{
        photos,
        filter,
        addPhotos,
        loading,
        updateFilter,
        handlerMorePhotos,
        SearchPhotos,
        cleanFilter,
        downloadImage,
      }}
    >
      {children}
    </PhotosContext.Provider>
  )
}

export function usePhotos(): IPhotosContext {
  const context = useContext(PhotosContext)
  if (!context) {
    throw new Error('usePhotos deve ser usado em um PhotosProvider')
  }
  return context
}
