import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
import {sendGetRequest} from '../../utils/auth';

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
              if (await sendGetRequest(IUsername, IPassword)) {
                console.log('Réussite de la connexion du compte');
                navigation.navigate('Home');
              } else {
                console.log('une erreur est subvenue lors de la connexion');
              }
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
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
  },
});

export default Login;
