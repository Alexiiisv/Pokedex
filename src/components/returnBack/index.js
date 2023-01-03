import React from 'react';
import {Button} from 'react-native';

export const MyBackButton = ({title, navigation}) => {
  return (
    <Button
      title={title}
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
};
