import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import imagePath from "../Constants/imagePath";
import { style } from "./Myheaderstyle";
import { newstyle } from "./Sliderstyle";
export const Sliderimages = () => {
  return (
    <SafeAreaView>
      <ScrollView style={style.wrap} horizontal>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://i.pinimg.com/originals/fd/1e/cc/fd1ecc7f6d8b956809ee7e5c055cdf9b.jpg",
          }}
          style={{ width: 400, height: 200 }}
        />
        <Image
          resizeMode="contain"
          source={{
            uri: "https://assets.myntassets.com/assets/images/retaillabs/2020/6/12/2b635853-e4b8-4561-9a01-bae80dbbb48d1591946903501-Banner--1-.jpg",
          }}
          style={{ width: 400, height: 200 }}
        />
        <Image
          resizeMode="contain"
          source={{ uri: "https://pbs.twimg.com/media/EYrF2KZUEAEHURE.jpg" }}
          style={{ width: 400, height: 200 }}
        />
        <Image
          resizeMode="contain"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSjYBgNHsMq6RLjO_sJZyDlDETxXTHgSdtFdg5YXlGEIropZr7plWmB8SynzB4M_-hDV4&usqp=CAU",
          }}
          style={{ width: 400, height: 200 }}
        />
        <Image
          resizeMode="contain"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGbWCOuU4ZyPGT-axysfYJFxLLcwx1ePykoGWKFOJ_CdcVOX9rG4nsKQxFbqTN6fDY2E&usqp=CAU",
          }}
          style={{ width: 400, height: 200 }}
        />
      </ScrollView>
      <View>
        <ImageBackground
          style={{ padding: 23 }}
          source={{ uri: "https://pbs.twimg.com/media/EYrF2KZUEAEHURE.jpg" }}
        >
          <ScrollView style={style.wrap} horizontal>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg",
              }}
              style={{ width: 400, height: 200 }}
            />
            <Image
              resizeMode="contain"
              source={{
                uri: "https://img.freepik.com/premium-vector/fashion-sale-social-media-facebook-cover-banner-template_123633-573.jpg",
              }}
              style={{ width: 400, height: 200 }}
            />
            <Image
              resizeMode="contain"
              source={{
                uri: "https://www.shutterstock.com/image-vector/online-shopping-concept-perfect-landing-260nw-1654537690.jpg",
              }}
              style={{ width: 400, height: 200 }}
            />
            <Image
              resizeMode="contain"
              source={{
                uri: "https://st2.depositphotos.com/5547208/8113/v/950/depositphotos_81139896-stock-illustration-online-shopping-banner.jpg",
              }}
              style={{ width: 400, height: 200 }}
            />
            <Image
              resizeMode="contain"
              source={{
                uri: "https://t4.ftcdn.net/jpg/03/06/69/49/360_F_306694930_S3Z8H9Qk1MN79ZUe7bEWqTFuonRZdemw.jpg",
              }}
              style={{ width: 400, height: 200 }}
            />
          </ScrollView>
        </ImageBackground>
      </View>
      <View>
        <Text style={newstyle.features}>FEATURES BRANDS</Text>
        <ScrollView style={style.wrap} horizontal>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://in.apparelresources.com/wp-content/uploads/sites/3/2020/07/Myntra-Fashion-brands.jpg",
            }}
            style={{ width: 400, height: 200 }}
          />
          <Image
            resizeMode="contain"
            source={{
              uri: "https://www.adgully.com/img/800/202108/myntra.png.jpg",
            }}
            style={{ width: 400, height: 200 }}
          />
          <Image
            resizeMode="contain"
            source={{
              uri: "https://i.ytimg.com/vi/KixbzHIYDao/maxresdefault.jpg",
            }}
            style={{ width: 400, height: 200 }}
          />
          <Image
            resizeMode="contain"
            source={{
              uri: "https://blog.myntra.com/wp-content/uploads/2020/04/Myntra-studio_Facebook.jpg",
            }}
            style={{ width: 400, height: 200 }}
          />
          <Image
            resizeMode="contain"
            source={{
              uri: "https://blog.myntra.com/wp-content/uploads/2019/11/Myntra-Fashion-Superstar-3.png",
            }}
            style={{ width: 400, height: 200 }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
