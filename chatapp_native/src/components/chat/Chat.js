import React from 'react';
import { FlatList } from 'react-native';
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

const MessageFrameBlock = styled.View`
    width:100px;
    height: 30px;
    background: yellow;
`;

const MessageBlock = styled.Text`
    font-size: 12px;
`

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



const Chat = ({ message, messages, onClick, onChangeText }) => {

    return (
        <ChatBlock>
            <FlatList
                data={messages}
                keyExtractor={(item, index) => {
                    return `message_${index}`;
                }}
                renderItem={({ item }) => { console.log(item); return (
                    <MessageFrameBlock>
                        <MessageBlock>
                            {item}
                        </MessageBlock>
                    </MessageFrameBlock>
                )}}
            />
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