import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import LoadingIndicator from '../LoadingIndicator';
import React, { useState } from 'react';
import axios from 'axios';
import endpoint from '../endpoint';

export default function HWAddVaccine({route, navigation}) {
  const { itemId } = route.params;
  console.log('EmailAddVaccine: ',itemId);
  const [loading, setLoading] = useState(false);
  const [childId, setChildId] = useState('');
  const [SerialNo, setSerialNo] = useState('');
  const [Vaccine_ID, setvi] = useState('');
  const [Vaccine_Description, setvd] = useState('');

  const error = async () => {
    if(childId=='' || Vaccine_ID == ''|| Vaccine_Description == '')
   {
    ToastAndroid.show('Credentials not Entered', ToastAndroid.SHORT);
   }
   else{
    saveData();
   }
  };

  const saveData = async() =>
  {
    setLoading(true);   
    try
    {
      let formField = new FormData()
      formField.append('childId',childId)
      // formField.append('id',SerialNo)
      formField.append('VaccineId',Vaccine_ID)
      formField.append('Description',Vaccine_Description)
      formField.append('RegisteredBy',itemId)
      formField.append('HCWA_Email','hcw@hcw.com')
      const response=await axios({
        method: 'POST',
        url: `${endpoint}/savevacr`,
        data: formField,
      })
         setLoading(false);
    ToastAndroid.show('Record Added', ToastAndroid.SHORT);
        //  navigation.navigate("HWDashboard")
}
  catch(error)
  {
    setLoading(false);
    ToastAndroid.show('Failed to Save data', ToastAndroid.SHORT);
  }

        }

  return (
    <ScrollView>
    <View style={styles.container}>
        {loading && <LoadingIndicator />}
      <Text style={styles.heading}>Add New Vaccine Record</Text>
      <View style={styles.card}>
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Child ID"
            onChangeText={text => setChildId(text)}
            value={childId}
          />
        </View>
        {/* <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Serial Number"
            onChangeText={text => setSerialNo(text)}
            value={SerialNo}
            keyboardType="numeric"
            inputMode='numeric'
          />
        </View> */}

      <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Vaccine ID"
            onChangeText={text => setvi(text)}
            value={Vaccine_ID}
            keyboardType="numeric"
            inputMode='numeric'
          />
        </View>
        <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder="Vaccine Description"
            onChangeText={text => setvd(text)}
            value={Vaccine_Description}
            inputMode='text'
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => error()}>
          <Text style={styles.buttonText}>Add Record</Text>
        </TouchableOpacity>
      </View>
      
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
  card: {
    borderRadius: 10,
    backgroundColor: '#eee',
    marginTop: '20%',
    borderRadius: 40,
    // margin: '10%',
    paddingTop: '10%',
    paddingBottom: '70%',
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
  });