import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DashboardScreen from '../screens/DashboardScreen';
import RobotStackNavigator from './RobotStackNavigator';
import SensoresScreen from '../screens/SensoresScreen';
import EntregasScreen from '../screens/EntregasScreen';
import UserStackNavigator from './UserStackNavigator';
import { AuthContext } from '../context/AuthContext';

/**
 * Bottom tab navigator for the core application features.  The user
 * management tab is only visible to administrators.  Icons are provided via
 * Ionicons to visually differentiate each tab.  Header bars are hidden to
 * avoid nested headers from stacked navigators.
 */
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { userData } = React.useContext(AuthContext);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Dashboard':
              iconName = 'speedometer';
              break;
            case 'Robôs':
              iconName = 'hardware-chip';
              break;
            case 'Sensores':
              iconName = 'analytics';
              break;
            case 'Entregas':
              iconName = 'cube';
              break;
            case 'Usuários':
              iconName = 'people';
              break;
            default:
              iconName = 'ellipse';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2c3e50',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Robôs" component={RobotStackNavigator} />
      <Tab.Screen name="Sensores" component={SensoresScreen} />
      <Tab.Screen name="Entregas" component={EntregasScreen} />
      {userData?.tipoUsuario === 'ADMIN' && (
        <Tab.Screen name="Usuários" component={UserStackNavigator} />
      )}
    </Tab.Navigator>
  );
};

export default TabNavigator;