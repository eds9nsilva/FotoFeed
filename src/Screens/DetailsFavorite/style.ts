import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { Colors } from '@/Styles/Colors'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const ImageBackground = styled.ImageBackground`
  width: ${width}px;
  height: ${height}px;
  align-items: center;
  background-color: ${Colors.primary};
`

export const Text = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${Colors.secundary};
`

export const GoBack = styled.TouchableOpacity`
  width: 86px;
  height: 33px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${Colors.secundary};
  position: absolute;
  left: 38px;
  top: 22px;
`

export const Content = styled.View`
  position: absolute;
  bottom: 8%;
  left: 20px;
`

export const Author = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${Colors.secundary};
`

export const ContentLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
