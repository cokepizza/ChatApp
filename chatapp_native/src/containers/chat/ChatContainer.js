import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import Chat from '../../components/chat/Chat';
import {
    connectWebsocket,
    disconnectWebsocket,
    sendMessage,
    setMessage,
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

    const onClick = useCallback(e => {
        dispatch(sendMessage({
            message,
        }));
    }, [dispatch, message]);

    const onChangeText = useCallback(message => {
        dispatch(setMessage({
            message,
        }))
    }, [dispatch]);

    useEffect(() => {
        console.log(messages);
    }, [messages]);
    
    return (
        <Chat
            num={num}
            message={message}
            onClick={onClick}
            onChangeText={onChangeText}
        />
    );
};

export default ChatContainer;