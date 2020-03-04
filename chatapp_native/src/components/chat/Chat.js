import React from 'react';
import styled from 'styled-components/native';

const ChatBlock = styled.View`
    flex: 1;
    background: white;
`;

const ChatTextInputBlock = styled.TextInput`
    width: 200px;
    height: 30px;
    background: green;
`;

const ChatTextBlock = styled.Text`
    font-size:50px;
    color: black;
`;

const SendButtonFrameBlock = styled.TouchableOpacity``;

const SendButtonBlock = styled.View`
    width: 150px;
    height: 100px;
    background: pink;
`;



const Chat = ({ num, message, onClick, onChangeText }) => {

    return (
        <ChatBlock>
            <ChatTextBlock>
                {num}
            </ChatTextBlock>
            <ChatTextInputBlock
                value={message}
                onChangeText={onChangeText}
            />
            <SendButtonFrameBlock
                onPress={onClick}
            >
                <SendButtonBlock />
            </SendButtonFrameBlock>
        </ChatBlock>
    );
};

export default Chat;