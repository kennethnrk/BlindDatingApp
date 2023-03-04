import React from 'react';
import {StyleSheet, useColorScheme, View,} from 'react-native';

import {
  Colors,
} from "react-native/Libraries/NewAppScreen";

import Login from "./src/Screens/login";
import Landing from "./src/Screens/Landing";
import ForgotPassword from "./src/Screens/ForgotPassword";
import Register from "./src/Screens/Register";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

function App(){

  const Stack = createStackNavigator(); // Stack contains Screen & Navigator properties
  return (
     // <Login/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Landing"} screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
