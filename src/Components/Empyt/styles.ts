import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const ContainerEmpyt = styled.View`
  padding-left: 12%;
  padding-right: 12%;
  align-items: center;
  justify-content: center;
  background-color: #181a20;
  width: ${width}px;
  height: ${height}px;
  flex: 1;
`

export const TextEmpyt = styled.Text`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  margin-top: 12px;
`