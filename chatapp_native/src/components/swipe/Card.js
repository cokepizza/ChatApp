import React from 'react';
import { Dimensions, Animated } from 'react-native';
import styled from 'styled-components/native';

import LikeIcon from '../../assets/images/like.png';
import NopeIcon from '../../assets/images/nope.png';

const screenWidth = Dimensions.get('window').width;
// const cardSize = screen_width - 10;

const CardBlock = styled.View`
    position: relative;
    height: 500px;
    width: ${screenWidth}px;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 10px;
`;

const CardImageBlock = styled.Image`
    width: ${screenWidth-1}px;
    height: ${screenWidth-1}px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const CardTextFrameBlock = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const CardTextBlock = styled.Text`
    font-size: 15px;
`;

const TagImageBlock = styled.Image`
    width: 100px;
    height: 50px;
`;

const Card = ({ item, getRightTagStyle ,getLeftTagStyle }) => {
    return (
        <CardBlock>
            <CardImageBlock
                source={{ uri: item.uri }}
            />
            {getRightTagStyle && getLeftTagStyle && (
                <>
                    <Animated.View style={[getRightTagStyle(), { position: 'absolute', top: 20, left: 10 }]}>
                        <TagImageBlock source={LikeIcon} style={{ transform: [{ rotate: '-20deg' }] }}/>
                    </Animated.View>
                    <Animated.View style={[getLeftTagStyle(), { position: 'absolute', top: 20, left:screenWidth-110}]}>
                        <TagImageBlock source={NopeIcon} style={{ transform: [{ rotate: '20deg' }] }}/>
                    </Animated.View>
                </>
            )}
            <CardTextFrameBlock>
                <CardTextBlock>
                    {item.text}
                </CardTextBlock>
            </CardTextFrameBlock>
        </CardBlock>
    );
};

export default Card;