import React, { useEffect, useState } from "react";
import { isLoggedIn } from "./src/services/loginServices";

import Login from "./src/Screens/login";
import Landing from "./src/Screens/Landing";
import ForgotPassword from "./src/Screens/ForgotPassword";
import Register from "./src/Screens/Register";
import Home from "./src/Screens/Home";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

function App(){
  const [token, setToken] =  useState('');
  useEffect(() => {
      isLoggedIn().then((ab) =>
      {
        setToken(ab);
      });
  },[]);
  const Stack = createStackNavigator(); // Stack contains Screen & Navigator properties

  return (

  <NavigationContainer>
      <Stack.Navigator >

          <Stack.Group initialRouteName={token !== '' ?"Home":"Loading"} screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Group>


      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
