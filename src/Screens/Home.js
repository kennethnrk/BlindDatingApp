import React from "react";
import { StyleSheet,  Text, View, ImageBackground } from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Profile from "./Profile";
import Chat from "./Chat";
import Match from "./Match";
import Icons from "react-native-vector-icons/FontAwesome5";

const Tab = createMaterialBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator  activeColor="#ffffff"  labeled={false} barStyle={{ backgroundColor: '#10215e', margin:0, padding:0}}  >
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <Icons name="user" color={color} size={28} />
        ),
      }}
                  name="Profile" component={Profile} />
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <Icons name="heart" color={color} size={21} />
        ),
      }} name="Match" component={Match} />
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <Icons name="comment-alt" color={color} size={21} />
        ),
      }} name="Chat" component={Chat} />
    </Tab.Navigator>
  );
}

export default Home;
