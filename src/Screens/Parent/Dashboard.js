import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Image, View, Text } from 'react-native';
import Details from './Details';
import Vaccinerecord from './vaccinerecord';
import Setting from './Setting';
import ParentDashboard from './ParentDashboard';
import vaccinerecord from './vaccinerecord';
import ChildData from './ChildData';
import FutureVaccine from './FutureVaccine';

const Drawer = createDrawerNavigator();

const CustomDrawerHeader = () => {
  return (
    <View style={{ flexDirection: 'column', alignItems: 'center', margin: '5%' }}>
      <Image source={require('../../assets/user.png')} style={{ width: 100, height: 100  }} />
      <View>      
        <Text style={{ fontSize: 18, fontWeight: 'bold',marginTop:10 }}>Parent</Text>
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

export default function Dashboard({ route }) {
  const { userEmail } = route.params;
  console.log(userEmail);
  return (
    <Drawer.Navigator
      initialRouteName="ParentDashboard"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name=" "
        component={ParentDashboard}
        initialParams={{ itemId: userEmail }}
        options={{
          drawerLabel: 'Dashboard',
          drawerIcon: ({ color, size }) => (
            <Image source={require('../../assets/home.png')} style={{ tintColor: color, width: size, height: size }} />
          ),
        }}
      />
      <Drawer.Screen
        name="  "
        component={ChildData}
        initialParams={{ itemId: userEmail }}
        options={{
          drawerLabel: 'Children Data',
          drawerIcon: ({ color, size }) => (
            <Image source={require('../../assets/certificate.png')} style={{ tintColor: color, width: size, height: size }} />
          ),
        }}
      />
      <Drawer.Screen
        name="   "
        component={vaccinerecord}
        initialParams={{ itemId: userEmail }}
        options={{
          drawerLabel: 'Vaccine Data',
          drawerIcon: ({ color, size }) => (
            <Image source={require('../../assets/syringe.png')} style={{ tintColor: color, width: size, height: size }} />
          ),
        }}
      />
      <Drawer.Screen
          name="              "
          component={FutureVaccine}
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
        name="    "
        component={Setting}
        initialParams={{ itemId: userEmail }}
        options={{
          drawerLabel: 'Settings',
          drawerIcon: ({ color, size }) => (
            <Image source={require('../../assets/gear.png')} style={{ tintColor: color, width: size, height: size }} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}



// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Details from './Details';
// import Vaccinerecord from './vaccinerecord';
// import Setting from './Setting';
// import { Image } from 'react-native';
// import ParentDashboard from './ParentDashboard';


// const Drawer = createDrawerNavigator();

// export default function Dashboard() {
//   return (
//       <Drawer.Navigator initialRouteName="ParentDashboard">
//         <Drawer.Screen
//           name="ParentDashboard"
//           component={ParentDashboard}
//           options={{
//             drawerLabel: 'Dashboard',
//             drawerIcon: ({ color, size }) => (
//               <Image
//                 source={require('../../assets/home.png')}
//                 style={{ tintColor: color, width: size, height: size }}
//               />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="Details"
//           component={Details}
//           options={{
//             drawerLabel: 'Details',
//             drawerIcon: ({ color, size }) => (
//               <Image
//                 source={require('../../assets/certificate.png')}
//                 style={{ tintColor: color, width: size, height: size }}
//               />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="Vaccinerecord"
//           component={Vaccinerecord}
//           options={{
//             drawerLabel: 'Vaccine',
//             drawerIcon: ({ color, size }) => (
//               <Image
//                 source={require('../../assets/syringe.png')}
//                 style={{ tintColor: color, width: size, height: size }}
//               />
//             ),
//           }}
//         />
        
//         <Drawer.Screen
//           name="Setting"
//           component={Setting}
//           options={{
//             drawerLabel: 'Settings',
//             drawerIcon: ({ color, size }) => (
//               <Image
//                 source={require('../../assets/gear.png')}
//                 style={{ tintColor: color, width: size, height: size }}
//               />
//             ),
//           }}
//         />
//       </Drawer.Navigator>
//   );
// }


// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import Feedback from './Feedback';
// import Details from './Details';
// import Setting from './Setting';
// import Vaccinerecord from './vaccinerecord';

// const Tab = createBottomTabNavigator();

// export default function Dashboard() {
//   return (
//     <Tab.Navigator
//       initialRouteName="SignUp"
//       screenOptions={{
//         activeTintColor: '#e91e63',
//       }}
//     >
//       <Tab.Screen
//         name="Details"
//         component={Details}
//         options={{headerShown: false,
//           tabBarLabel: 'Details',
//           tabBarIcon: ({ color, size }) => (
//             <Icon name={'home'} color={color} size={size} />
//           ),
//         }}
//       />
//       {/* <Tab.Screen
//         name="Details"
//         component={Details}
//         options={{headerShown: false,
//           tabBarLabel: 'Details',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account-details" color={color} size={size} />
//           ),
//         }}
//       /> */}
//        <Tab.Screen
//         name="Vaccinerecord"
//         component={Vaccinerecord}
//         options={{headerShown: false,
//           tabBarLabel: 'Vaccinerecord',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account-details" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Feedback"
//         component={Feedback}
//         options={{headerShown: false,
//           tabBarLabel: 'Feedback',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account-supervisor" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Setting"
//         component={Setting}
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