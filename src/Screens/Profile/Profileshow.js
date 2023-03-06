import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import List from "../../Components/List";
import Pagecontent from "../../Components/PageContent";
import Buttonlog from "../../Components/Buttonlog";
import imagePath from "../../Constants/imagePath";
import { style } from "./Profilestyle";

export default function Profileshow() {
  flatarr = [
    {
      arradd: imagePath.icAdd,
      listadd: "sheetal",
    },
    {
      arradd: imagePath.icAddperson,
      listadd: "Add",
    },
  ];
  return (
    <ScrollView>
      <View>
        <Text style={style.shopcontent}>Shopping for Sheetal</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={flatarr}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <Image style={style.itemstyle} source={item.arradd} />
              <Text style={style.itemcontent}>{item.listadd}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <View style={style.viewmy}>
        <TouchableOpacity style={style.btnstyle2}>
          
          <Text style={style.basecontent}>Basics</Text>
          <Image
            style={{ marginLeft: "auto" }}
            source={require("../../../assets/navigate.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={style.btnstyle2}>
          <Text style={style.basecontent}>Size Details</Text>
          <Image source={require("../../../assets/navigate.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={style.btnstyle2}>
          <Text style={style.basecontent}>Skin & Hair</Text>
          <Image source={require("../../../assets/navigate.png")} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={style.viewstyle}>
          <Text style={style.namstyle}>sheetal</Text>
          <Image
            style={{ tintColor: "red" }}
            source={require("../../../assets/edit.png")}
          />
        </View>
        <View style={style.becomeinside}>
          <Image
            style={{ width: 30, height: 30, marginLeft: 20 }}
            source={require("../../../assets/crown.png")}
          />
          <Text style={style.crown}>Become an Insider!</Text>
        </View>
        <View style={style.insidebtn}>
          <TouchableOpacity style={style.btninside}>
            <Image
              style={style.iconw}
              source={require("../../../assets/package.png")}
            />
            <Text style={style.basecontent}>Orders</Text>
            <Image source={require("../../../assets/navigate.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={style.btninside}>
            <Image
              style={style.iconw}
              source={require("../../../assets/crown2.png")}
            />
            <Text style={style.basecontent}>Insiders</Text>
            <Image source={require("../../../assets/navigate.png")} />
          </TouchableOpacity>
        </View>
        <View style={style.insidebtn}>
          <TouchableOpacity style={style.btninside}>
            <Image
              style={style.iconw}
              source={require("../../../assets/darts.png")}
            />
            <Text style={style.basecontent}>Challenges</Text>
            <Image source={require("../../../assets/navigate.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={style.btninside}>
            <Image
              style={style.iconw}
              source={require("../../../assets/discount.png")}
            />
            <Text style={style.basecontent}>Coupons</Text>
            <Image source={require("../../../assets/navigate.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <List
        text1="Payment & Currencies"
        text2="view balance and save payments method"
      />
      <List
        text1="Earn & Redeem"
        text2="Scan coupons and,view prizes and earn Rewards"
      />
      <List
        text1="Manage Accounts"
        text2="your account details & save addresses"
      />
      <List
        text1="Help Center"
        text2="Get assistance for your recent purcahses"
      />
      <List text1="Wishlist" text2="your most loved styles" />
      <List
        text1="Myntra Suggests"
        text2="100% personalized feed just fort your"
      />
      <List text1="Settings" text2="Manage Notifications" />
      <List
        text1="Earn & Redeem"
        text2="Scan coupons and,view prizes and earn Rewards"
      />
      <View style={style.borderline}></View>
      <Pagecontent page1="FAQs" />
      <Pagecontent page1="ABOUTUS" />
      <Pagecontent page1="TERMS OF USE" />
      <Pagecontent page1="PRIVACY POLICY" />
      <View style={style.logstyle}>
        <Buttonlog button="LOGOUT" />
      </View>
    </ScrollView>
  );
}
