import instance from '@/Services'
import { UnsplashImage } from '@/Services/Types/Photos'
import { Filter } from '../Types/Filters'

export const getPhotos = async (payload: Filter) => {
  try {
    console.log('Chamou com o payload: ', payload.page)
    const res = await instance.get<UnsplashImage[]>(
      `/photos?page=${payload.page}`,
    )

    const data = res.data.map(item => {
      if (item.urls.regular || item.urls.small) {
        return item
      }
    })

    const response = {
      data,
      TotalPage: res.request.responseHeaders['x-total'],
    }
    return response
  } catch (error) {
    console.log(error)
  }
}

export const searchPhotos = async (payload: Filter) => {
  try {
    const res = await instance.get(
      `/search?query=${payload.query}&page=${payload.page}`,
    )

    const data = res.data.photos.results.map(item => {
      if (item.urls.regular || item.urls.small) {
        return item
      }
    })

    const response = {
      data,
      TotalPage: res.data.photos.total_pages,
    }
    return response
  
  } catch (error) {
    console.log(error)
  }
}
