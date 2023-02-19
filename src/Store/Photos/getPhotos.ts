import { getPhotos } from '@/Services/Photos/getPhotos'
import { Photos } from '@/Services/Types/Photos'
import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from '..'

const initialState: Photos = {
  photos: [],
  loading: false,
}

const photos = createSlice({
  name: 'images',
  initialState,
  reducers: {
    toggleLoading(state, { payload }) {
      state.loading = payload
    },
    setPhotos(state, { payload }) {
      state.photos = payload
    },
  },
})

export const { setPhotos, toggleLoading } = photos.actions
export default photos.reducer

export function asyncGetPhotos() {
  return async function (dispatch: AppDispatch) {
    dispatch(toggleLoading(true))
    try {
      const response = await getPhotos()
      dispatch(setPhotos(response?.photos))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(toggleLoading(false))
    }
  }
}
