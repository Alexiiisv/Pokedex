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
import notifee from '@notifee/react-native';

const Login = ({navigation}) => {
  const [IUsername, setIUsername] = useState('');
  const [IPassword, setIPassword] = useState('');
  async function onDisplayNotification() {
    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    console.log('channel créer');
    // Display a notification
    await notifee.displayNotification({
      title: 'Connexion',
      body: 'Vous venez de vous connecter',
      android: {
        channelId,
        smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
    console.log('notification affiché');
  }
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
                onDisplayNotification();
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
