import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FeedContainer from '../containers/feed/FeedContainer';
import PostContainer from '../containers/feed/PostContainer';

const Stack = createStackNavigator();

const FeedNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName='Feed'>
            <Stack.Screen
                name='Feed'
                component={FeedContainer}
            />
            <Stack.Screen
                name='Post'
                component={PostContainer}
                // options={{
                //     title
                // }}
            />
        </Stack.Navigator>
    )
}

export default FeedNavigator;