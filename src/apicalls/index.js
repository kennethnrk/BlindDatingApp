import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const axiosInstance = axios.create({
  baseURL: 'http://10.110.77.194:4000',
  headers:{
    'authorization': `Bearer ${AsyncStorage.getItem('token')}`
  }
})
