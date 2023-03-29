import styled from 'styled-components/native'
import FastImage from 'react-native-fast-image'

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
  color: #fff;
  font-weight: 400;
  margin-top: 18px;
`

export const Categories = styled.TouchableOpacity`
  border-color: #ffff;
  border-width: 1px;
  padding: 4px;
  margin: 4px;
  height: auto;
  width: auto;
  justify-content: center;
  align-items: center;
`
export const TextCategories = styled.Text`
  font-size: 14px;
  color: #fff;
  text-align: center;
`

export const Logo = styled(FastImage)`
  width: 200px;
  height: 100px;
`

export const Button = styled.TouchableOpacity`
  width: auto;
  height: auto;
  padding: 12px;
  border-color: #fff;
  border-width: 1.4px;
  margin-top: 12px;
`

export const TextButton = styled.Text`
  font-size: 14px;
  color: #fff;
  text-align: center;
`