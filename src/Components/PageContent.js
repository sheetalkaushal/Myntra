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

export default function Pagecontent({ page1 }) {
  const style = StyleSheet.create({
    pagestyle: {
      flexDirection: "row",
      marginHorizontal: moderateScale(20),
      marginLeft: moderateScale(67),
      marginTop: moderateScale(22),
    },
    contentstyle: {
      color: "rgba(60,60,60,0.6)",
      fontSize: 14,
    },
  });
  return (
    <TouchableOpacity style={style.pagestyle}>
      <Text style={style.contentstyle}>{page1}</Text>
    </TouchableOpacity>
  );
}
