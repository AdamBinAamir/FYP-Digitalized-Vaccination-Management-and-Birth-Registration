import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from "react-native";
import axios from 'axios';
import endpoint from '../endpoint';

export default function HWVaccineD() {
  const [vaccineRecords, setVaccineRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${endpoint}/savevacr`);
      const data = response.data;
      setVaccineRecords(data);
      setFilteredRecords(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredData = vaccineRecords.filter(item =>
      item.Description.toLowerCase().includes(query.toLowerCase())
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
      <Text style={styles.heading}>Vaccine Records</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by description"
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
                <Text>ID: {item.id}</Text>
                <Text>Description: {item.Description}</Text>
                <Text>Registered By: {item.RegisteredBy}</Text>
                <Text>Vaccine ID: {item.VaccineId}</Text>
                <Text>Child ID: {item.childId}</Text>
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
    paddingHorizontal: '8%',
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
});



// import React, { useState,useEffect } from 'react';
// import { FlatList, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
// import axios from 'axios';
// export default function HWVaccineD({route }) {
//   const [count, setCount] = useState();
//   const fetchData = async () => {
//     useEffect(() => {
//       axios.get('http://192.168.100.56:8000/savevacr')
//   .then((response) => {
//     const data = response.data;
//     setCount(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
//     }, []);
   

//     console.log(data)
 
//   };
//    fetchData()

  
//   const myListEmpty = () => {
//     return (
//       <View style={{ alignItems: "center" }}>
//       <Text style={styles.item}>No data found</Text>
//       </View>
//     );
//   };
//   if(count==undefined)
//   {
//     myListEmpty()
//   }
//   else{
// return (
//   <View style={styles.container}>
//     <Text style={styles.heading}>Vaccine Records</Text>
//       <View style={styles.card}>
//       <View>
//       {count.map((item, index) => (
//         <View key={index}>
//           <Text>ID: {item.id}</Text>
//           <Text>Description: {item.Description}</Text>
//           <Text>Registered By: {item.RegisteredBy}</Text>
//           <Text>Vaccine ID: {item.VaccineId}</Text>
//           <Text>Child ID: {item.childId}</Text>
//         </View>
//       ))}
//     </View>
//       </View>
//     </View>
//   );
//  }}
 
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


// import React, { useState } from 'react';
// import { FlatList, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";

// export default function HWVaccineData({navigation,route }) {
//   const [count, setCount] = useState();
//   const fetchData = async () => {
  
//      const resp = await fetch("http://172.20.10.2:8000/showvacr");
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
//     <Text style={styles.heading}>vaccine Details</Text>
//       <View style={styles.card}>
//       <FlatList
//       data={count}
//       renderItem={({ item }) => <Text style={styles.item}>{item.id}. {item.firstName}</Text>}
//       keyExtractor={(item) => item.id}
//       ItemSeparatorComponent={myItemSeparator}
//       ListEmptyComponent={myListEmpty}
//       // ListHeaderComponent={() => (
//       //   <Text style={{ fontSize: 30, textAlign: "center",marginTop:20,fontWeight:'bold' }}>
//       //     List of Children
//       //   </Text>
//       // )}
//       ListFooterComponent={() => (
//         <Text style={{ fontSize: 30, textAlign: "center",marginBottom:20,fontWeight:'bold' }}></Text>
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
