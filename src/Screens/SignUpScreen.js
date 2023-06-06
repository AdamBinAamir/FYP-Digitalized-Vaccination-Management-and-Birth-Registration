import { StyleSheet, Text, ScrollView, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

import React, { useState } from 'react';

export default function SignUpScreen({navigation}) {
  const [name, setName]= useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  return (
    <ScrollView>
    <View style={styles.container}>
    <Text style={styles.heading}>Create a New Account</Text>
      {/* <ImageBackground source={require('../assets/funky-lines.png')} style={{ width: '100%', height: '100%' }}> */}
      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoComplete='name'
            placeholder="Full Name"
            onChangeText={text => setName(text)}
            value={name}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoComplete='tel'
            placeholder="Phone"
            onChangeText={text => setPhone(text)}
            value={phone}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoComplete='email'
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={showPassword ? true : false}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoComplete='new-password'
            placeholder="Confirm Password"
            onChangeText={text => setConfirmPassword(text)}
            value={confirmpassword}
            secureTextEntry={showPassword ? true : false}
          />
        </View>
        <TouchableOpacity style={styles.button3} onPress={() => setShowPassword(!showPassword)}>
        <Text style={styles.buttonText}>{showPassword ? 'Show Password' : 'Hide Password'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.Text}>Already have an Account?</Text>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonText1}>Sign In</Text>
        </TouchableOpacity>
      </View>
      {/* </ImageBackground> */}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading:{
    marginTop: '20%',
    fontSize: 30,
    fontWeight: 'bold',
    color:'white'
  },
    Text:{
      marginTop:20,
      fontWeight: 'bold',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#0f1a1e',
    },
    logoContainer: {
      alignItems: 'center',
      marginTop: 120,
      marginBottom:10,
    },
    logo: {
      width: 120,
      height: 120,
      borderRadius:60,
      resizeMode: 'contain',
  
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    card: {
      borderRadius: 10,
      backgroundColor: '#eee',
      marginTop: '20%',
      borderRadius: 40,
      // margin: '10%',
      paddingTop: '15%',
      paddingBottom: '22%',
      width: '100%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer: {
      borderRadius: 20,
      backgroundColor: 'lightgrey',
      margin: '2.5%',
      padding: '2.5%',
      width: '80%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    input: {
      padding: 5,
      fontSize: 16,
    },
    button: {
      marginTop: 20,
      backgroundColor: '#0f1a1e',
      borderRadius: 20,
      padding: 15,
      width: '60%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    button2: {
      marginTop: '5%',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 15,
      width: '60%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    button3: {
      marginTop: '4%',
      backgroundColor: 'grey',
      borderRadius: 10,
      padding: 5,
      width: '36%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    buttonText: {
      fontSize: 16,
      color: '#fff',
      textAlign: 'center',
    },
    buttonText1: {
      fontSize: 16,
      color: 'black',
      textAlign: 'center',
    },
  });