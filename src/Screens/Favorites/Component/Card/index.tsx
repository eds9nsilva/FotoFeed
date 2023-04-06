import React from 'react'
import { Image } from './styles'

interface Props {
  imageUrl: string
}

export const Card = ({imageUrl}: Props) => {
  
  return ( 
    <Image source={{uri: imageUrl}}/> 
  )
}
