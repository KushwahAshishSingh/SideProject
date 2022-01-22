import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import OnClickButton from './components/OnClickButton';
import TextButton from './components/TextButton';

export default function ForgotPassword() {
  return (
    <View style={{margin: 20}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="arrow-back-sharp" size={25}/>


        <Text style={{color: '#9D008B', fontSize: 20, fontWeight: '600', marginLeft:10}}>
          
          Forgot Password
        </Text>
      </View>
      <View style={{marginVertical:"20%"}}>
        <TextButton labelType="Enter your registred mobile number" />
        <OnClickButton buttonTitle="Send OTP" />
      </View>
    </View>
  );
}
