import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';


export default function Start({navigation}) {

  return (
    
    <View style={styles.container}>
      <View style={styles.imageView}>
        <ImageBackground source={require('../assets/bg_landing.jpeg')} style={{ width: 500, height: 500 }}/>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <Text>OR</Text>
      <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.loginText}>Create A New Account</Text>
      </TouchableOpacity>
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
  
  imageView:{
    marginBottom:40,
    alignContent:'center'

  },
  loginBtn:
 {
   width:"30%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:-370,
   marginBottom: 15,
   backgroundColor:"green",
 },
 loginText:{
  color: "white",
 },
 signupBtn:
 {
   width:"50%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:15,
   marginBottom: 100,
   backgroundColor:"blue",
 },
});
