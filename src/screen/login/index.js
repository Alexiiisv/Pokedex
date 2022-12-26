import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import {sendGetRequest} from '../../components/auth/index.js';
import React, {useState} from 'react';
import {
  EnterApp,
  LoginButton,
  LoginContainer,
  LoginFormContainer,
  LoginLabel,
  LoginLabelContainer,
  TextInputLogin,
} from '../../components/styled';

const Login = ({navigation}) => {
  const [IUsername, setIUsername] = useState('aze');
  const [IPassword, setIPassword] = useState('azertyui');
  return (
    <LoginContainer>
      <LoginFormContainer>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <LoginLabelContainer>
            <LoginLabel>Username</LoginLabel>
            <TextInputLogin
              onChangeText={text => setIUsername(text)}
              value={IUsername}
            />
          </LoginLabelContainer>
          <LoginLabelContainer>
            <LoginLabel>Password</LoginLabel>
            <TextInputLogin
              onChangeText={text => setIPassword(text)}
              value={IPassword}
              secureTextEntry={true}
            />
          </LoginLabelContainer>
          <LoginButton
            onPress={async () => {
              // if (await sendGetRequest(IUsername, IPassword)) {
              console.log('Réussite de la connexion du compte');
              navigation.navigate('Home');
              // } else {
              //   console.log('une erreur est subvenue lors de la connexion');
              // }
            }}
            underlayColor="transparent">
            <EnterApp>Enter App</EnterApp>
          </LoginButton>
        </LinearGradient>
      </LoginFormContainer>
    </LoginContainer>
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
