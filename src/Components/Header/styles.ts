import { Colors } from '@/Styles/Colors'
import styled from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 10%;
`

export const Content = styled.View`
  flex-direction: row;
`

export const InputSearch = styled.TextInput`
  width: 160px;
  height: 40px;
  border-top-left-radius: 1px;
  border-bottom-left-radius: 1px;
  border-width: 2px;
  border-color: ${Colors.secundary};
  padding-left: 12px;
  color: ${Colors.secundary};
`
export const ButtonSearch = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-bottom-right-radius: 1px;
  border-top-right-radius: 1px;
  border-left-width: 0px;
  border-width: 2px;
  border-color: ${Colors.secundary};
  align-items: center;
  justify-content: center;
`

export const ButtonClose = styled.TouchableOpacity`
  width: 50px;
  height: 40px;
  border-width: 2px;
  border-color: ${Colors.secundary};
  align-items: center;
  justify-content: center;
`
export const TextClean = styled.Text`
  color: ${Colors.secundary};
  font-size: 12px;
`
