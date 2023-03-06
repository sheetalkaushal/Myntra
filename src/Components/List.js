import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";

export default function List({ text1, text2 }) {
  const style = StyleSheet.create({
    payment: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: moderateScale(20),
      marginTop: moderateScale(25),
    },
    viewbalnace: {
      color: "rgba(60,60,60,0.6)",
      fontSize: 12,
    },
    pay: {
      fontWeight: "bold",
      fontSize: 16,
    },
  });
  return (
    <TouchableOpacity style={style.payment}>
      <Text style={style.pay}>
        {text1}
        {"\n"}
        <Text style={style.viewbalnace}>{text2}</Text>
      </Text>
      <Image source={require("../../assets/expand-arrow.png")} />
    </TouchableOpacity>
  );
}
