import { View, Text } from "react-native";
import React from "react";
import MyHeader from "../../Components/MyHeader";
import Icon from "../../Components/Icon";
const Studio = () => {
  return (
    <View>
       <MyHeader headicon3={<Icon img={require('../../../assets/favorite.png')}/>} 
      headicon4={<Icon img={require("../../../assets/shopping.png")}/>}/>
    {/* //  headicon5={<Icon img={require("../../../assets/settings.png")}/>} */}
      <Text>Studio</Text>
    </View>
  );
};
export default Studio;
