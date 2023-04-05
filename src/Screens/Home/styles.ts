import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const ImageBackground = styled.ImageBackground`
  width: ${width}px;
  height: ${height}px;
  align-items: center;
  background-color: #181a20;
`

export const Content = styled.View`
  position: absolute;
  bottom: 8%;
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