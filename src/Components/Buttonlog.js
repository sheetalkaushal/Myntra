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
export default function Buttonlog({ button }) {
  const style = StyleSheet.create({
    buttontstyle: {
      fontSize: 14,
      borderWidth: 1,
      marginTop: moderateScale(30),
      borderColor: "red",
      marginHorizontal: moderateScale(20),
      textAlign: "center",
      color: "red",
      padding: moderateScale(14),
    },
  });
  return (
    <TouchableOpacity>
      <Text style={style.buttontstyle}>{button}</Text>
    </TouchableOpacity>
  );
}
