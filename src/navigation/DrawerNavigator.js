import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import ProfileScreen from '../screens/ProfileScreen';

/**
 * The drawer navigator provides a side menu with access to the main tab
 * navigation and the user profile.  Additional items can be added here
 * later if needed (e.g. settings).
 */
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    {/*
      The main application area is rendered as a bottom tab navigator.  We hide
      its header to avoid nested headers from the stack navigators inside.
    */}
    <Drawer.Screen
      name="Home"
      component={TabNavigator}
      options={{ headerShown: false, title: 'Início' }}
    />
    <Drawer.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ title: 'Perfil' }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;