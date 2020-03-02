import React from 'react';
import styled from 'styled-components/native';;
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// import AuthScreen from './AuthCheck';
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import TalkScreen from './screens/TalkScreen';
import LikeScreen from './screens/LikeScreen';
import ChatScreen from './screens/ChatScreen';
import SettingScreen from './screens/SettingScreen';

import HomeIcon from './assets/images/home.png';
import HomeFocusedIcon from './assets/images/home_focused.png';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ImageBlock = styled.Image`
    width: 20px;
    height: 20px;
`;

const AuthNavigator = () => (
  <Stack.Navigator>
      <Stack.Screen name='Auth' component={AuthScreen} />
  </Stack.Navigator>
);

// const MainNavigator = () => (
//   <Tab.Navigator>
//       <Tab.Screen name='Home' component={HomeScreen}/>
//       <Tab.Screen name='Talk' component={TalkScreen}/>
//       <Tab.Screen name='Like' component={LikeScreen}/>
//       <Tab.Screen name='Chat' component={ChatScreen}/>
//       <Tab.Screen name='Setting' component={SettingScreen}/>
//   </Tab.Navigator>
// )

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Talk' component={TalkScreen}/>
        <Tab.Screen name='Like' component={LikeScreen}/>
        <Tab.Screen name='Chat' component={ChatScreen}/>
        <Tab.Screen name='Setting' component={SettingScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
