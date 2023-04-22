import { Colors } from '@/Styles/Colors'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const Container = styled.View`
  width: ${width}px;
  height: ${height}px;
  background-color: ${Colors.primary};
  align-items: center;
  justify-content: center;
  z-index: 99;
`
