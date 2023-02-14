import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
`

export const InputSearch = styled.TextInput`
  width: 40%;
  height: 40px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-width: 2px;
  border-color: #fff;
  padding-left: 12px;
`
export const ButtonSearch = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  border-left-width: 0px;
  border-width: 2px;
  border-color: #fff;
  align-items: center;
  justify-content: center;
`
