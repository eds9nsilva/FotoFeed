import React from 'react'
import { ShareNetwork, DownloadSimple } from 'phosphor-react-native'
import { Container } from './styles'
import { TouchableOpacity } from 'react-native'

interface Props {
  share: () => void
  download: () => void
}

const Buttons = ({ download, share }: Props) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => share()}>
        <ShareNetwork color="#fff" size={38} style={{ marginBottom: 38 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => download()}>
        <DownloadSimple color="#fff" size={38} />
      </TouchableOpacity>
    </Container>
  )
}

export default Buttons
