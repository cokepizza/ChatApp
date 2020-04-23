import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const screenWidth = Dimensions.get('window').width;
const cardSize = screenWidth - 24 - 60;

const ScrollViewFrameBlock = styled.View`
`;

const IntroduceScrollViewBlock = styled.ScrollView`
    margin-left: 24px;
    margin-right: 24px;
`;

const PhotoFrameBlock = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

const PhotoTouchBlock = styled.TouchableWithoutFeedback``;

const PhotoImageBlock = styled.Image`
    width: ${cardSize}px;
    height: ${cardSize}px;
    border-radius: 10px;
    margin: 5px;
`;


const HorizontalScroll = () => {
    return (
        <ScrollViewFrameBlock>
            <IntroduceScrollViewBlock
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
            >
                <PhotoFrameBlock>
                    <PhotoTouchBlock>
                        <PhotoImageBlock
                            source={{ uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' }}
                        />
                    </PhotoTouchBlock>
                    <PhotoTouchBlock>
                        <PhotoImageBlock
                            source={{ uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' }}
                        />
                    </PhotoTouchBlock>
                </PhotoFrameBlock>
            </IntroduceScrollViewBlock>
        </ScrollViewFrameBlock>
    );
};

export default HorizontalScroll;