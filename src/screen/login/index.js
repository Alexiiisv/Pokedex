import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState} from 'react';
import {
  EnterApp,
  LinearGradiantComp,
  LoginButton,
  LoginContainer,
  LoginFormContainer,
  LoginLabel,
  LoginLabelContainer,
  TextInputLogin,
} from './style';
import {sendGetRequest} from '../../utils/auth';
import styled from 'styled-components';

const Login = ({navigation}) => {
  const [IUsername, setIUsername] = useState('aze');
  const [IPassword, setIPassword] = useState('azertyui');
  return (
    <LoginContainer>
      <LoginFormContainer>
        <LinearGradiantComp colors={['#4c669f', '#3b5998', '#192f6a']}>
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
              if (await sendGetRequest(IUsername, IPassword)) {
                navigation.navigate('Home');
              }
            }}
            underlayColor="transparent">
            <EnterApp>Enter App</EnterApp>
          </LoginButton>
        </LinearGradiantComp>
      </LoginFormContainer>
    </LoginContainer>
  );
};

export default Login;
