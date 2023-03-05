import React from "react";
import { StyleSheet, Text, View, ImageBackground, FlatList } from "react-native";
import { BackChatHeader } from "../components/Header";

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const MessageList = ({navigation})=>{

  return (

    <View style={styles.wrapper}>
        <BackChatHeader navigation={navigation} uname={"Glen"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
    backgroundColor: '#ffffff',
  }
})

export default MessageList;
