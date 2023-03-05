import { Button, Pressable, Text, View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome5";

const ChatHeader = () => {
  return(
    <View style={styles.h}>
      <Text style={styles.htext}>
        Your Messages
      </Text>
    </View>

  )

}
export const BackChatHeader = ({navigation, uname}) => {
  return(
    <View style={styles.h}>
      <Pressable style={{ flex: 1, padding:'3%', }}
        onPress={() => navigation.goBack()}><Icons name="arrow-left" color={'#ffffff'} size={28} /></Pressable>
      <Text style={styles.htext}>
        {uname}
      </Text>
    </View>

  )

}

const styles =  StyleSheet.create({
  h:{
    justifyContent: "center",
    paddingLeft:"5%",
    height:60,
    backgroundColor:'#f7456c',
    flexDirection: 'row'
  },
  htext:{
    padding:'1%',
    flex: 7,
    fontSize:30,
    color:'#FFFFFF',
    fontFamily: 'Tilt Neon',
  },
});

export default ChatHeader;
