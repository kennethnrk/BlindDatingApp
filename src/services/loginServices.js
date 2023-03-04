import AsyncStorage from "@react-native-async-storage/async-storage";

export async function isLoggedIn(){
  const value = await AsyncStorage.getItem("token");
  if(value != null) {
    return value;
  }  else {
    return false;
  };
}
