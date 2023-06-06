import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import React, { useState } from 'react';

export default function SignUp({navigation}) {
  const [name, setName]= useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  return (  
    <View style={styles.container}>
      <Text style={styles.heading}>Create New Account</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          autoComplete='name'
          placeholder="Full Name"
          placeholderTextColor="white"
          onChangeText={text => setName(text)}
          value={name}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          autoComplete='tel'
          placeholderTextColor="white"
          placeholder="Phone"
          onChangeText={text => setPhone(text)}
          value={phone}
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
            autoComplete='email'
          placeholderTextColor="white"
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          textContentType="password"
          placeholder="Password"
          placeholderTextColor="white"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={showPassword ? true : false}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          textContentType="password"
          placeholder="Confirm Password"
          placeholderTextColor="white"
          onChangeText={text => setConfirmPassword(text)}
          value={confirmpassword}
          secureTextEntry={showPassword ? true : false}
        />
      </View>
      <TouchableOpacity style={styles.button3} onPress={() => setShowPassword(!showPassword)}>
        <Text style={styles.loginText}>{showPassword ? 'Show Password' : 'Hide Password'}</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
      <Text>Already have an account?</Text>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Login</Text>
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
  heading:{
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 60,
    color: 'green'
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
   marginTop:5,
   backgroundColor:"green",
 },
 loginText:{
  color: "white",
 },
 signupBtn:
 {
   width:"30%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:15,
   marginBottom:20,
   backgroundColor:"blue",
 },
 button3:
 {
   width:"30%",
   borderRadius:10,
   height:30,
   alignItems:"center",
   justifyContent:"center",
   marginTop:0,
   marginBottom:20,
   backgroundColor:"grey",
 },
});