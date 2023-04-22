import React from 'react'
import { Container } from './styles'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '@/Styles/Colors';

interface Props {
  download: () => void
  save: () => void
  isFavorito: boolean
}

const Buttons = ({ download, save, isFavorito }: Props) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => download()} style={{ marginBottom: 38 }}>
        <Icon name='cloud-download' color={Colors.secundary} size={36} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => save()}>
        <Icon name='bookmark' color={isFavorito ? Colors.redPrimary : Colors.secundary}  size={38} />
      </TouchableOpacity>
    </Container>
  )
}

export default Buttons
