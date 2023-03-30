import { DefaultFilter } from '@/Constants/OptionFilter'
import { getPhotos, searchPhotos } from '@/Services/Photos/getPhotos'
import { Filter } from '@/Services/Types/Filters'
import { Photos } from '@/Services/Types/Photos'
import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from '..'

const initialState: Photos = {
  photos: [],
  filter: DefaultFilter,
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
    setOptionFilter(state, { payload }) {
      state.filter = payload
    },
  },
})

export const { setPhotos, toggleLoading, setOptionFilter } = photos.actions
export default photos.reducer

export function asyncGetPhotos(payload: Filter) {
  return async function (dispatch: AppDispatch) {
    dispatch(toggleLoading(true))
    try {
      const response = await getPhotos(payload)
      dispatch(setPhotos(response))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(toggleLoading(false))
    }
  }
}

export function asyncSearchPhotos(payload: Filter) {
  return async function (dispatch: AppDispatch) {
    dispatch(toggleLoading(true))
    try {
      const response = await searchPhotos(payload)
      dispatch(setPhotos(response.photos.results))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(toggleLoading(false))
    }
  }
}
