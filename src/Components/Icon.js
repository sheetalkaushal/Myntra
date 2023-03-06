import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'

export const Icon = ({img,style}) => {
  return (
<TouchableOpacity>
    <Image style={{style}} source={img}/>
</TouchableOpacity>
  )
}

export default Icon