import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storeData} from './storage.components.js';
import Login from '../../src/screen/login';

export const checkIdentifiant = async (UserName, PassWord) => {
  if (UserName.length <= 2 && PassWord.length <= 7) {
    return;
  }
  axios
    .post('https://login.hikkary.com/users/login', {
      username: UserName,
      password: PassWord,
    })
    .then(function (response) {
      //   console.log(JSON.stringify(response.request._response));
      storeData('Token', JSON.stringify(response.request._response)); //['x-access-token']
      return true;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
  //   return true;
};
