import React from 'react'
import { View, Text,TouchableOpacity, Image } from 'react-native'
import { windowWidth, windowHeight } from "./utils/Dimension";
import TextButton from './components/TextButton';
import OnClickButton from './components/OnClickButton';
import SocialButton from './components/SocialButton';
const Yollogo = require('./yollogo.png');

export default function Login() {
    return (
        <View style={{display:'flex', width:"100%", height:"100%", justifyContent:'center', alignItems:"center"}}>

                <View style={{justifyContent:'center', alignItems:'center'}}>
                <Image source={Yollogo} resizeMode="contain" resizeMethod="resize" style={{width:160, height:130}}  />
                </View>

            <View style={{justifyContent:'center', alignItems:'center' }}>

                
                    <Text style={{fontSize:24,color:"#9D008B", fontWeight:'700'}}>Welcome,</Text>
                    <Text style={{fontSize:20, fontWeight:'500', color:"#7E8299"}}>Sign in to continue</Text>
               

                <View style={{marginTop:'10%'}}>
                    <View style={{ width:'90%'}}>
                         <TextButton labelType="Email ID"/>
                         <TextButton labelType="Password"/>
                    </View>
                    <TouchableOpacity style={{alignItems:'flex-end'}}><Text style={{fontSize:12, fontWeight:"600"}}>Forgot Password?</Text></TouchableOpacity>
                </View>

                <View style={{marginTop:"5%", width:windowWidth / 1.1}}>
                    <OnClickButton buttonTitle="Login"/>
                </View>

                <View style={{flexDirection:'row', justifyContent:"space-around", margin:3, width:"90%"}}>
                    <SocialButton buttonTitle="via Facebook" customHeight="35%" myColor="blue" myTextColor="blue" /> 
                    <SocialButton  buttonTitle="via Google" customHeight="35%" myColor="brown" myTextColor="brown"/>
                </View>

            </View>
            <View style={{flexDirection:"row",justifyContent:"center", marginBottom:'5%',}}>
                <Text style={{fontSize:14, color:"#7E8299"}}>I'm new user,</Text>
                <TouchableOpacity>
                <Text style={{fontSize:14, color:"#9D008B", fontWeight:"500"}}> Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
