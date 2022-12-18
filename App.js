import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './Screens/Start';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Dashboard from './Screens/Dashboard';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen options={{ headerShown: false, title: 'Start' }}  name="Start" component={Start} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, title: 'Login' }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false, title: 'SignUp' }}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
