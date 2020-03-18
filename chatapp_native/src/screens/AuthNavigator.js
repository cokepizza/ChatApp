import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import AuthCheckContainer from '../containers/auth/AuthCheckContainer';
import AuthSignInContainer from '../containers/auth/AuthSignInContainer';
import AuthSignUpContainer from '../containers/auth/AuthSignUpContainer';
import AuthSignUpDetailContainer from '../containers/auth/AuthSignUpDetailContainer';
import Header from '../components/common/Header';

const Stack = createStackNavigator();
const AuthNavigator = () => {
  const { check, modal } = useSelector(({ auth, profile }) => ({
    check: auth.check,
    modal: profile.modal,
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
            // options={{
            //   headerTitle: props => (
            //     <ShadowHeader {...props}/>
            //   )
            // }}
            options={{
              header: props => (
                <Header modal={modal} {...props} />
              )
            }}
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