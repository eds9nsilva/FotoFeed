import { Colors } from '@/Styles/Colors'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
  align-items: center;
  padding-top: 40%;
  padding-right: 8%;
  padding-left: 8%;
`

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`

export const Message = styled.Text`
  font-size: 18px;
  color: ${Colors.secundary};
  text-align: center;
`
