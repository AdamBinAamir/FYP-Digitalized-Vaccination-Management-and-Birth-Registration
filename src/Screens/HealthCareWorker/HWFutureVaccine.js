import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from "react-native";
import axios from 'axios';
import endpoint from '../endpoint';

export default function HWFutureVaccine({ route }) {
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { itemId } = route.params;
console.log('EmailFutureVaccine: ',itemId);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${endpoint}/GetFutureVaccinesForHCW/?HCW_Email=${itemId}`);
      const data = response.data;
      setRecords(data.records); // Set records to the array inside "records" field
      setFilteredRecords(data.records); // Set filteredRecords as well
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredData = records.filter(item =>
      item.fullName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRecords(filteredData);
  };

  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.item}>No data found</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Future Vaccines</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by child name"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <View style={styles.card}>
        {filteredRecords.length === 0 ? (
          myListEmpty()
        ) : (
          <FlatList
            data={filteredRecords}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.card1}>
                <Text>Vaccine Name: {item.vaccineName}</Text>
                <Text>Vaccine ID: {item.VaccineId}</Text>
                <Text>Child ID: {item.child_id}</Text>
                <Text>Child Name: {item.childName}</Text>
                <Text>Address: {item.parent_address}</Text>
                <Text>Contact: {item.parent_contact}</Text>
                <Text>Description: {item.Description}</Text>
                <Text>Data: {item.Date}</Text>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginTop: '20%',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  searchInput: {
    marginTop: 20,
    paddingHorizontal: '10%',
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0f1a1e',
  },
  card: {
    borderRadius: 20,
    backgroundColor: '#eee',
    marginTop: '20%',
    borderRadius: 40,
    paddingTop: '10%',
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
  item: {
    textAlign: "center",
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },
  card1: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal:'8%',
    paddingTop: '10%',
    paddingBottom: '10%',
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
  item: {
    textAlign: "center",
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },
});
