import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert,StyleSheet,ToastAndroid  } from 'react-native';
import axios from 'axios';
import { useRoute } from "@react-navigation/native"
import LoadingIndicator from './LoadingIndicator';
import endpoint from './endpoint';

let access = 'normaluser';
let respons = [];


export default function EndPointScr({ route,navigation }) {
  const [loading, setLoading] = useState(false);

  const [endpoint, setEndpoint] = useState('');
  
  const handleError = async () => {
    if(endpoint == '')
   {
    ToastAndroid.show('Credentials not Entered', ToastAndroid.SHORT);
   }
   else{
    handleSubmit();
   }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      navigation.navigate('Start',{URL:endpoint});

    } catch (error) {
      setLoading(false);
      ToastAndroid.show('Unable to save URL', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      {loading && <LoadingIndicator />}
       <Text style={styles.heading}>Enter URL</Text>
       <View style={styles.card}>
         <View style={styles.inputContainer}>
           <TextInput
            style={styles.input}
            placeholder="URL"
            onChangeText={text => setEndpoint(text)}
            value={endpoint}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleError()}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  

}
const styles = {
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
  card: {
    borderRadius: 10,
    backgroundColor: '#eee',
    marginTop: '20%',
    borderRadius: 40,
    // margin: '10%',
    paddingTop: '20%',
    paddingBottom: '100%',
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
    padding:5,
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
  icons: {
    backgroundColor: '#e3e3e3',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
};