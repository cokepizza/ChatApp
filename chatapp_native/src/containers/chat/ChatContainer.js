import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import Chat from '../../components/chat/Chat';
import {
    connectWebsocket,
    disconnectWebsocket,
    sendMessage,
    setMessage,
    clearMessage,
} from '../../modules/chat';

const ChatContainer = () => {
    const { message, messages } = useSelector(({ chat }) => ({
        message: chat.message,
        messages: chat.messages,
    }));

    const dispatch = useDispatch();

    useFocusEffect(useCallback(() => {
        console.log('connect');
        dispatch(connectWebsocket());
        return () => {
            console.log('disconnect');
            dispatch(disconnectWebsocket());
        };
    }, [dispatch]));

    const onPress = useCallback(e => {
        dispatch(sendMessage({
            message,
        }));
        dispatch(clearMessage());
    }, [dispatch, message]);

    const onChangeText = useCallback(message => {
        dispatch(setMessage({
            message,
        }))
    }, [dispatch]);

    return (
        <Chat
            message={message}
            messages={messages}
            onPress={onPress}
            onChangeText={onChangeText}
        />
    );
};

export default ChatContainer;