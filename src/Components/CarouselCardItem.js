import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image,ScrollView } from "react-native"
import { TouchableOpacity } from 'react-native-web'

export const SLIDER_WIDTH = Dimensions.get('window').width

const CarouselCardItem = ({ item, index }) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
      resizeMode='contain'
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
    </View>
    {/* <TouchableOpacity>
      <Image resizeMode='contain'
      source={{uri:index.img}}/>
   </TouchableOpacity> */}
    </ScrollView>

   
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: 500,
  },
  image: {
    width: 400,
    height: 300,
  },
})

export default CarouselCardItem