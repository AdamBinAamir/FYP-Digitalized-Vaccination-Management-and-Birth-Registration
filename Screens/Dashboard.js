import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feedback from './Feedback';
import Details from './Details';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator
      initialRouteName="SignUp"
      screenOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Details"
        component={Details}
        options={{headerShown: false,
          tabBarLabel: 'Details',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-details" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Feedback"
        component={Feedback}
        options={{headerShown: false,
          tabBarLabel: 'Feedback',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-supervisor" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false,
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}