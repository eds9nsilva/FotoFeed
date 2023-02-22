import axios from 'axios'
import { Config } from '@/Config'

const instance = axios.create({
  baseURL: Config.API_URL,

  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: ` Client-ID ${Config.KEY}`,
  },
  timeout: 3000,
})

export default instance
