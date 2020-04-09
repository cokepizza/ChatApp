import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FeedContainer from '../containers/feed/FeedContainer';
import PostContainer from '../containers/feed/PostContainer';
import FeedHeaderContainer from '../containers/feed/FeedHeaderContainer';

const Stack = createStackNavigator();

const FeedNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName='Feed'>
            <Stack.Screen
                name='Feed'
                component={FeedContainer}
                options={{
                    gestureEnabled: false,
                    header: props => (
                        <FeedHeaderContainer
                            left='가입취소'
                            center='회원가입'
                            leftNav='AuthSignIn'
                            {...props}
                        />
                    )
                }}
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