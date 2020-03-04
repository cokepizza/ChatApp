import React from 'react';
import { FlatList, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const ChatBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
`;

const MessageListBlock = styled.View`
    /* height: 300px; */
    flex:1;
`;


const MessageViewBlock = styled.View`
    height: 30px;
    background: yellow;
    border: 1px solid black;
`;

const MessageTextBlock = styled.Text`
    font-size: 12px;
`

const SendBlock = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100%;
`;

const SendTouchBlock = styled.TouchableOpacity`
    height: 100%;
    width: 30px;
    background: pink;
`;

const MessageInputBlock = styled.TextInput`
    width: 200px;
    height: 30px;
    background: green;
`;

const Message = React.memo(({ message }) => 
    (
        <MessageViewBlock>
            <MessageTextBlock>
                {message}
            </MessageTextBlock>
        </MessageViewBlock>
    )
);

const Chat = ({
    message,
    messages,
    onPress,
    onChangeText,
    flatListRef,
    onContentSizeChange,
}) => {

    return (
        <ChatBlock>
            <MessageListBlock>
                <FlatList
                    ref={flatListRef}
                    data={messages}
                    keyExtractor={(item, index) => `message_${index}`}
                    showsVerticalScrollIndicator={false}
                    onContentSizeChange={onContentSizeChange}
                    renderItem={({ item }) => (
                        <Message message={item} />
                    )}
                />
            </MessageListBlock>
            <SendBlock>
                <MessageInputBlock
                    value={message}
                    onChangeText={onChangeText}
                />
                <SendTouchBlock onPress={onPress} />
            </SendBlock>
        </ChatBlock>
    );
};

export default Chat;