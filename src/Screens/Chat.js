import React from "react";
import { StyleSheet,  Text, View, ImageBackground } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MessageList from "./MessageList";
import { NavigationContainer } from "@react-navigation/native";
import chatHeader from "../components/Header";
import MyMessage from "./myMessage";
const Stack = createStackNavigator();

const Chat = ()=>{

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName={"MessageList"}>
        <Stack.Screen name="MessageList" component={MessageList} options={{header: chatHeader,headerLeft: ()=> null}} />
        <Stack.Screen name="MyMessage" component={MyMessage} options={{header: ()=> null}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  upperHalf:{
    flex: 1,
    paddingTop: '25%',
    width:'100%',
    alignItems: 'center',

    padding: '5%',

  },
  lowerHalf:{
    flex: 1,
    width:'100%',
    padding: '10%',
  },
  wrapper:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  UHtext:{
    fontSize: 68,
    fontFamily: 'Tilt Neon',
    color: '#f7456c',
  },
  btnbox:{
    marginTop: '18%',

  }

})

export default Chat;
