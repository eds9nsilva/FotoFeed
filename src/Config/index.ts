import {
  REACT_NATIVE_ENVIRONMENT,
  REACT_NATIVE_API_URL_PROD,
  REACT_NATIVE_API_URL_QA,
  REACT_NATIVE_API_KEY
} from '@env'

const getApiURL = () => {
  switch (REACT_NATIVE_ENVIRONMENT) {
    case 'PROD':
      return REACT_NATIVE_API_URL_PROD
    case 'QA':
      return REACT_NATIVE_API_URL_QA
    default:
      return REACT_NATIVE_API_URL_PROD
  }
}

export const Config = {
  API_URL: getApiURL(),
  KEY: REACT_NATIVE_API_KEY,
}
