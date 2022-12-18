import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import React, { useState } from 'react';

export default function Profile({navigation}) {
 
  return (
    
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
