import React from "react";
import { StyleSheet, Text, View, ImageBackground, FlatList } from "react-native";
import { BackChatHeader } from "../components/Header";
import MessageOuter from "../components/MessageOuter";

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const MessageList = ({route, navigation})=>{

  return (
    <ImageBackground source={require('../../src/assets/images/love.webp')}  style={styles.wrapper}>

      <BackChatHeader navigation={navigation} uname={route.params.uname}/>

    </ImageBackground>


  );
}

const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
    backgroundColor: '#ffffff',
  }
})

export default MessageList;
