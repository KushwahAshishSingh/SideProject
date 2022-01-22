import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimension";
import Icons from "react-native-vector-icons/Ionicons";


const SocialButton = ({
  buttonTitle,
  myColor,
  myTextColor,
  customHeight,
  customIcons,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        { borderColor: myColor, height: customHeight },
      ]}
      {...rest}
    >
    <View style={{flexDirection:'row'}}>
      {customIcons ? <Icons name={customIcons}/>  : <View></View>}
      <Text style={[styles.buttonText, { color: myTextColor }]}>
        {buttonTitle}
      </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: "45%",
    height:"50%",
    padding:10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 0.7,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "400",
    //   fontFamily: "Lato-Regular",
  },
});
