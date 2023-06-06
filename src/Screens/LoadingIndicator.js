import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const LoadingIndicator = () => {
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 11,
      }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};
export default LoadingIndicator;
