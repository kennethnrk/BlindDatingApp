import { Text, View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const chatHeader = () => {
  return(
    <View style={styles.h}>
      <Text style={styles.htext}>
        Your Messages
      </Text>
    </View>

  )

}

const styles =  StyleSheet.create({
  h:{
    justifyContent: "center",
    paddingLeft:"5%",
    height:60,
    backgroundColor:'#10215e',
  },
  htext:{
    fontSize:30,
    color:'#FFFFFF',
    fontFamily: 'Tilt Neon',
  },
});


export default chatHeader;
