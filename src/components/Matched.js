import React, { useReducer, useState } from "react";
import { StyleSheet, Text, View, ImageBackground, ScrollView } from "react-native";
import Loginbtn from "./loginbtn";
import fontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Icons from "react-native-vector-icons/Entypo";
import ProfileComp from "./ProfileComp";

const Matched = ({ startPress })=>{
  function reducer(currentState, action) {

    switch (action.type){
      case 'name':
        return { ...currentState, name : action.value}
      case 'age':
        return { ...currentState, age : action.value}
      case 'email':
        return { ...currentState, email : action.value}
      case 'phone':
        return { ...currentState, phone : action.value}
      case 'password':
        return { ...currentState, password : action.value}
      case 'passwordAgain':
        return { ...currentState, passwordAgain : action.value}

    }

    return currentState
  }
  function updateName(name){
    dispatch({type : 'name', value: name});
  }
  function updateAge(age){
    dispatch({type : 'age', value: age});
  }
  function updateEmail(email){
    dispatch({type : 'email', value: email});
  }
  function updatePhone(phone){
    dispatch({type : 'phone', value: phone});
  }
  function updatePassword(password){
    dispatch({type : 'password', value: password});
  }
  function updatePasswordAgain(passwordAgain){
    dispatch({type : 'passwordAgain', value: passwordAgain});
  }





  const [state, dispatch] = useReducer(reducer, { name: '' , password: '', passwordAgain:'', age: 0, email:'', phone: 0});


  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../src/assets/images/love.webp')} style={styles.container}>
        <View style={styles.topWrap}>
          <Text style={styles.UHtext}>You've Matched</Text>
        </View>
        <ProfileComp owner={false} startPress={startPress}/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  topWrap:{
    flex: 1,
    width:'100%',
    padding:'5%',
    // paddingBottom: '5%',
    paddingTop : 0,
  },
  bodyWrap:{
    flex: 7,
    margin:'5%',
    marginTop: 0,
    padding:'3%',
    borderRadius: 30,
    backgroundColor: '#ffffff'
  },
  UHtext:{
    fontSize: 50,
    fontFamily: 'Tilt Neon',
    color: '#141857',
  },
  labelText:{
    fontSize: 30,
    fontFamily: 'Comfortaa',
    color: '#141857',
    paddingLeft: "3%",
    paddingRight: "3%",
  },
  bio:{
    paddingTop: 15,
  }
})

export default Matched;
