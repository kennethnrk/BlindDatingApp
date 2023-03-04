import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const Loginbtn = ({ top , innerText, onPress, }) => {
  return (
    <Pressable style={({pressed}) => [
    styles.pble, top ? styles.top : styles.nottop,
      {backgroundColor: pressed ? '#5685e0' : top ?  '#141857': "#ffffff"},
    ]} onPress={onPress}>

      <Text style={[styles.innatext, top ? { color: "#ffffff" } : { color: "#141857" }]}>{innerText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    pble: {
      width: "100%",
      padding: "3%",
      marginTop: "7%",
      borderRadius: 10,
      alignItems: "center",
    },
    innatext: {
      fontSize: 23,
      fontFamily: 'Tilt Warp',
    },
    top: {
      backgroundColor: "#141857",
    },
    nottop: {
      backgroundColor: "#ffffff",
    },
  },
);

export default Loginbtn;
