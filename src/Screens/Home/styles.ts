import styled from 'styled-components/native'
import FastImage from 'react-native-fast-image'
import { Dimensions } from 'react-native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const ImageBackground = styled.ImageBackground`
  width: ${width}px;
  height: ${height}px;
  flex: 1;
  align-items: center;
  padding-top: 40px;
  background-color: #181a20;
  z-index: 0;
`

export const Content = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
`

export const Author = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`

export const ContentLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`