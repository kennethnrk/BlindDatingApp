import React, { useEffect, useState } from "react";
import { StyleSheet,  Text, View, ImageBackground } from "react-native";
import Loginbtn from "../components/loginbtn";
import { isLoggedIn } from "../services/loginServices";
import { useFocusEffect } from "@react-navigation/native";
import LoadingPage from "./Loading";

const Landing = ({navigation})=>{
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
    const loginFunc= () =>{
      navigation.navigate('Login');
    }
  const registerFunc= () =>{
    navigation.navigate('Register');
  }
  if (loading){
    return (<LoadingPage/>)
  }
  else {
    return (
      <View style={styles.container}>
        <ImageBackground source={require("../../src/assets/images/love.webp")} style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.upperHalf}>
              <Text style={styles.UHtext}>Blind Match</Text>
            </View>
            <View style={styles.lowerHalf}>
              <View style={styles.btnbox}>

                <Loginbtn top={true} innerText={"Login"} onPress={loginFunc} />
                <Loginbtn innerText={"Register"} onPress={registerFunc} />

              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
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
      color: '#141857',
    },
    btnbox:{
      marginTop: '18%',

    }

  })

export default Landing;
