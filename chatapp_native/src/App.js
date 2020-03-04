import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';;
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './screens/AuthNavigator';
import MainNavigator from './screens/main/MainNavigator';

import HomeIcon from './assets/images/home.png';
import HomeFocusedIcon from './assets/images/home_focused.png';

const ImageBlock = styled.Image`
    width: 20px;
    height: 20px;
`;

const Stack = createStackNavigator();

const App = () => {
  const { auth, loading } = useSelector(({ auth }) => ({
    auth: auth.auth,
    loading: auth.loading,
  }));

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode='none'
      >
        {auth ? (
          <Stack.Screen name="Main" component={MainNavigator} />
        )
        : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
