import React from 'react';
import styled, { css } from 'styled-components/native';
import { FlatList, Dimensions } from 'react-native';

const numColumns = 3;
const imageSize = Dimensions.get('window').width / 3;

const FeedBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
`;

const ImageFrameBlock = styled.TouchableOpacity`
    padding-left: ${index % 3 === 0 ? 0 : 1}px;
    padding-right: ${indx % 3 === 2 ? 0 : 1}px;
`;

const ImageBlock = styled.Image`
    width: ${imageSize}px;
    height: ${imageSize}px;
`;

const Feed = ({
    list,
    loading,
    onRefresh,
    onEndReached,
    onScroll,
    onPress,
}) => {

    return (
        <FeedBlock>
            <FlatList
                data={list}
                // style={{ width: Dimensions.get('window').width }}
                // style={{ flex: 1 }}
                style={{ width: '100%' }}
                keyExtractor={(item, index) => `feed_${item.name}`}
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}
                bounces={true}
                numColumns={numColumns}
                onRefresh={onRefresh}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.5}
                refreshing={loading}
                onScroll={onScroll}
                scrollEventThrottle={400}
                renderItem={({ item, index }) => (
                    <ImageFrameBlock
                        index={index}
                        onPress={() => onPress(item.id)}
                    >
                        <ImageBlock
                            source={{ uri: item.uri }}
                        />
                    </ImageFrameBlock>
                )}
            />
        </FeedBlock>
    );
};

export default Feed;