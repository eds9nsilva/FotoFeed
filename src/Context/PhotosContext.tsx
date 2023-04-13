import React, { createContext, useContext, useEffect, useState } from 'react'
import { DefaultFilter } from '@/Constants/OptionFilter'
import { getPhotos, searchPhotos } from '@/Services/Photos/getPhotos'
import { Filter } from '@/Services/Types/Filters'
import { UnsplashImage } from '@/Services/Types/Photos'

export interface IPhotosContext {
  photos: UnsplashImage[]
  filter: Filter
  loading: boolean
  addPhotos: (filte: Filter) => void
  updateFilter: (filte: Filter) => void
  handlerMorePhotos: () => void
  SearchPhotos: (query: string) => void
  cleanFilter: () => void
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

  useEffect(() => {
    async function loadFotos() {
      setLoading(true)
      const response = await getPhotos(filter).finally(() => {
        setLoading(false)
      })
      !!response && setPhotos(response)
    }
    loadFotos()
  }, [])

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

  const updateFilter = (filter: Filter) => {
    setFilter(filter)
  }

  const cleanFilter = () => {
    updateFilter(DefaultFilter)
    async function loadFotos() {
      setLoading(true)
      const response = await getPhotos(DefaultFilter).finally(() => {
        setLoading(false)
      })
      !!response && setPhotos(response)
    }
    loadFotos()
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
        cleanFilter
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
