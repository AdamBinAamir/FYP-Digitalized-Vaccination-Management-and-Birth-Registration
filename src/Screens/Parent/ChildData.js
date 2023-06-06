import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from "react-native";
import axios from 'axios';
import endpoint from '../endpoint';

export default function ChildData({ route }) {
  const [birthRecords, setBirthRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { itemId } = route.params;
console.log('EmailChildData: ',itemId);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${endpoint}/getBirthRecordsforParent/?Parent_Email=${itemId}`);
      const data = response.data;
      setBirthRecords(data.birthRecords); // Set birthRecords to the array inside "birthRecords" field
      setFilteredRecords(data.birthRecords); // Set filteredRecords as well
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredData = birthRecords.filter(item =>
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
      <Text style={styles.heading}>Children Data</Text>
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
                <Text>Child ID: {item.id}</Text>
                <Text>Child Name: {item.fullName}</Text>
                <Text>Gender: {item.Gender}</Text>
                <Text>Date of Birth: {item.birth_date}</Text>
                <Text>Registered By: {item.RegisteredBy}</Text>
                <Text>Father CNIC: {item.Father_CNIC}</Text>
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



// import React, { useState } from 'react';
// import { FlatList, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";

// export default function ChildData({navigation}) {
//   const [count, setCount] = useState();
    
//   const fetchData = async () => {
  
//      const resp = await fetch("http://172.20.10.2:8000/showchild");
//      const data = await resp.json();
//      setCount(data);
//    };
//    fetchData()
//   const myItemSeparator = () => {
//     return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
//     };
  
//   const myListEmpty = () => {
//     return (
//       <View style={{ alignItems: "center" }}>
//       <Text style={styles.item}>No data found</Text>
//       </View>
//     );
//   };
  
// return (
//   <View style={styles.container}>
//     <Text style={styles.heading}>Child Data</Text>
//       <View style={styles.card}>
//       <FlatList
//       data={count}
//       renderItem={({ item }) => <Text style={styles.item}>{item.id}. {item.firstName}</Text>}
//       keyExtractor={(item) => item.id}
//       ItemSeparatorComponent={myItemSeparator}
//       ListEmptyComponent={myListEmpty}
//       ListFooterComponent={() => (
//         <Text style={{ fontSize: 100, textAlign: "center",marginBottom:20,fontWeight:'bold' }}></Text>
//       )}
//       />
//       </View>
//     </View>
//   );
//  }
 
// const styles = StyleSheet.create({
//   heading:{
//     marginTop: '20%',
//     fontSize: 30,
//     fontWeight: 'bold',
//     color:'white'
//   },
//   Text:{
//     marginTop:20,
//     fontWeight: 'bold',
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#0f1a1e',
//   },
//   card: {
//     borderRadius: 20,
//     backgroundColor: '#eee',
//     marginTop: '20%',
//     borderRadius: 40,
//     // margin: '10%',
//     paddingTop: '20%',
//     paddingBottom: '100%',
//     width: '100%',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   item: {
//     textAlign:"center",
//     padding: 20,
//     marginTop: 5,
//     fontSize: 15,
//   },

// });
