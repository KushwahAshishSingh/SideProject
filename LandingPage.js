 import React from 'react'
 import { View, Text, Image } from 'react-native';
 const displayImage = require('./yollogo.png')//
 import { windowWidth, windowHeight } from "./utils/Dimension";

export default function LandingPage() {
    return (
        <View style={{felx:1, justifyContent:'center', alignItems:"center"}}>
       <Image
        style={{width:windowWidth / 2, height:windowHeight/6.4, marginTop:windowHeight/3}}
        source={displayImage}
      />
        </View>
    )
}


