import React from "react";
import { StyleSheet,  Text, View, ImageBackground } from "react-native";
import Loginbtn from "../components/loginbtn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProfileComp from "../components/ProfileComp";

const Profile = ({ navigation })=>{

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../src/assets/images/love.webp')}  style={styles.container}>
        <View style={styles.topWrap}>
          <Text style={styles.UHtext}>Your Profile</Text>
        </View>
        <ProfileComp owner={true} logOutPress={async()=>{
          await AsyncStorage.removeItem("token");
          navigation.navigate("Landing");
        }}/>
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

export default Profile;
