import React from "react";
import { StyleSheet, Text, View, ImageBackground, FlatList } from "react-native";
import MessageOuter from "../components/MessageOuter";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    uname: 'Glen DSouza',
    lastMessage: 'Hello Glen',
    time: '7:30 AM',
    noUnreadMsgs: 0,

  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    uname: 'Hartik S',
    lastMessage: 'First Item',
    time: '8:58 PM',
    noUnreadMsgs: 7,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    uname: 'Aditya Ganji',
    lastMessage: 'Second Item',
    time: '12:32 AM',
    noUnreadMsgs: 8,
  },
];
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const MessageList = ({navigation})=>{

  return (
    <ImageBackground source={require('../../src/assets/images/love.webp')}  style={styles.wrapper}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <MessageOuter uname={item.uname} lastMessage={item.lastMessage} time={item.time} noUnreadMsgs={item.noUnreadMsgs} navigator={navigation}/>}
        keyExtractor={item => item.id}
      />
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
