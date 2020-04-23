import React from 'react';
import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

const frameMargin = 24;
const sideMargin = 40;
const imageMargin = 5;
const screenWidth = Dimensions.get('window').width;
const cardSize = screenWidth - frameMargin - sideMargin;
const pieceSize = sideMargin - imageMargin * 3;
const xDiff = frameMargin + imageMargin + cardSize - pieceSize;

const ScrollViewFrameBlock = styled.View``;

const IntroduceScrollViewBlock = styled.ScrollView``;

const PhotoFrameBlock = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

const PhotoTouchBlock = styled.TouchableWithoutFeedback``;

const PhotoImageBlock = styled.Image`
    width: ${cardSize}px;
    height: ${cardSize}px;
    border-radius: 10px;
    margin: ${imageMargin}px;
`;

const DotFrameBlock = styled.View`
    margin-top: 10px;
    justify-content: center;
    flex-direction: row;
`;

const DotBlock = styled.View`
    width: 6px;
    height: 6px;
    border-radius: 25px;
    background: rgba(0, 0, 0, 0.2);

    ${props => props.checked && css`
        background: rgba(0, 0, 0, 0.4);
    `}
`;

const HorizontalScroll = ({
    items,
    itemIndex,
    onScroll,
}) => {
    return (
        <>
            <ScrollViewFrameBlock>
                <IntroduceScrollViewBlock
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onScroll={event => {
                        onScroll({
                            index: Math.round(event.nativeEvent.contentOffset.x / xDiff),
                        });
                    }}
                >
                    <PhotoFrameBlock
                        style={{ marginLeft: 24, marginRight: 24 }}
                    >
                        {items.map((item, index) => (
                            <PhotoTouchBlock key={`introduceItemImage_${index}`}>
                                <PhotoImageBlock
                                    source={{ uri: item.uri }}
                                />
                            </PhotoTouchBlock>
                        ))}
                    </PhotoFrameBlock>
                </IntroduceScrollViewBlock>
            </ScrollViewFrameBlock>
            <DotFrameBlock>
                {items.map((item, index) => (
                    <DotBlock
                        key={`introduceItemDot_${index}`}
                        style={{ marginRight: index < items.length-1 ? 6 : 0 }}
                        checked={itemIndex === index}
                    />
                ))}
            </DotFrameBlock>
        </>
    );
};

export default HorizontalScroll;