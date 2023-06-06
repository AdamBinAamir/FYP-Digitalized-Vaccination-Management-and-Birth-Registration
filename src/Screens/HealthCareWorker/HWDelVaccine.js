import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity} from 'react-native';

const HWDelVaccine = ({navigation}) => {

  const [id, setId] = useState('');
  const deleteData = async() =>
  {
      let formField = new FormData()
      formField.append('id',id)
            fetch("http://172.20.10.2:8000/deletevacr", {
            method: "DELETE",
            body:  formField
         })
         navigation.navigate("HWDashboard")
        }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Delete Vaccine Record</Text>
      <View style={styles.card}>
        <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder="Enter Id"
            onChangeText={text => setId(text)}
            value={id}
          />
        </View>
        <TouchableOpacity style={styles.button}  onPress={() => deleteData()}>
          <Text style={styles.buttonText}>Delete Record</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
};
export default HWDelVaccine;