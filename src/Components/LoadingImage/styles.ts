import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const Container = styled.View`
  width: ${width}px;
  height: ${height}px;
  background-color: #181a20;
  align-items: center;
  justify-content: center;
  z-index: 99;
`
