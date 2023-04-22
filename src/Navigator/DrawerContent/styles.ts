import styled from 'styled-components/native'
import FastImage from 'react-native-fast-image'
import { Colors } from '@/Styles/Colors'

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 22px;
`

export const Item = styled.View`
  width: 70%;
  flex-direction: column;
`
export const Content = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 20px;
  color: ${Colors.secundary};
  font-weight: 400;
  margin-top: 18px;
`

export const Logo = styled(FastImage)`
  width: 200px;
  height: 100px;
`
