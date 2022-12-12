import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {checkIdentifiant} from '../../components/auth.components.js';
import {getData, storeData} from '../../components/storage.components.js';
import React, {useState} from 'react';
// import axios from 'axios';

const Login = ({navigation}) => {
  const [IUsername, setIUsername] = useState('aze');
  const [IPassword, setIPassword] = useState('azertyui');
  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <View style={styles.containerInput}>
            <Text style={styles.loginText}>Username</Text>
            <TextInput
              style={styles.loginInput}
              onChangeText={text => setIUsername(text)}
              value={IUsername}
            />
          </View>
          <View style={styles.containerInput}>
            <Text style={styles.loginText}>Password</Text>
            <TextInput
              style={styles.loginInput}
              onChangeText={text => setIPassword(text)}
              value={IPassword}
              secureTextEntry={true}
            />
          </View>
          <TouchableHighlight
            style={styles.submit}
            onPress={async () => {
              //comprendre pourquoi je récup pas le résultat de checkidentifiant
              const test = await checkIdentifiant(IUsername, IPassword);
              // if (test) {
              console.log(
                'apres check des identifiants, le token est :' +
                  getData('Token'),
              );
              navigation.navigate('Home');
              // }
              // checkIdentifiant(IUsername, IPassword);
            }}
            underlayColor="transparent">
            <Text style={styles.buttonText}>Enter App</Text>
          </TouchableHighlight>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  containerInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
  },
  loginForm: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
  },
  loginText: {
    backgroundColor: 'white',
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: 'black',
    width: '35%',
    marginBottom: 10,
  },
  loginInput: {
    backgroundColor: 'white',
    fontFamily: 'Gill Sans',
    color: 'black',
    width: '35%',
    marginBottom: 10,
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: '10%',
  },
  buttonText: {
    fontSize: 25,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    margin: 10,
    backgroundColor: 'gray',
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
  },
});

export default Login;
