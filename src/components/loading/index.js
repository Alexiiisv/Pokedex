import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LoadingText} from './style';

export const Loading = () => {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.linearGradienttest}>
      <ActivityIndicator size="large" color={'white'} />
      <LoadingText>Loading</LoadingText>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradienttest: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
