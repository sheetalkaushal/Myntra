import { View, Text } from "react-native";
import React from "react";
import MyHeader from "../../Components/MyHeader";
import Icon from "../../Components/Icon";
const Brands = () => {
  return (
    <View>
    <MyHeader headicon3={<Icon img={require('../../../assets/favorite.png')}/>} 
      headicon4={<Icon img={require("../../../assets/shopping.png")}/>}/>
      <Text>Studio</Text>
      <Text>Brands</Text>
    </View>
  );
};

export default Brands;
