import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
const Itemlist = (iconadd) => {
  return (
    <TouchableOpacity>
    <Text>
      {iconadd}
    </Text>
  </TouchableOpacity>
  )
}

export default Itemlist