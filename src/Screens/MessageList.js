import React from "react";
import { StyleSheet,  Text, View, ImageBackground } from "react-native";



const MessageList = ({navigation})=>{

  return (
    <View style={styles.wrapper}>
      <Text>Hello Nigga</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
    backgroundColor: '#ffee71',
  }
})

export default MessageList;
