// import React, { useState, useEffect } from 'react';
// import { FlatList, StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from "react-native";
// import axios from 'axios';
// import endpoint from '../endpoint';

// export default function vaccinerecord({ route }) {
//   const [vaccine_records, setVaccine_Records] = useState([]);
//   const [filteredRecords, setFilteredRecords] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const { itemId } = route.params;
// console.log('EmailVaccineData: ',itemId);
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`${endpoint}/getVaccineRecordsforParent/?Parent_Email=${itemId}`);
//       const data = response.data;
//       setVaccine_Records(data.vaccine_records); // Set vaccine_records to the array inside "vaccine_records" field
//       setFilteredRecords(data.vaccine_records); // Set filteredRecords as well
//     } catch (error) {
//       console.error(error);
//     }
//   };
  

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     const filteredData = vaccine_records.filter(item =>
//       item.Description.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredRecords(filteredData);
//   };

//   const myListEmpty = () => {
//     return (
//       <View style={{ alignItems: "center" }}>
//         <Text style={styles.item}>No data found</Text>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Vaccine Data</Text>
//       <TextInput
//         style={styles.searchInput}
//         placeholder="Search by child id"
//         value={searchQuery}
//         onChangeText={handleSearch}
//       />
//       <View style={styles.card}>
//         {filteredRecords.length === 0 ? (
//           myListEmpty()
//         ) : (
//           <FlatList
//             data={filteredRecords}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={({ item }) => (
//               <View style={styles.card1}>
//                 <Text>ID: {item.id}</Text>
//                 <Text>Description: {item.Description}</Text>
//                 <Text>Registered By: {item.RegisteredBy}</Text>
//                 <Text>Vaccine ID: {item.VaccineId}</Text>
//                 <Text>Child ID: {item.childId}</Text>
//               </View>
//             )}
//           />
//         )}
//       </View>
//     </View>
//   );
// }
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from "react-native";
import axios from 'axios';
import endpoint from '../endpoint';

export default function vaccinerecord({ route }) {
  const [vaccine_records, setVaccine_Records] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { itemId } = route.params;
console.log('EmailChildData: ',itemId);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${endpoint}/getVaccineRecordsforParent/?Parent_Email=${itemId}`);
      const data = response.data;
      setVaccine_Records(data.vaccine_records); // Set vaccine_records to the array inside "vaccine_records" field
      setFilteredRecords(data.vaccine_records); // Set filteredRecords as well
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredData = vaccine_records.filter(item =>
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
      <Text style={styles.heading}>Vaccine Data</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by Description"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <View style={styles.card}>
        {filteredRecords && filteredRecords.length === 0 ? (
          myListEmpty()
        ) : (
          <FlatList
            data={filteredRecords}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.card1}>
                <Text>ID: {item.id}</Text>
                <Text>Child Name: {item.childName}</Text>
                <Text>Vaccine Name: {item.vaccineName}</Text>
                <Text>Description: {item.Description}</Text>
                <Text>Registered By: {item.RegisteredBy}</Text>
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

// export default function Vaccinerecord({navigation}) {
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
//     <Text style={styles.heading}>Vaccine Record</Text>
//       <View style={styles.card}>
//       <FlatList
//       data={count}
//       renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('ChildData')}>
//                                   <Text style={styles.item}>{item.id}. {item.firstName}</Text>
//                                 </TouchableOpacity>}
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
