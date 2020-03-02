import React from 'react';
import styled from 'styled-components/native';

const ChatBlock = styled.View`
    width: 100px;
    height: 100px;
    background: red;
`;

const ChatTextBlock = styled.Text`
    font-size:50px;
    color: black;
`;

const ChatTouchBlock = styled.TouchableOpacity`

`;

const Chat = ({ num, onClick }) => {

    return (
        <>
            <ChatTouchBlock onPress={onClick}>
                <ChatBlock>
                    <ChatTextBlock>
                        {num}
                    </ChatTextBlock>
                </ChatBlock>
            </ChatTouchBlock>
        </>
    );
};

export default Chat;