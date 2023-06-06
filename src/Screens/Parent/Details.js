import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";

export default function Details({navigation}) {
  const [count, setCount] = useState();
    
  const fetchData = async () => {
  
     const resp = await fetch("http://10.120.169.17:8000/showchild");
     const data = await resp.json();
     setCount(data);
   };
   fetchData()
  const myItemSeparator = () => {
    return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
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
    <Text style={styles.heading}>List of Children</Text>
      <View style={styles.card}>
      <FlatList
      data={count}
      renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('ChildData')}>
                                  <Text style={styles.item}>{item.id}. {item.firstName}</Text>
                                </TouchableOpacity>}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={myItemSeparator}
      ListEmptyComponent={myListEmpty}
      // ListHeaderComponent={() => (
      //   <Text style={{ fontSize: 30, textAlign: "center",marginTop:20,fontWeight:'bold' }}>
      //     List of Children
      //   </Text>
      // )}
      ListFooterComponent={() => (
        <Text style={{ fontSize: 30, textAlign: "center",marginBottom:20,fontWeight:'bold' }}></Text>
      )}
      />
      </View>
    </View>
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
    flex:1,
    borderRadius: 20,
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
  item: {
    textAlign:"center",
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },

});
