import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
 

export default function Login({navigation}) {
  const [email, setEmail]= useState('');
  const [password, setPassword] = useState('');
  return (
    
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={require('../assets/logo.png')} style={{ width: 150, height: 150 }}/>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="white"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity >
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() =>
        navigation.navigate('Dashboard')
      }>
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
  Image:{
    marginBottom: 40
  },
  imageView:{
    marginBottom:80

  },
  inputView: {
    backgroundColor: "black",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    color: "white",
    height: 50,
    flex: 1,
    padding: 10,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn:
 {
   width:"30%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:20,
   marginBottom: 15,
   backgroundColor:"green",
 },
 loginText:{
  color: "white",
 },
 signupBtn:
 {
   width:"60%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:15,
   backgroundColor:"blue",
 },
});