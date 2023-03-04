import React, { useState } from "react";
import { StyleSheet,  Text, View, ImageBackground } from "react-native";
import Loginbtn from "../components/loginbtn";
import Inputbox from "../components/inputbox";



const ForgotPassword = ()=>{
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState();
  const [userMobile, setUserMobile] = useState('9372536732');
  const sendOtp = () => {
      setOtpSent(true);
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../src/assets/images/landingBackground.jpg')}  style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.upperHalf}>
            <Text style={styles.UHtext}>Forgot Password</Text>
          </View>
          <View style={styles.lowerHalf}>
            <View style={styles.btnbox}>
              <Inputbox placeholder={userMobile} editable={false} />
              {otpSent ?
                <View>
                  <Inputbox placeholder={'otp'} editable={true} onChangeText={(text) => {setOtp(text)}}/>
                  <Loginbtn top ={true} innerText={"Submit"} />
                </View>
                :<Loginbtn top ={true} innerText={"Send OTP"} onPress={sendOtp}/>}


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
    flex: 2,
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

export default ForgotPassword;
