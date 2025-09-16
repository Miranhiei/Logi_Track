import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserManagementScreen from '../screens/UserManagementScreen';
import EditUserScreen from '../screens/EditUserScreen';
import RegisterUserScreen from '../screens/RegisterUserScreen';

/**
 * Stack navigator for user management.  Allows administrators to list users,
 * edit existing users or register new users.  Access to this stack should be
 * restricted via the TabNavigator depending on the current user's role.
 */
const Stack = createNativeStackNavigator();

const UserStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="UserManagement"
      component={UserManagementScreen}
      options={{ title: 'Usuários' }}
    />
    <Stack.Screen
      name="EditUser"
      component={EditUserScreen}
      options={{ title: 'Editar Usuário' }}
    />
    <Stack.Screen
      name="RegisterUser"
      component={RegisterUserScreen}
      options={{ title: 'Cadastrar Usuário' }}
    />
  </Stack.Navigator>
);

export default UserStackNavigator;