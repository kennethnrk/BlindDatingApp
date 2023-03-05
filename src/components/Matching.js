import React from "react";
import { StyleSheet, Text, View, ImageBackground, Pressable } from "react-native";

const MatchingButton = ({startMatching, matching, stopMatching})=>{

  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
          {matching ? (<Pressable style={[styles.MatchingBtn, { backgroundColor: "#a6194a" }]} onPress={stopMatching}>
            <Text style={styles.UHtext}>Stop Matching</Text>
          </Pressable>): (<Pressable style={styles.MatchingBtn} onPress={startMatching}>
            <Text style={styles.UHtext}>Start Matching</Text>
          </Pressable>)}



        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  UHtext:{
    fontSize: 40,
    fontFamily: 'Tilt Neon',
    color: '#ffffff',
  },
  MatchingBtn:{
    height: 300,
    width: 300,
    borderRadius:200,
    backgroundColor: '#141857',
    alignItems: "center",
    justifyContent: "center",
    // borderColor:,
  },
  wrapper:{
    alignItems: "center",
    justifyContent: "center",
  },

})

export default MatchingButton;
