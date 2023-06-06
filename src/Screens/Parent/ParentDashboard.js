import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import React, { useState } from 'react';

export default function ParentDashboard() {
  const [id, setId] = useState('');
  const handleCardPress = (cardName) => {
    console.log(`Card ${cardName} Pressed`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Parent</Text>
      <Text style={styles.heading1}>Dashboard</Text>
      <View style={styles.card}>
      <Text style={styles.heading2}>WELCOME</Text>
      <Text style={styles.body}>You can view the details of your family's vaccine records and birth records in this dashboard.</Text>
        {/* <View style={styles.horizontalContainer}>
          <TouchableOpacity
            style={[styles.card1, { backgroundColor: 'black' }]}
            onPress={() => handleCardPress('View Alloted Vaccine')}
          >
            <Text style={styles.cardText}>Alloted Vaccine</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.card3, { backgroundColor: 'grey' }]}
            onPress={() => handleCardPress('Vaccinate children')}
          >
            <Text style={styles.cardText}>Vaccinate children</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalContainer}>
          <TouchableOpacity
            style={[styles.card2, { backgroundColor: 'white', color:'black' }]}
            onPress={() => handleCardPress('View Vaccination Records')}
          >
            <Text style={[styles.cardText,{color:'black'}]}>Vaccination Records</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalContainer}>
          <TouchableOpacity
            style={[styles.card1, { backgroundColor: 'grey' }]}
            onPress={() => handleCardPress('Add birth detail')}
          >
            <Text style={styles.cardText}>Add birth detail</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.card3, { backgroundColor: 'black' }]}
            onPress={() => handleCardPress('View birth detail')}
          >
            <Text style={styles.cardText}>View birth detail</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading2:{

    fontSize: 40,
    fontWeight: 'bold',

  },
  body:{
    justifyContent:'center',
    alignItems: 'center',

    alignSelf:'center',
    padding:'12%',
    fontSize: 20,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  heading: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '20%',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    flexDirection: 'row',
  },
  heading1: {
    alignSelf: 'center',
    marginTop: '0%',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    flexDirection: 'row',
  },
  Text: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  container: {
    alignContent: 'center',
    flex: 1,
    backgroundColor: '#0f1a1e',
  },
  card: {
    backgroundColor: '#eee',
    marginTop: '10%',
    borderRadius: 40,
    paddingTop: '25%',
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
  card3: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    borderRadius: 15,
    marginLeft: '2%',
    paddingTop: '11%',
    paddingBottom: '11%',
    width: '45%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card1: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    borderRadius: 15,
    marginLeft: '0%',
    paddingTop: '11%',
    paddingBottom: '11%',
    width: '45%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card2: {
    paddingHorizontal: '19%',
    flexDirection: 'row',
    borderRadius: 15,
    paddingTop: '11%',
    paddingBottom: '11%',
    width: '88%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  cardText: {
    color: 'white',
    fontFamily: 'Foundation',
    fontSize: 20,
    paddingLeft:'5%',
    paddingTop: '12.5%',
    paddingBottom: '12.5%',
  },
});
