import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {windowWidth, windowHeight} from './utils/Dimension';

export default function HomePage(props) {
    const {firstTab, secondTab} = props;
  const {selectedButton, setSelectedButton} = useState('#8B267A');
  const {TextColor, setTextColor} = useState('');

  const buttonColorHandler = () => {
    setSelectedButton('#8B267A');
  };

  useEffect(() => {
    selectedButton;
  }, []);


  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            buttonColorHandler;
          }}
          style={[styles.butttonStyle, {backgroundColor: "#8B267A"}]}>
          <Text style={[styles.TextStyle, {color: "white"}]}>{firstTab ? firstTab : "demo" }</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.butttonStyle, {backgroundColor: selectedButton}]}>
          <Text style={[styles.TextStyle, {color: TextColor}]}>{secondTab? secondTab : "demo"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 1.2,
    backgroundColor: '#FFFFFF',
    height: windowHeight / 14,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    borderRadius: 30,
    borderColor: '#F5F5F7',
    borderWidth: 3,
    flexDirection: 'row',
  },
  butttonStyle: {
    width: '45%',
    height: '80%',

    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    alignItems: 'center',
  },
  TextStyle: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
  },
});
