import React, { createContext, useContext, useEffect, useState } from 'react'
import { DefaultFilter } from '@/Constants/OptionFilter'
import { getPhotos } from '@/Services/Photos/getPhotos'
import { Filter } from '@/Services/Types/Filters'
import { UnsplashImage } from '@/Services/Types/Photos'

export interface IPhotosContext {
  photos: UnsplashImage[]
  filter: Filter
  loading: boolean
  addPhotos(photo: UnsplashImage[]): void
}

interface IProps {
  children: React.ReactElement
}

export const PhotosContext = createContext<IPhotosContext>({} as IPhotosContext)

export const PhotosProvider: React.FunctionComponent<IProps> = ({ children }) => {
  const [photos, setPhotos] = useState<UnsplashImage[]>([])
  const [filter, setFilter] = useState<Filter>(DefaultFilter)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    async function loadFotos() {
      setLoading(true)
      const response = await getPhotos(filter).finally(() => {
        setLoading(false);
      })
      !!response && setPhotos(response)
    }
    loadFotos()
  }, [])

  const addPhotos = () => {}
  return (
    <PhotosContext.Provider value={{ photos, filter, addPhotos, loading }}>
      {children}
    </PhotosContext.Provider>
  )
}

export function usePhotos(): IPhotosContext {
  const context = useContext(PhotosContext)
  if (!context) {
    throw new Error('useTaskList deve ser usado em um PhotosProvider')
  }
  return context
}
