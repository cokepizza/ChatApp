import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Chat from '../components/Chat';
import {
    plus,
} from '../modules/chat';

const ChatContainer = () => {
    const { num } = useSelector(({ chat }) => ({
        num: chat.num,
    }));

    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log('connect');
    //     dispatch(connectWebsocket());
    // }, [dispatch]);

    // useEffect(() => {
    //     return () => {
    //         console.log('disconnect');
    //         dispatch(disconnectWebsocket());
    //     }
    // }, [dispatch]);

    const onClick = () => {
        dispatch(plus());
    };
    
    return (
        <Chat
            num={num}
            onClick={onClick}
        />
    );
};

export default ChatContainer;