import React, { useEffect, useState } from "react";
import { StyleSheet,  Text, View, ImageBackground } from "react-native";

const LoadingPage = ()=>{

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../src/assets/images/love.webp')}  style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.upperHalf}>
            <Text style={styles.UHtext}>Loading</Text>
          </View>
          <View style={styles.lowerHalf}>

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

})

export default LoadingPage;
