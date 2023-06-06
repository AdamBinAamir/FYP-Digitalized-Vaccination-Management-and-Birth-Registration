import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Image, View, Text } from 'react-native';
import HWSetting from './HWSetting';
import HWBirth from './HWBirth';
import HWAddVaccine from './HWAddVaccine';
import HWAddBirth from './HWAddBirth';
import HWVaccineD from './HWVaccineD';
import HWBirthData from './HWBirthData';
import HWFutureVaccine from './HWFutureVaccine';
const Drawer = createDrawerNavigator();

const CustomDrawerHeader = () => {
  return (
    <View style={{ flexDirection: 'column', alignItems: 'center', margin: '5%' }}>
      <Image source={require('../../assets/user.png')} style={{ width: 100, height: 100  }} />
      <View>      
        <Text style={{ fontSize: 18, fontWeight: 'bold',marginTop:10 }}>Healthcare Worker</Text>
      </View>
    </View>
  );
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <CustomDrawerHeader />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default function HWDashboard({ route }) {
  
  const { userEmail } = route.params;
console.log(userEmail);
  return (
    <Drawer.Navigator initialRouteName="HWBirth"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
       <Drawer.Screen
  name="       "
  component={HWBirth}
  initialParams={{ itemId: userEmail }}
  options={{
    drawerLabel: 'Dashboard',
    drawerIcon: ({ color, size }) => (
      <Image
        source={require('../../assets/home.png')}
        style={{ tintColor: color, width: size, height: size }}
      />
),
}}
/>
       
        <Drawer.Screen
          name="                "
          component={HWAddBirth}
          initialParams={{ itemId: userEmail }}
          options={{
            drawerLabel: 'Add Birth Record',
            drawerIcon: ({ color, size }) => (
              <Image
        source={require('../../assets/certificate.png')}
        style={{ tintColor: color, width: size, height: size }}
      />
            ),
          }}
        />
        <Drawer.Screen
          name=" "
          component={HWAddVaccine}
          initialParams={{ itemId: userEmail }}
          options={{
            drawerLabel: 'Add Vaccine Record',
            drawerIcon: ({ color, size }) => (
              <Image
              source={require('../../assets/syringe.png')}
              style={{ tintColor: color, width: size, height: size }}
            />
            ),
          }}
        />
         <Drawer.Screen
          name="  "
          component={HWVaccineD}
          initialParams={{ itemId: userEmail }}
          options={{
            drawerLabel: 'Vaccine Records',
            drawerIcon: ({ color, size }) => (
              <Image
              source={require('../../assets/certificate.png')}
              style={{ tintColor: color, width: size, height: size }}
            />
            ),
          }}
        />
         <Drawer.Screen
          name="    "
          component={HWBirthData}
          initialParams={{ itemId: userEmail }}
          options={{
            drawerLabel: 'Birth Records',
            drawerIcon: ({ color, size }) => (
              <Image
              source={require('../../assets/baby.png')}
              style={{ tintColor: color, width: size, height: size }}
            />
            ),
          }}
        />
        <Drawer.Screen
          name="              "
          component={HWFutureVaccine}
          initialParams={{ itemId: userEmail }}
          options={{
            drawerLabel: 'Future Vaccines',
            drawerIcon: ({ color, size }) => (
              <Image
              source={require('../../assets/syringe.png')}
              style={{ tintColor: color, width: size, height: size }}
            />
            ),
          }}
        />
        <Drawer.Screen
          name="   "
          component={HWSetting}
          initialParams={{ itemId: userEmail }}
          options={{
            drawerLabel: 'Settings',
            drawerIcon: ({ color, size }) => (
              <Image
        source={require('../../assets/gear.png')}
        style={{ tintColor: color, width: size, height: size }}
      />
            ),
          }}
        />
      </Drawer.Navigator>
  );
}




// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import HWVaccine from './HWVaccine';
// import HWSetting from './HWSetting';
// import HWBirth from './HWBirth';
// import HWAddVaccine from './HWAddVaccine';
// import HWAddBirth from './HWAddBirth';
// import { Image } from 'react-native';
// import HWVaccineD from './HWVaccineD';
// import HWBirthData from './HWBirthData';


// const Drawer = createDrawerNavigator();

// export default function HWDashboard() {
//   return (
//       <Drawer.Navigator initialRouteName="HWDash">
      

// <Drawer.Screen
//   name="HWBirth"
//   component={HWBirth}
//   options={{
//     drawerLabel: 'Dashboard',
//     drawerIcon: ({ color, size }) => (
//       <Image
//         source={require('../../assets/home.png')}
//         style={{ tintColor: color, width: size, height: size }}
//       />
// ),
// }}
// />
       
//         <Drawer.Screen
//           name="AddBirthRecord"
//           component={HWAddBirth}
//           options={{
//             drawerLabel: 'Add Birth Record',
//             drawerIcon: ({ color, size }) => (
//               <Image
//         source={require('../../assets/certificate.png')}
//         style={{ tintColor: color, width: size, height: size }}
//       />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="AddVaccineRecord"
//           component={HWAddVaccine}
//           options={{
//             drawerLabel: 'Add Vaccine Record',
//             drawerIcon: ({ color, size }) => (
//               <Image
//               source={require('../../assets/syringe.png')}
//               style={{ tintColor: color, width: size, height: size }}
//             />
//             ),
//           }}
//         />
//          <Drawer.Screen
//           name="  "
//           component={HWVaccineD}
//           options={{
//             drawerLabel: 'Vaccine Records',
//             drawerIcon: ({ color, size }) => (
//               <Image
//               source={require('../../assets/certificate.png')}
//               style={{ tintColor: color, width: size, height: size }}
//             />
//             ),
//           }}
//         />
//          <Drawer.Screen
//           name="    "
//           component={HWBirthData}
//           options={{
//             drawerLabel: 'Birth Records',
//             drawerIcon: ({ color, size }) => (
//               <Image
//               source={require('../../assets/baby.png')}
//               style={{ tintColor: color, width: size, height: size }}
//             />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="HWSetting"
//           component={HWSetting}
//           options={{
//             drawerLabel: 'Settings',
//             drawerIcon: ({ color, size }) => (
//               <Image
//         source={require('../../assets/gear.png')}
//         style={{ tintColor: color, width: size, height: size }}
//       />
//             ),
//           }}
//         />
//       </Drawer.Navigator>
//   );
// }



// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import HWVaccine from './HWVaccine';
// import HWSetting from './HWSetting';
// import HWBirth from './HWBirth';

// const Tab = createBottomTabNavigator();

// export default function HWDashboard() {
//   return (
//     <Tab.Navigator
//       initialRouteName="HWBirth"
//       screenOptions={{
//         activeTintColor: '#e91e63',
//       }}
//     >
//       <Tab.Screen
//         name="HWBirth"
//         component={HWBirth}
//         options={{headerShown: false,
//           tabBarLabel: 'Birth',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account-details" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="HWVaccine"
//         component={HWVaccine}
//         options={{headerShown: false,
//           tabBarLabel: 'Vaccine',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account-supervisor" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="HWSetting"
//         component={HWSetting}
//         options={{headerShown: false,
//           tabBarLabel: 'Settings',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }