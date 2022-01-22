import React from 'react'
import { View, Text,TouchableOpacity , ScrollView} from 'react-native'
import { windowWidth, windowHeight } from "./utils/Dimension";
import TextButton from './components/TextButton';
import OnClickButton from './components/OnClickButton';
import SocialButton from './components/SocialButton';
export default function Register() {
    return (
        <ScrollView style={{display:'flex', width:windowWidth, height:windowHeight}} >
        <View style={{display:'flex', width:"100%", height:"100%", justifyContent:'space-between'}}>
        
            <View style={{marginTop:'15%', marginLeft:'6%', marginRight:'6%'}}>

                <View style={{alignSelf:"center"}}>
                    <Text style={{fontSize:24, fontWeight:'700', alignSelf:"center", color:"#9D008B"}}>Create Account,</Text>
                    <Text style={{fontSize:20,letterSpacing:1, fontWeight:'500', color:"#7E8299"}}>Sign up to get started!</Text>
                </View>

                <View style={{marginTop:'10%'}}>
                    <View style={{}}>
                    <TextButton labelType="Student/Contact Person Name"/>
                         <TextButton labelType="Email ID"/>
                         <TextButton labelType="Mobile No."/>
                         <TextButton labelType="Gender" iconName="md-chevron-down"/>
                         <TextButton labelType="Registration Type" iconName="md-chevron-down"/>
                         <TextButton labelType="College/Institute" iconName="md-chevron-down"/>
                         <TextButton labelType="Stream" iconName="md-chevron-down"/>
                         <TextButton labelType="Password"/>
                         <TextButton labelType="Confirm Password"/>
                         <TextButton labelType="Date of Birth/Date of Registration" iconName="md-calendar-outline"/>
                         <TextButton labelType="Pincode"/>
                         <TextButton labelType="Country"/>

                    </View>
                </View>

                <View style={{marginTop:"5%"}}>
                    <OnClickButton buttonTitle="Create Account"/>
                </View>

               

            </View>
            <View style={{flexDirection:"row",justifyContent:"center", marginBottom:'25%', marginTop:"4%"}}>
                <Text style={{fontSize:14, color:"#7E8299"}}>I'm already a member,</Text>
                <TouchableOpacity>
                <Text style={{fontSize:14, color:"#9D008B", fontWeight:"300"}}>Login</Text>
                </TouchableOpacity>
            </View>
            </View>
            </ScrollView>
        
    )
}
