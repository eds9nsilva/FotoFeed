import React from 'react'
import { ContainerEmpyt, TextEmpyt } from './styles'
import empyt from '@/Asserts/empty-photos.png'
import { Image } from 'react-native'

interface Props {
  text: string
}

const Empyt = ({ text }: Props) => (
  <ContainerEmpyt>
    <ContainerEmpyt>
      <Image source={empyt} />
      <TextEmpyt>{text}</TextEmpyt>
    </ContainerEmpyt>
  </ContainerEmpyt>
)

export default Empyt