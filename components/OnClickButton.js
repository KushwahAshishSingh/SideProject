import React from "react";
import { TouchableOpacity, Text, Button, StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "../utils/Dimension";

const OnClickButton = ({ buttonTitle,props,customColor, ...rest }) => {
  const colorCustom = customColor? customColor : "#9D008B";
  return (
    <TouchableOpacity style={[styles.buttonContainer, {backgroundColor:colorCustom}]} {...rest}>
      <Text style={[styles.buttonText]}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10, 
    width: windowWidth - 50,
    height: windowHeight / 17,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    alignSelf:'center'
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "700",
    color: "white",
    //   fontFamily: "Lato-Regular",
  },
});

export default OnClickButton;
