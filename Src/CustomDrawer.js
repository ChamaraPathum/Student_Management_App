import { View, Text, ImageBackground,Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function CustomDrawer(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#fff" }}
      >
        <ImageBackground source={require('./images/customDrawer.png')} style={{padding:30,marginTop:'-5%',height:160}}>
            <Image source={require('./images/My.jpeg')} style={{width:130,height:130,borderRadius:100,marginLeft:'20%',marginTop:'20%',borderWidth:2,borderColor:'white'}}/>
        </ImageBackground>

        <View style={{marginTop:60,padding:2}}>
        <DrawerItemList {...props}></DrawerItemList>
        </View>
      </DrawerContentScrollView>

      <View>
        <Text>Our Custom Text</Text>
      </View>
    </View>
  );
}
