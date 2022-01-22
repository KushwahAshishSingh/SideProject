


import React from "react";
import { View, TextInput, StyleSheet,Text } from "react-native";
import { windowWidth, windowHeight } from "../utils/Dimension";
import Icon from "react-native-vector-icons/Ionicons";

const TextButton = ({
  labelValue,
  placeholderText,
  onPress,
  iconType,
  labelType,
  iconName,
  myColor,
  ...rest
}) => {
  const setColor = myColor;
  return (
    <View style={[styles.inputContainer,{borderColor:"#7E8299"}]}>
     
      {labelType? <View style={{marginBottom:"12%", backgroundColor: "white",height:20,marginLeft: 12}}><Text style={{color:"gray", fontSize:11, fontWeight:'300', paddingHorizontal:3}}>{labelType}</Text></View>: <View></View>}

      {labelType? <TextInput
        value={labelValue}
        style={styles.inputTwo}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      /> :  
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    }
      <Icon
        name={iconName}
        size={20}
        color="#666"
        style={{ marginRight: 10 }}
        onPress={onPress}
      />
    </View>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 15,
    width: "95%",
    height: windowHeight / 18,
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    alignSelf:'center'
   
  },
  iconStyle: {
    padding: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "#ccc",
    borderRightWidth: 1,
    width: 50,
    
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 14,
    //fontFamily: "Lato-Regular",
    color: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  inputTwo: {
    marginLeft: -35,
    marginTop:4,
    flex: 1,
    fontSize: 14,
    //fontFamily: "Lato-Regular",
   color:"#7E8299",
   letterSpacing:1.5
    
    
  },
});
