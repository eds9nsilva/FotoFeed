import styled from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView`
  flex-direction: row;
  align-items: center;
  padding-top: 10%;
`

export const InputSearch = styled.TextInput`
  width: 40%;
  height: 40px;
  border-top-left-radius: 1px;
  border-bottom-left-radius: 1px;
  border-width: 2px;
  border-color: #fff;
  padding-left: 12px;
  color: #fff;
`
export const ButtonSearch = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-bottom-right-radius: 1px;
  border-top-right-radius: 1px;
  border-left-width: 0px;
  border-width: 2px;
  border-color: #fff;
  align-items: center;
  justify-content: center;
`
