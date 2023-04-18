import React from 'react'
import { Container } from './styles'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  download: () => void
  save: () => void
  isFavorito: boolean
}

const Buttons = ({ download, save, isFavorito }: Props) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => download()} style={{ marginBottom: 38 }}>
        <Icon name='cloud-download' color="#fff" size={36} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => save()}>
        <Icon name='bookmark' color={isFavorito ? '#F14624' : '#fff'}  size={38} />
      </TouchableOpacity>
    </Container>
  )
}

export default Buttons
