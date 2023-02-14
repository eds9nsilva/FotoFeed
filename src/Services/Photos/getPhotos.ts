import instance from '@/Services'
import { ResponseData } from '@/Services/Types/Photos'

export const getPhotos = async () => {
  try {
    const res = await instance.get<ResponseData>('/curated')
    return res.data
  } catch (error) {
    console.log(error)
  }
}
