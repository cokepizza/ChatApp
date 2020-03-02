import React from 'react';
import styled from 'styled-components/native';
import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AuthCheck from './AuthCheck';
import Login from './Login';
import HomeTab from './HomeTab';
import TalkTab from './TalkTab';
import LikeTab from './LikeTab';
import ChatTab from './ChatTab';
import SettingTab from './SettingTab';

import HomeIcon from '../assets/images/home.png';
import HomeFocusedIcon from '../assets/images/home_focused.png';

const ImageBlock = styled.Image`
    width: 20px;
    height: 20px;
`;

const LoginNavigator = createStackNavigator({
    Login,
});

const MainNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeTab,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <ImageBlock
                    source={
                        focused
                            ? HomeFocusedIcon
                            : HomeIcon
                    }
                />
            ),
            tabBarOptions: {
                showLabel: false,
            }
        }
    },
    Talk: {
        screen: TalkTab,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <ImageBlock
                    source={
                        focused
                            ? HomeFocusedIcon
                            : HomeIcon
                    }
                />
            ),
            tabBarOptions: {
                showLabel: false,
            }
        }
    },
    Like: {
        screen: LikeTab,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <ImageBlock
                    source={
                        focused
                            ? HomeFocusedIcon
                            : HomeIcon
                    }
                />
            ),
            tabBarOptions: {
                showLabel: false,
            }
        }
    },
    Chat: {
        screen: ChatTab,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <ImageBlock
                    source={
                        focused
                            ? HomeFocusedIcon
                            : HomeIcon
                    }
                />
            ),
            tabBarOptions: {
                showLabel: false,
            }
        }
    },
    Setting: {
        screen: SettingTab,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <ImageBlock
                    source={
                        focused
                            ? HomeFocusedIcon
                            : HomeIcon
                    }
                />
            ),
            tabBarOptions: {
                showLabel: false,
            }
        }
    }
});

const AppNavigator = createSwitchNavigator(
    {
        AuthCheck,
        LoginNavigator,
        MainNavigator,
    },
    {
        initialRouteName: 'AuthCheck',
    }
)

export default createAppContainer(AppNavigator);