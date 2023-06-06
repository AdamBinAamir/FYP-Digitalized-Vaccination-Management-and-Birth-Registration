import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Demo from './Demo';
import Start from './Start';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import ChildData from './Parent/ChildData';
import Dashboard from './Parent/Dashboard';
import Feedback from './Parent/Feedback';
import Details from './Parent/Details';
import Vaccinerecord from './Parent/vaccinerecord';
import Setting from './Parent/Setting';
import HWAddBirth from './HealthCareWorker/HWAddBirth';
import HWAddVaccine from './HealthCareWorker/HWAddVaccine';
import HWBirth from './HealthCareWorker/HWBirth';
import HWBirthData from './HealthCareWorker/HWBirthData';
import HWBData from './HealthCareWorker/HWBData';
import HWVaccineD from './HealthCareWorker/HWVaccineD';
import HWDashboard from './HealthCareWorker/HWDashboard';
import HWDelBirth from './HealthCareWorker/HWDelBirth';
import HWDelVaccine from './HealthCareWorker/HWDelVaccine';
import HWSetting from './HealthCareWorker/HWSetting';
import HWVaccine from './HealthCareWorker/HWVaccine';
import HWVaccineData from './HealthCareWorker/HWVaccineData';
import ParentDashboard from './Parent/ParentDashboard';
import EndPointScr from './EndPointScr';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Demo" component={Demo} options={{ title: 'Demo' }} />
        <Stack.Screen name="EndPointScr" component={EndPointScr} options={{ title: 'EndPointScr' }} />
        <Stack.Screen name="Start" component={Start} options={{ title: 'Start' }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard' }}/>
        <Stack.Screen name="ParentDashboard" component={ParentDashboard} options={{ title: 'ParentDashboard' }}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'LoginScreen' }}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{  title: 'SignUpScreen' }}/>
        <Stack.Screen name="ChildData" component={ChildData} options={{ title: 'ChildData' }}/>
        <Stack.Screen name="Details" component={Details} options={{ title: 'Details' }}/>
        <Stack.Screen name="Vaccinerecord" component={Vaccinerecord} options={{ title: 'Vaccinerecord' }}/>
        <Stack.Screen name="Setting" component={Setting} options={{ title: 'Setting' }}/>
        <Stack.Screen name="Feedback" component={Feedback} options={{ title: 'Feedback' }}/>
        <Stack.Screen name="HWDashboard" component={HWDashboard} options={{ title: 'HWDashboard' }}/>
        <Stack.Screen name="HWBirth" component={HWBirth} options={{ title: 'HWBirth' }}/>
        <Stack.Screen name="HWBData" component={HWBData} options={{ title: 'HWBData' }}/>
        <Stack.Screen name="HWVaccine" component={HWVaccine} options={{ title: 'HWVaccine' }}/>
        <Stack.Screen name="HWAddBirth" component={HWAddBirth} options={{ title: 'HWAddBirth' }}/>
        <Stack.Screen name="HWDelBirth" component={HWDelBirth} options={{ title: 'HWDelBirth' }}/>
        <Stack.Screen name="HWBirthData" component={HWBirthData} options={{ title: 'HWBirthData' }}/>
        <Stack.Screen name="HWVaccineData" component={HWVaccineData} options={{ title: 'HWVaccineData' }}/>
        <Stack.Screen name="HWAddVaccine" component={HWAddVaccine} options={{ title: 'HWAddVaccine' }}/>
        <Stack.Screen name="HWDelVaccine" component={HWDelVaccine} options={{ title: 'HWDelVaccine' }}/>
        <Stack.Screen name="HWSetting" component={HWSetting} options={{ title: 'HWSetting' }}/>
        <Stack.Screen name="HWVaccineD" component={HWVaccineD} options={{ title: 'HWVaccineD' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;