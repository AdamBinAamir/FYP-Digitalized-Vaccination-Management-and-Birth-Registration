import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


export default function Demo({navigation}) {

  return (
    
    <View style={styles.container}>
      <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Details')}>
        <Text style={styles.loginText}>Parent Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.loginText}>Parent Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Start')}>
        <Text style={styles.loginText}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.loginText}>SignUp2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Login2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('AdminLoginScreen')}>
        <Text style={styles.loginText}>Admin Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.loginText}>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('AdminDashboard')}>
        <Text style={styles.loginText}>AdminDashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('HWDashboard')}>
        <Text style={styles.loginText}>HWDashboard</Text>
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
   margin:10,
  //  marginTop:-370,
  //  marginBottom: 15,
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
  //  marginTop:15,
  //  marginBottom: 100,
   backgroundColor:"blue",
 },
});