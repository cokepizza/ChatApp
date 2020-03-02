import React from 'react';
import styled from 'styled-components/native';

const ChatBlock = styled.View`
    width: 100px;
    height: 100px;
    background: red;
`;

const Chat = () => {
    return (
        <>
            <ChatBlock />
        </>
    );
};

export default Chat;