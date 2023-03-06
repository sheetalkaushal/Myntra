import { Text, View, Image ,TouchableOpacity} from "react-native";
import React from "react";
import { style } from "./Myheaderstyle";
import Icon from "./Icon";
export default function MyHeader({headicon1,headicon2,headicon3,headicon4,headicon5}) {
  return (
    <View style={style.main}>
      <View style={style.container1}>
        <Image
          style={{ width: 110, height: 50, resizeMode: "contain" }}
          source={require("../../assets/logoMytra.jpeg")}
        />
      </View>
      <View style={style.container2}>
        {headicon1}
        {headicon2}
        {headicon3}
        {headicon4}
        {headicon5}
        {/* <Icon img={require("../../assets/search.png")}/> */}
        {/* <Icon img={require("../../assets/notification.png")}/> */}
        {/* <Icon img={require("../../assets/favorite.png")}/> */}
        {/* <Icon img={require("../../assets/shopping.png")}/> */}
      </View>
    </View>
   
  );
}
