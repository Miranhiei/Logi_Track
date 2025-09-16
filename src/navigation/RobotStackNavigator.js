import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RobotListScreen from '../screens/RobotListScreen';
import RobotDetailScreen from '../screens/RobotDetailScreen';

/**
 * Stack navigator for robot related screens.  Presents a list of robots and
 * allows navigation to a detail view for a selected robot.
 */
const Stack = createNativeStackNavigator();

const RobotStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="RobotList"
      component={RobotListScreen}
      options={{ title: 'Robôs' }}
    />
    <Stack.Screen
      name="RobotDetail"
      component={RobotDetailScreen}
      options={{ title: 'Detalhes do Robô' }}
    />
  </Stack.Navigator>
);

export default RobotStackNavigator;