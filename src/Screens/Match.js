import React, { useState } from "react";
import { StyleSheet,  Text, View, ImageBackground } from "react-native";
import MatchingButton from "../components/Matching";
import Matched from "../components/Matched";

const Match = ({navigation})=>{

  const [matching, setMatching] = useState(false);
  const [matched, setMatched] = useState(false);

  const startMatching = ()=>{
      setMatching(true);
  }
  const stopMatching = ()=>{
    setMatching(false);
  }
  const uname = "Name";

  if(matched){
    return (
      <Matched startPress={    ()=>{ navigation.navigate("Chat",{uname:uname});}
      }/>
    );
  }
  else
  {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../src/assets/images/love.webp')}  style={styles.container}>
          <View style={styles.wrapper}>
            <MatchingButton startMatching={startMatching} stopMatching={stopMatching} matching={matching}/>

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
    padding:'40%',
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

export default Match;
