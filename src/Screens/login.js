import React, { useEffect, useReducer, useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import Loginbtn from "../components/loginbtn";
import Inputbox from "../components/inputbox";
import { login } from "../apicalls/users";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { isLoggedIn } from "../services/loginServices";
import { useFocusEffect } from "@react-navigation/native";
import LoadingPage from "./Loading";

const Login = ({ navigation }) => {
  const [token, setToken] =  useState('');
  const [loading, setLoading] = useState(true);
  useFocusEffect(() => {
    async function anyNameFunction() {

      let ab = await isLoggedIn();
      if(ab != false) {
        setLoading(true);
        setToken(ab);
        navigation.navigate("Home");
      }
      else
      {
        setLoading(false);
      }

    }

    anyNameFunction();

  });

  const ForgotPress = () => {
    navigation.navigate("ForgotPassword");
  };

  function reducer(currentState, action) {

    switch (action.type) {
      case "email":
        return { ...currentState, email: action.value };
      case "password":
        return { ...currentState, password: action.value };
    }

    return currentState;
  }

  function updateEmail(email) {
    dispatch({ type: "email", value: email });
  }

  function updatePassword(password) {
    dispatch({ type: "password", value: password });
  }


  const [state, dispatch] = useReducer(reducer, { password: "", email: "" });


  const submitHandler = async (e) => {

    if (!(String(state.email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ))) {
      Alert.alert("Warning", "Invalid Details!!");
    }
    else
    {
      const email = state.email;
      const password = state.password;
      try {

        e.preventDefault();
        const response = await login({ email , password });
        if (response.success) {
          console.log(response.message);
          await AsyncStorage.setItem("token", response.data);
          navigation.navigate("Home");
        } else {
          Alert.alert('Warning', "Invalid Login Details!");
        }
      } catch (error) {
        console.log(error.message);
      }
    }

  };
  if (loading){
    return (<LoadingPage/>)
  }
  else {

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../src/assets/images/love.webp")} style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.upperHalf}>
            <Text style={styles.UHtext}>Login</Text>
          </View>
          <View style={styles.lowerHalf}>
            <View style={styles.btnbox}>
              <Inputbox placeholder={"Email"} inputMode={'email'} onChangeText={(text) => {
                updateEmail(text);
              }} />
              <Inputbox placeholder={"Password"} secureTextEntry={true} onChangeText={(text) => {
                updatePassword(text);
              }} />
              <Loginbtn top={true} innerText={"Login"} onPress={submitHandler} />
              <Loginbtn innerText={"Forgot Password?"} onPress={ForgotPress} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );}
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
    paddingLeft:'10%',
  },
  lowerHalf:{
    flex: 3,
    width:'100%',
    padding: '10%',
    backgroundColor:'#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  wrapper:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  UHtext:{
    fontSize: 68,
    fontFamily: 'Tilt Neon',
    color: '#141857',
  },
  btnbox:{
    marginTop: '10%',

  }

})

export default Login;
