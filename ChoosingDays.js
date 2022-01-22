import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ClapperBoard from './assets/ClapperBoard.svg';
import {windowWidth, windowHeight} from './utils/Dimension';
import Happy from './assets/happy.svg';
import Lazy from './assets/lazy.svg';
import Not_good from './assets/not_good.svg';
import Life_missed from './assets/life_missed.svg';
import OnClickButton from './components/OnClickButton';

export default function ChoosingDays() {
  return (
    <View style={styles.contianer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Choose How Your Days are?</Text>
      </View>

      <View
        style={[
          {
            marginVertical: 35,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          },
        ]}>
        <View style={[styles.ChooseLife]}>
          <View style={{alignItems: 'center'}}>
            <Happy width={windowWidth / 5.5} />
            <View
              style={{
                width: windowWidth / 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 10, color: '#00A173', textAlign:'center'}}>
                Happy & Productive
              </Text>
            </View>
          </View>

          <View style={styles.Lazy} />

          <View style={{alignItems: 'center'}}>
            <Lazy width={windowWidth / 5.5} />
            <View
              style={{
                width: windowWidth / 6,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 10,
                  color: '#FFC23E',
                  letterSpacing: 1,
                  textAlign: 'center',
                }}>
                Lazy or Busy
              </Text>
            </View>
          </View>

          <View style={styles.Not_good} />

          <View style={{alignItems: 'center'}}>
            <Not_good width={windowWidth / 5.5} />
            <Text style={{fontSize: 10, color: '#FC4844'}}>Not Good</Text>
          </View>

          <View style={styles.Lifemissed} />

          <View style={{alignItems: 'center'}}>
            <Life_missed width={windowWidth / 5.5} />

            <Text style={{fontSize: 10, color: '#71788B'}}>Life Missed</Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.subHeading}>
          If You Don't Respond To Those Two Questions By 11AM, You Missed The
          Bus MY Friend
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: windowHeight / 23,
        }}>
        <ClapperBoard width={windowWidth /1.2} />
      </View>

      <View style={{flexDirection: 'row', justifyContent:'space-evenly', marginTop:25}}>
        <View
          style={{
            width: windowWidth / 2.5,
            height: windowHeight / 19,
            backgroundColor: '#9D008B',
            borderRadius:7,
            justifyContent: 'center', alignItems:"center"
          }}>
          <Text style={{color:"white",fontSize:12, fontWeight:'600', letterSpacing: 1}}>MindShare</Text>
          </View>

          <View
          style={{
            width: windowWidth / 2.5,
            height: windowHeight / 19,
            backgroundColor: '#9D008B',
            borderRadius:7,
            justifyContent: 'center', alignItems:"center"
          }}>
          <Text style={{color:"white",fontSize:12, fontWeight:'600', letterSpacing:1}}>MindMap</Text>
          </View>

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {display: 'flex', margin: 20},
  headerContainer: {justifyContent: 'center', alignItems: 'center'},
  headerText: {fontSize: 22, fontWeight: '700', letterSpacing: 1.5},

  ChooseLife: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Lazy: {
    width: 13,
    height: 1,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'green',
    alignSelf: 'center',
    marginTop: -30,
    marginLeft: -5,
  },

  Not_good: {
    width: 13,
    height: 1,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#FFC23E',
    alignSelf: 'center',
    marginTop: -30,
  },
  Lifemissed: {
    width: 13,
    height: 1,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'red',
    alignSelf: 'center',
    marginTop: -30,
  },
  subHeading: {
    textAlign: 'center',
    paddingHorizontal: 20,
    fontSize: 12,
    color: 'gray',
    letterSpacing: 1,
    fontWeight: '500',
  },
});
