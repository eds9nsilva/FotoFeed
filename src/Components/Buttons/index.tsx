import React from 'react'
import { ShareNetwork, DownloadSimple, BookmarkSimple } from 'phosphor-react-native'
import { Container } from './styles'
import { TouchableOpacity } from 'react-native'

interface Props {
  download: () => void
  save: () => void
}

const Buttons = ({ download, save }: Props) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => download()}  style={{ marginBottom: 38 }}>
        <DownloadSimple color="#fff" size={38} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => save()}>
        <BookmarkSimple color="#fff" size={38} />
      </TouchableOpacity>
    </Container>
  )
}

export default Buttons
