import React, { useCallback, useState, useRef } from 'react';
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
    const flatListRef = useRef();

    const [ init, setInit ] = useState(false);

    useFocusEffect(useCallback(() => {
        console.log('connect');
        dispatch(connectWebsocket());
        setTimeout(() => {
            flatListRef.current.scrollToEnd({ animated: false });
            setTimeout(() => {
                setInit(true);
            }, 0);
        }, 200);
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

    const onContentSizeChange = useCallback(() => {
        if(init) {
            flatListRef.current.scrollToEnd();
        }
    }, [init]);

    return (
        <Chat
            message={message}
            messages={messages}
            onPress={onPress}
            onChangeText={onChangeText}
            flatListRef={flatListRef}
            onContentSizeChange={onContentSizeChange}
        />
    );
};

export default ChatContainer;