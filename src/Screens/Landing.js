import React from "react";
import { StyleSheet,  Text, View, ImageBackground } from "react-native";
import Loginbtn from "../components/loginbtn";

const Landing = ({navigation})=>{

    const loginFunc= () =>{
      navigation.navigate('Login');
    }
  const registerFunc= () =>{
    navigation.navigate('Register');
  }
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../src/assets/images/landingBackground.jpg')}  style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.upperHalf}>
              <Text style={styles.UHtext}>Blind Match</Text>
            </View>
            <View style={styles.lowerHalf}>
              <View style={styles.btnbox}>

                <Loginbtn top ={true} innerText={"Login"} onPress={loginFunc}/>
                <Loginbtn innerText={"Register"} onPress={registerFunc}/>

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
