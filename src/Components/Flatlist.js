import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import imagePath from "../Constants/imagePath";
import { style } from "../Components/Flatstyle";

const Flatlist = () => {
  homeflat = [
    {
      arryhome: imagePath.icmen,
      listhome: "Men",
    },
    {
      arryhome: imagePath.ickids,
      listhome: "Kids",
    },
    {
      arryhome: imagePath.icfriend,
      listhome: "friends",
    },
    {
      arryhome: imagePath.ickids,
      listhome: "Kids",
    },
    {
      arryhome: imagePath.icfriend,
      listhome: "friends",
    },
    {
      arryhome: imagePath.ickids,
      listhome: "Kids",
    },
    {
      arryhome: imagePath.icmen,
      listhome: "Men",
    },
    {
      arryhome: imagePath.icfriend,
      listhome: "friends",
    },
    {
      arryhome: imagePath.ickids,
      listhome: "Kids",
    },
    {
      arryhome: imagePath.icmen,
      listhome: "Men",
    },
  ];
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={homeflat}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity style={style.itemshadow}>
            <Image style={style.homestyle} source={item.arryhome} />
            <Text style={style.contenthomestyle}>{item.listhome}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Flatlist;
