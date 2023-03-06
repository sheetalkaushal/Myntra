import { View, Text } from "react-native";
import React from "react";
import MyHeader from "../../Components/MyHeader";
import CarouselCards from "../../Components/CarouselCards";
import Icon from "../../Components/Icon";
const Categories = () => {
  return (
    <View>
      <MyHeader headicon3={<Icon img={require('../../../assets/favorite.png')}/>} 
      headicon4={<Icon img={require("../../../assets/shopping.png")}/>}
      />
      <Text>Categories</Text>
      <CarouselCards />
    </View>
  );
};

export default Categories;
