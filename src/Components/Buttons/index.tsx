import React from 'react'
import {
  DownloadSimple,
  Bookmarks,
} from 'phosphor-react-native'
import { Container } from './styles'
import { TouchableOpacity } from 'react-native'

interface Props {
  download: () => void
  save: () => void
  isFavorito: boolean
}

const Buttons = ({ download, save, isFavorito }: Props) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => download()} style={{ marginBottom: 38 }}>
        <DownloadSimple color="#fff" size={38} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => save()}>
        <Bookmarks color={isFavorito ? '#f32512' : '#fff'} size={38} mirrored/>
      </TouchableOpacity>
    </Container>
  )
}

export default Buttons
