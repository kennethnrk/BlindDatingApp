import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const Loginbtn = ({ top , innerText, onPress, }) => {
  return (
    <Pressable style={({pressed}) => [
    styles.pble, top ? styles.top : styles.nottop,
      {backgroundColor: pressed ? '#f7a8ba' : top ?  '#f7456c': "#ffffff"},
    ]} onPress={onPress}>

      <Text style={[styles.innatext, top ? { color: "#ffffff" } : { color: "#f7456c" }]}>{innerText}</Text>
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
      backgroundColor: "#f7456c",
    },
    nottop: {
      backgroundColor: "#ffffff",
    },
  },
);

export default Loginbtn;
