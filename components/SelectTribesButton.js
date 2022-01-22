import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {windowWidth, windowHeight} from '../utils/Dimension';
import Icon from 'react-native-vector-icons/Ionicons';

const SelectTribesButton = ({
  labelValue,
  onPress,
  iconType,
  labelType,
  iconName,
  myColor,
  placeholderText,
  ...rest
}) => {
  const setColor = myColor;
  return (
    <TouchableOpacity style={[styles.inputContainer, {borderColor: '#7E8299'}]}>
      <View style={{paddingHorizontal: 10}}>
        <Icon
          name={iconName}
          size={20}
          color="#666"
          style={{marginRight: 10}}
          onPress={onPress}
        />
      </View>
        <TouchableOpacity
          style={{marginRight:10}}
        ><Text style={{color:"#666"}}>{placeholderText}</Text>
        </TouchableOpacity>
      
    </TouchableOpacity>
  );
};

export default SelectTribesButton;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 15,
    width: '95%',
    height: windowHeight / 18,
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 14,
    //fontFamily: "Lato-Regular",
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTwo: {
    marginLeft: -35,
    marginTop: 4,
    flex: 1,
    fontSize: 14,
    //fontFamily: "Lato-Regular",
    color: '#7E8299',
    letterSpacing: 1.5,
  },
});
