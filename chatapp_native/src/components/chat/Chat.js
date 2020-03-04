import React from 'react';
import { FlatList, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const ChatBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
`;

const ChatTextInputBlock = styled.TextInput`
    width: 200px;
    height: 30px;
    background: green;
`;

const MessageListFrameBlock = styled.View`
    /* height: 300px; */
    flex:1;
`;

const MessageFrameBlock = styled.View`
    width: 100%;
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
    onPress,
    onChangeText,
    flatListRef,
    onContentSizeChange,
}) => {

    return (
        <ChatBlock>
            <MessageListFrameBlock>
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
            </MessageListFrameBlock>
            <ChatTextInputBlock
                value={message}
                onChangeText={onChangeText}
            />
            <SendButtonFrameBlock
                onPress={onPress}
            >
                <SendButtonBlock />
            </SendButtonFrameBlock>
        </ChatBlock>
    );
};

export default Chat;