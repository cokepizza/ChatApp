import React from 'react';
import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';

import AuthCheck from './AuthCheck';

const AppNavigator = createSwitchNavigator(
    {
        AuthCheck,
    },
    {
        initialRouteName: 'AuthCheck',
    }
)

export default createAppContainer(AppNavigator);