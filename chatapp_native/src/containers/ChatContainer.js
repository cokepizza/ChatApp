import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Chat from '../components/Chat';
import { plus } from '../modules/chat';

const ChatContainer = () => {
    const { num } = useSelector(({ chat }) => ({
        num: chat.num,
    }));

    const dispatch = useDispatch();

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