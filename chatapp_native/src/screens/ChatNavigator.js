import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListContainer from '../containers/chat/ListConainer';
import ChatContainer from '../containers/chat/ChatContainer';

const Stack = createStackNavigator();

const ChatNavigator = ({ navigation, route }) => {
    // if(route.state && route.state.routeNames[route.state.index] === 'Chat') {
    let title;
    if(route.state && route.state.index > 0) {
        navigation.setOptions({ tabBarVisible: false });

        const index = route.state.index;
        const { name } = route.state.routes[index].params;
        title = name;
    } else {
        navigation.setOptions({ tabBarVisible: true });
    }

    return (
        <Stack.Navigator initialRouteName='List'>
            <Stack.Screen
                name='List'
                component={ListContainer}
            />
            <Stack.Screen
                name='Chat'
                component={ChatContainer}
                options={{
                    title
                }}
            />
        </Stack.Navigator>
    );
};

export default ChatNavigator;