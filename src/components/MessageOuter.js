import React from "react";
import { StyleSheet, Text, View, ImageBackground, Pressable, Image } from "react-native";



const MessageOuter = ({navigator, uname, lastMessage, time, noUnreadMsgs })=>{

  return (
    <Pressable style={styles.wrapper} onPress={()=>navigator.navigate("MyMessage", {uname: uname})}>

      <View style={styles.leftSection}>
        <View style={styles.person}>
            <Text style={{color: '#ffffff', fontSize:60}}>{uname.charAt(0)}</Text>
        </View>
      </View>
      <View  style={styles.rightSection}>
        <View style={{flexDirection:'row'}}>
          <Text style={[styles.uname,]}>{uname}</Text>
          {noUnreadMsgs != 0?
          <View style={[styles.ball, {marginTop:9}]}><Text style={{color:'#ffffff', fontWeight:"bold"}}>{noUnreadMsgs}</Text></View> : null}
        </View>

        <View style={styles.msgV}>
          <Text style={styles.msg}>{lastMessage}</Text>
          <Text style={styles.msgtiming}>{time}</Text>
        </View>

      </View>

    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    padding: '2%',
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 3,
    borderColor: '#c4c4c4',
  },
  rightSection:{
    padding:'4%',
    flex: 3,
  },
  leftSection:{
    padding:'3%',
    flex: 1,
  },
  profileImg:{
    height: '30%',
    width: '30%',
  },
  person:{
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: '100%',
    borderRadius:100,
    backgroundColor:'#c4c4c4',
  },
  uname:{
    fontSize:25,
    color: '#141857',
    fontFamily: 'Tilt Warp',
  },
  msg:{
    flex:4,
    fontSize:20,
    color: '#141857',
    fontFamily: 'Tilt Neon',
  },
  msgtiming:{
    flex:2,
    fontSize:20,
    color: '#141857',
    fontFamily: 'Tilt Neon',
    alignItems: "flex-end",
  },
  msgV:{
    flexDirection: "row",
  },
  ball:{
    alignItems: "center",
    justifyContent: "center",
    height: 25,
    width: 25,
    marginLeft:10,
    borderRadius:100,
    backgroundColor: '#141857',
  }
})

export default MessageOuter;
