import styled from 'styled-components/native'
import FastImage from 'react-native-fast-image'
import { Dimensions } from 'react-native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const ImageBackground = styled(FastImage)`
  width: ${width};
  height: ${height};
  flex: 1;
  align-items: center;
  padding-top: 40px;
`
