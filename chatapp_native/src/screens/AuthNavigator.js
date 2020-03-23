import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import AuthCheckContainer from '../containers/auth/AuthCheckContainer';
import AuthSignInContainer from '../containers/auth/AuthSignInContainer';
import AuthSignUpContainer from '../containers/auth/AuthSignUpContainer';
import AuthSignUpDetailContainer from '../containers/auth/AuthSignUpDetailContainer';
import HeaderContainer from '../containers/common/HeaderContainer';

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
            name='AuthSignUp'
            component={AuthSignUpContainer}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='AuthSignUpDetail'
            component={AuthSignUpDetailContainer}
            options={{
              header: props => (
                <HeaderContainer {...props} />
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