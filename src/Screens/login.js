import React from "react";
import { StyleSheet,  Text, View, ImageBackground } from "react-native";
import Loginbtn from "../components/loginbtn";
import Inputbox from "../components/inputbox";



const Login = ({navigation})=>{
  const ForgotPress = () =>{
    navigation.navigate('ForgotPassword')
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../src/assets/images/landingBackground.jpg')}  style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.upperHalf}>
            <Text style={styles.UHtext}>Login</Text>
          </View>
          <View style={styles.lowerHalf}>
            <View style={styles.btnbox}>
              <Inputbox placeholder={"Email"} />
              <Inputbox  placeholder={"Password"} secureTextEntry={true}/>
              <Loginbtn top ={true} innerText={"Login"}/>
              <Loginbtn innerText={"Forgot Password?"} onPress={ForgotPress}/>
            </View>
          </View>
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
