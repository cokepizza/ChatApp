import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import AuthCheckContainer from '../containers/auth/AuthCheckContainer';
import AuthSignInContainer from '../containers/auth/AuthSignInContainer';
import AuthHeaderContainer from '../containers/auth/AuthHeaderContainer';
import AuthSignUpBaseContainer from '../containers/auth/AuthSignUpBaseContainer';
import AuthSignUpDetailContainer from '../containers/auth/AuthSignUpDetailContainer';
import AuthSignUpVerifyContainer from '../containers/auth/AuthSignUpVerifyContainer';

const Stack = createStackNavigator();
const AuthNavigator = () => {
  const { check } = useSelector(({ auth }) => ({
    check: auth.check,
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
    <Stack.Navigator
      headerMode='screen'
      headerStyle={{ height: 60 }}
    >
      {check ? (
        <>
          <Stack.Screen
            name='AuthSignIn'
            component={AuthSignInContainer}
            options={{
              transitionSpec,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='AuthSignUpBase'
            component={AuthSignUpBaseContainer}
            options={{
              gestureEnabled: false,
              header: props => (
                <AuthHeaderContainer
                  left='가입취소'
                  center='회원가입'
                  leftNav='AuthSignIn'
                  {...props}
                />
              )
            }}
          />
          <Stack.Screen
            name='AuthSignUpVerify'
            component={AuthSignUpVerifyContainer}
            options={{
              gestureEnabled: false,
              header: props => (
                <AuthHeaderContainer
                  left='가입취소'
                  center='회원가입'
                  leftNav='AuthSignIn'
                  {...props}
                />
              )
            }}
          />
          <Stack.Screen
            name='AuthSignUpDetail'
            component={AuthSignUpDetailContainer}
            options={{
              gestureEnabled: false,
              header: props => (
                <AuthHeaderContainer
                  left='가입취소'
                  center='회원가입'
                  leftNav='AuthSignIn'
                  {...props}
                />
              )
            }}
            // options={{
            //   headerTitle: props => (
            //     <ShadowHeader {...props}/>
            //   )
            // }}
            // options={{
            //   headerStyle:{
            //     backgroundColor: 'red'
            //   }
            // }}
          />
        </>
      ) : (
        <Stack.Screen
          name='AuthCheck'
          component={AuthCheckContainer}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  )
};

export default AuthNavigator;