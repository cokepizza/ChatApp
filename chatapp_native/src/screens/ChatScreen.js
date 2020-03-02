import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import ChatContainer from '../containers/ChatContainer';
import { connectWebsocket, disconnectWebsocket } from '../modules/chat';

const ChatScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    useFocusEffect(useCallback(() => {
        console.log('connect');
        dispatch(connectWebsocket());
        return () => {
            console.log('disconnect');
            dispatch(disconnectWebsocket());
        };
    }, [dispatch]));

    return (
        <ChatContainer />
    );
};

export default ChatScreen;