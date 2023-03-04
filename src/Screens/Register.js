import React, { useReducer } from "react";
import { StyleSheet, Text, View, ImageBackground, ScrollView, Alert } from "react-native";
import Loginbtn from "../components/loginbtn";
import Inputbox from "../components/inputbox";



const Register = ({navigation})=>{

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

  const submit = () =>{
    if(state.password !== state.passwordAgain){
      Alert.alert('Warning', "Passwords don't Match!");
    }
    else if(state.name === ''){
      Alert.alert('Warning', "Enter a legitimate name!!");
    }
    else if(!(String(state.password)
      .match(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
      ))){
      Alert.alert('Warning', "Password requires Minimum eight characters, at least one letter and one number!");
    }
    else if(state.age < 18){
      Alert.alert('Warning', "Too young go watch pogo!");
    }
    else if(!(String(state.email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ))) {
      Alert.alert('Warning', "Please enter a valid email address!");
    }
    else if(!(String(state.phone)
      .match(
        /^(\+\d{1,3}[- ]?)?\d{10}$/
      ))) {
      Alert.alert('Warning', "Please enter a valid mobile no!");
    }


  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../src/assets/images/landingBackground.jpg')}  style={styles.container}>
        <View style={styles.topWrap}>
          <Text style={styles.UHtext}>Register</Text>
        </View>
        <View style={styles.bodyWrap}>
          <ScrollView>
          <Text style={styles.labelText}>Name</Text>
          <Inputbox placeholder={"Name"} onChangeText={(text) => {updateName(text)}}/>
          <Text style={styles.labelText}>Email</Text>
          <Inputbox  placeholder={"Email"} inputMode={'email'} onChangeText={(text) => {updateEmail(text)}} />
            <Text style={styles.labelText}>Age</Text>
            <Inputbox  placeholder={"Age"} inputMode={'numeric'} onChangeText={(text) => {updateAge(text)}} />
          <Text style={styles.labelText}>Phone Number</Text>
          <Inputbox placeholder={"Phone No"} inputMode={'numeric'} onChangeText={(text) => {updatePhone(text)}} />
          <Text style={styles.labelText}>Password</Text>
          <Inputbox  placeholder={"Password"}  onChangeText={(text) => {updatePassword(text)}} />
          <Text style={styles.labelText}>Confirm Password</Text>
          <Inputbox placeholder={"Confirm Password"} onChangeText={(text) => {updatePasswordAgain(text)}} />
            <Loginbtn top ={true} innerText={"Register"} onPress={submit}/>
          </ScrollView>
        </View>
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
    fontSize: 60,
    fontFamily: 'Tilt Neon',
    color: '#141857',
  },
  labelText:{
    fontSize: 30,
    fontFamily: 'Comfortaa',
    color: '#141857',
    paddingLeft: "3%",
    paddingRight: "3%",
  }
})

export default Register;
