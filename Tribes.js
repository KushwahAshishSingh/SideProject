import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {windowWidth, windowHeight} from './utils/Dimension';
import SelectTribesButton from './components/SelectTribesButton';
import SocialButton from './components/SocialButton';
import OnClickButton from './components/OnClickButton';
export default function Tribes() {
  return (
    <View style={{display: 'flex', width: windowWidth, height: windowHeight}}>

    <View
          style={{
            display: 'flex',
            width: '100%',
            height: '16%',
            backgroundColor:"white",
            justifyContent: 'space-between',
          }}>
          <View style={{marginTop: '8%', marginLeft: '6%', marginRight: '6%'}}>
            <View style={{alignSelf: 'center'}}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  alignSelf: 'center',
                  color: '#9D008B',
                  padding: 5,
                }}>
                Select Tribes
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  fontWeight: '500',
                  color: '#7E8299',
                  padding: 2,
                }}>
                Select Tribes (Groups) that you want to join{' '}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  fontWeight: '500',
                  color: '#7E8299',
                  alignSelf: 'center',
                  padding: 2,
                }}>
                (min.1 - max.5)
              </Text>
            </View>
        </View>
        </View>
      <ScrollView showsVerticalScrollIndicator="false" style={{width: windowWidth, height: '55%', width:"90%", alignSelf:'center'}}>
        
            <View style={{marginTop: '5%'}}>
              <View style={{}}>
                <SelectTribesButton
                  placeholderText="Outing and Adventure"
                  iconName="bonfire-sharp"
                />
                <SelectTribesButton
                  placeholderText="Cycling"
                  iconName="bonfire-sharp"
                />
                <SelectTribesButton
                  placeholderText="Reading and / or Writing"
                  iconName="bonfire-sharp"
                />
                <SelectTribesButton
                  placeholderText="Music and Cinema"
                  iconName="bonfire-sharp"
                />
                <SelectTribesButton
                  placeholderText="Cooking and Fine-Dine"
                  iconName="bonfire-sharp"
                />
                <SelectTribesButton
                  placeholderText="Hand outs"
                  iconName="bonfire-sharp"
                />
                <SelectTribesButton
                  placeholderText="Driving"
                  iconName="bonfire-sharp"
                />
                <SelectTribesButton
                  placeholderText="Driving"
                  iconName="bonfire-sharp"
                />
                <SelectTribesButton
                  placeholderText="Driving"
                  iconName="bonfire-sharp"
                />
                <SelectTribesButton
                  placeholderText="Driving"
                  iconName="bonfire-sharp"
                />
                <SelectTribesButton
                  placeholderText="Biking"
                  iconName="bonfire-sharp"
                />
              </View>
            </View>
        

      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',

          flex: 1.2,
        }}>
        <View style={(width = windowWidth)}>
          <OnClickButton buttonTitle="Done" customColor="#7E8299" />
        </View>
      </View>
    </View>
  );
}
