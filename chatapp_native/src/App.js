import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';;
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './screens/AuthNavigator';
import MainNavigator from './screens/MainNavigator';

import HomeIcon from './assets/images/home.png';
import HomeFocusedIcon from './assets/images/home_focused.png';

const ImageBlock = styled.Image`
    width: 20px;
    height: 20px;
`;

const Stack = createStackNavigator();

const App = () => {
  const { user, loading } = useSelector(({ auth }) => ({
    user: auth.user,
    loading: auth.loading,
  }));

  //  render instantly
  const transitionSpec = {
    open: {
      config: {
        duration: 0,
      }
    },
    close: {
      config: {
        duration: 0,
      }
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode='none'
      >
        {user ? (
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{
              transitionSpec,
            }}
          />
        )
        : (
          <Stack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{
              transitionSpec,
            }}
          />
          // <Stack.Screen
          //   name="Main"
          //   component={MainNavigator}
          //   options={{
          //     transitionSpec,
          //   }}
          // />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
