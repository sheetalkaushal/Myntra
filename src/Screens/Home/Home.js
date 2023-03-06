import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import MyHeader from "../../Components/MyHeader";
import Flatlist from "../../Components/Flatlist";
import imagePath from "../../Constants/imagePath";
import { Sliderimages } from "../../Components/Sliderimages";
import Icon from "../../Components/Icon";
const Home = () => {
  return (
    <ScrollView>
      <MyHeader
      headicon1={<Icon img={require('../../../assets/search.png')}/>} 
      headicon2={<Icon img={require("../../../assets/notification.png")}/>}
      headicon3={<Icon img={require("../../../assets/favorite.png")}/>}
      headicon4={<Icon img={require("../../../assets/shopping.png")}/>}
      />
      <Flatlist />
      <Image
        resizeMode="cover"
        style={{ width: 400, height: 380 }}
        source={imagePath.icsale}
      />
      <Sliderimages />
    </ScrollView>
  );
};

export default Home;
