import React from 'react';
import styled from 'styled-components/native';;
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AuthCheck from './AuthCheck';
import Login from './AuthScreen';
import HomeTab from './HomeScreen';
import TalkTab from './TalkScreen';
import LikeTab from './LikeScreen';
import ChatTab from './ChatScreen';
import SettingTab from './SettingScreen';

import HomeIcon from '../assets/images/home.png';
import HomeFocusedIcon from '../assets/images/home_focused.png';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ImageBlock = styled.Image`
    width: 20px;
    height: 20px;
`;

const LoginNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
);

const MainNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeTab}/>
        <Tab.Screen name='Talk' component={TalkTab}/>
        <Tab.Screen name='Like' component={LikeTab}/>
        <Tab.Screen name='Chat' component={Chat}/>
        <Tab.Screen name='Setting' component={SettingTab}/>
    </Tab.Navigator>
)

// const MainNavigator = createBottomTabNavigator({
//     Home: {
//         screen: HomeTab,
//         navigationOptions: {
//             tabBarIcon: ({ focused }) => (
//                 <ImageBlock
//                     source={
//                         focused
//                             ? HomeFocusedIcon
//                             : HomeIcon
//                     }
//                 />
//             ),
//             tabBarOptions: {
//                 showLabel: false,
//             }
//         }
//     },
//     Talk: {
//         screen: TalkTab,
//         navigationOptions: {
//             tabBarIcon: ({ focused }) => (
//                 <ImageBlock
//                     source={
//                         focused
//                             ? HomeFocusedIcon
//                             : HomeIcon
//                     }
//                 />
//             ),
//             tabBarOptions: {
//                 showLabel: false,
//             }
//         }
//     },
//     Like: {
//         screen: LikeTab,
//         navigationOptions: {
//             tabBarIcon: ({ focused }) => (
//                 <ImageBlock
//                     source={
//                         focused
//                             ? HomeFocusedIcon
//                             : HomeIcon
//                     }
//                 />
//             ),
//             tabBarOptions: {
//                 showLabel: false,
//             }
//         }
//     },
//     Chat: {
//         screen: ChatTab,
//         navigationOptions: {
//             tabBarIcon: ({ focused }) => (
//                 <ImageBlock
//                     source={
//                         focused
//                             ? HomeFocusedIcon
//                             : HomeIcon
//                     }
//                 />
//             ),
//             tabBarOptions: {
//                 showLabel: false,
//             }
//         }
//     },
//     Setting: {
//         screen: SettingTab,
//         navigationOptions: {
//             tabBarIcon: ({ focused }) => (
//                 <ImageBlock
//                     source={
//                         focused
//                             ? HomeFocusedIcon
//                             : HomeIcon
//                     }
//                 />
//             ),
//             tabBarOptions: {
//                 showLabel: false,
//             }
//         }
//     }
// });

export default createAppContainer(AppNavigator);