import styled from 'styled-components/native'
import FastImage from 'react-native-fast-image'
import { Dimensions } from 'react-native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`

export const ImageBackground = styled(FastImage)`
  width: ${width}px;
  height: ${height}px;
  flex: 1;
  align-items: center;
  padding-top: 40px;
  z-index: 0;
`
