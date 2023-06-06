import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';


export default function Start({navigation}) {

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/logo-no-background.png')}/>
      <View style={styles.card}>
      <Text style={styles.heading}>WELCOME</Text>
      <Text style={styles.body}>You can see the details of your vaccines and birth data in this application.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.buttonText1}>SIGN UP</Text>
        </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading:{
    paddingLeft:'10%',
    fontSize: 30,
    fontWeight: 'bold',
    color:'white',
  },
  body:{
    paddingLeft:'10%',
    fontSize: 15,
    color:'white',
  },
  img:{
    marginTop: '20%',
    width: '90%', height: '30%'
  },
  Text:{
    marginTop:20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding:'5%',
    paddingTop:'15%',
    paddingBottom:'50%'

  },
  card: {
    borderRadius: 10,
    backgroundColor: '#0f1a1e',
    marginTop: '30%',
    borderRadius: 40,
    // margin: '10%',
    paddingTop: '10%',
    paddingBottom: '50%',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    flex:1,
    marginLeft:'5%',
    marginRight: '5%',
    backgroundColor: 'grey',
    borderRadius: 20,
    padding: 15,
    width: '20%',
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
    flex:1,
    marginLeft:'5%',
    marginRight: '5%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    width: '20%',
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
  icons: {
    backgroundColor: '#e3e3e3',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});