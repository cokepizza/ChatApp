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

const SendButtonFrameBlock = styled.TouchableOpacity``;

const SendButtonBlock = styled.View`
    width: 150px;
    height: 100px;
    background: pink;
`;

const Message = React.memo(({ message }) => 
    (
        <MessageFrameBlock>
            <MessageBlock>
                {message}
            </MessageBlock>
        </MessageFrameBlock>
    )
);

const Chat = ({
    message,
    messages,
    onClick,
    onChangeText,
    flatListRef,
    onContentSizeChange,
}) => {

    return (
        <ChatBlock>
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