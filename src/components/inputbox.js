import React from "react";
import { StyleSheet, TextInput } from "react-native";

const inputbox = ({ placeholder, editable, onChangeText, secureTextEntry, value, inputMode}) => {
  return (
    <TextInput secureTextEntry={secureTextEntry} style={styles.ipt} placeholder={placeholder} editable={editable} placeholderTextColor="grey"  onChangeText={onChangeText} value={value} inputMode = {inputMode} />
  );
};

const styles = StyleSheet.create({
    ipt: {
      width: "100%",
      padding: "5%",
      paddingLeft: "7%",
      paddingRight: "7%",
      marginTop: "3%",
      borderRadius: 10,
      backgroundColor: "#f3f3f3",
      alignItems: "center",
      fontSize: 20,
    },

  },
);

export default inputbox;
