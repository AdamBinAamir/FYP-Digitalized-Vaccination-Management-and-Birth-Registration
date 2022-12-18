import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';
import React, { useState } from 'react';

export default function Details({navigation}) {

  return (
    
    <View style={styles.container}>
      <DataTable style={styles.container1}>
      <DataTable.Header style={styles.tableHeader}>
        
        <DataTable.Title>Patient ID</DataTable.Title>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Vaccine</DataTable.Title>
        <DataTable.Title>Type</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>1913</DataTable.Cell>
        <DataTable.Cell>Hasnein</DataTable.Cell>
        <DataTable.Cell>COVID-19</DataTable.Cell>
        <DataTable.Cell>Moderna</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>1914</DataTable.Cell>
        <DataTable.Cell>Rafae</DataTable.Cell>
        <DataTable.Cell>Pollen</DataTable.Cell>
        <DataTable.Cell>Pfizer</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>1915</DataTable.Cell>
        <DataTable.Cell>Adam</DataTable.Cell>
        <DataTable.Cell>COVID-19</DataTable.Cell>
        <DataTable.Cell>Astrazenca</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>1916</DataTable.Cell>
        <DataTable.Cell>Qasim</DataTable.Cell>
        <DataTable.Cell>Flu</DataTable.Cell>
        <DataTable.Cell>Pfizer</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    textAlign: 'center',
    padding: 15,
  },

});
