import React from 'react';
import { useSelector } from 'react-redux';
import Animated, { Easing } from 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';

import AuthCheckScreen from './AuthCheckScreen';
import AuthSignIn from './AuthSignInScreen';

const Stack = createStackNavigator();
const AuthNavigator = () => {
  const { check } = useSelector(({ auth }) => ({
    check: auth.check,
  }));

  // const optionConfig = {
  //   transitionSpec: {
  //     duration: 0,
  //     timing: Animated.timing,
  //     easing: Easing.step0,
  //   },  
  // }
  const forFade = ({ current, closing }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  // options={{ cardStyleInterpolator: forFade }}
  return (
    <Stack.Navigator
      headerMode='none'
      // mode='modal'
    >
      {check ? (
        <Stack.Screen
          name='AuthSignIn'
          component={AuthSignIn}
          options={{
            transitionSpec: {
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
            }
          }}
        />
      ) : (
        <Stack.Screen name='AuthCheck' component={AuthCheckScreen} />
      )}
    </Stack.Navigator>
  )
};

export default AuthNavigator;