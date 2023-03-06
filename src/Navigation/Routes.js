import * as React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import imagePath from "../Constants/imagePath";
import navigationString from "../Constants/navigationString";
import Home from "../Screens/Home/Home";
import Categories from "../Screens/Categories/Categories";
import Studio from "../Screens/Studio/Studio";
import Profileshow from "../Screens/Profile/Profileshow";
import Brands from "../Screens/Brands/Brands";
const Tab = createBottomTabNavigator();
export const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initRouteName={navigationString.HOME}
        screenOptions={{
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "black",
        }}
      >
        <Tab.Screen
          name={navigationString.HOME}
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return (
                <Image
                  style={{ width: 90, height: 40 }}
                  source={imagePath.icHome}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={navigationString.CATEGORIES}
          component={Categories}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{ tintColor: focused ? "red" : "black" }}
                  source={imagePath.icCategories}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={navigationString.STUDIO}
          component={Studio}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{ tintColor: focused ? "red" : "black" }}
                  source={imagePath.icStudio}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={navigationString.BRANDS}
          component={Brands}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{ tintColor: focused ? "red" : "black" }}
                  source={imagePath.icBrands}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={navigationString.PROFILESHOW}
          component={Profileshow}
          options={{
            headerShown: true,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{ tintColor: focused ? "red" : "black" }}
                  source={imagePath.icProfileshow}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
