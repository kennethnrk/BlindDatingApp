import { ScrollView, StyleSheet, Text, View } from "react-native";
import Icons from "react-native-vector-icons/Entypo";
import Loginbtn from "./loginbtn";
import React from "react";

const ProfileComp = ({owner, logOutPress}) => {
  return (<View style={styles.bodyWrap}>
    <ScrollView>
      <Text style={styles.labelText}>Name</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={[styles.labelText, { fontSize: 22, flex: 1 }]}>Age</Text>
        <Text style={[styles.labelText, { fontSize: 20, flex: 2 }]}>gender</Text>
      </View>

      <View style={styles.bio}>
        <Text style={[styles.labelText, { fontSize: 25 }]}>Bio</Text>
        <Text style={[styles.labelText, { fontSize: 18, color: "#8f8f8f" }]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien at consectetur sagittis. Sed et
          interdum nulla. Vivamus ut vestibulum nisl.
        </Text>
      </View>
      <View style={styles.bio}>
        <Text style={[styles.labelText, { fontSize: 25 }]}>Interests</Text>
        <Text style={[styles.labelText, { fontSize: 18, color: "#8f8f8f" }]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien at consectetur sagittis. Sed et
          interdum nulla. Vivamus ut vestibulum nisl.
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignContent: "center", padding: "5%", paddingBottom: 0 }}>
        <Icons name="location-pin" color={"#f7456c"} size={35} />
        <Text style={[styles.labelText, { fontSize: 25, color: "#8f8f8f" }]}>Mumbai</Text>
      </View>
      {!owner ? <Loginbtn top={true} innerText={"Start Chat"} />: (<View><Loginbtn top={true} innerText={"Edit"} /><Loginbtn innerText={"Log Out"} onPress={logOutPress}/></View>)}

    </ScrollView>
  </View>);
};

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

export default ProfileComp;
