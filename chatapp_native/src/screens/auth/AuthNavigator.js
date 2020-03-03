import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthCheckScreen from './AuthCheckScreen';

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator>
      <Stack.Screen name='AuthCheckScreen' component={AuthCheckScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;