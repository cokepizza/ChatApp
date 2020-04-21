import React from 'react';
import { Dimensions, Animated } from 'react-native';
import styled from 'styled-components/native';

import LikeIcon from '../../assets/images/Like.png';
import NopeIcon from '../../assets/images/Nope.png';

const screen_width = Dimensions.get('window').width;
const cardSize = screen_width * 0.9;

const CardBlock = styled.View`
    /* flex: 1; */
    position: relative;
    height: 500px;
    width: ${cardSize}px;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.3);
`;

const CardImageBlock = styled.Image`
    width: ${cardSize-1}px;
    height: ${cardSize-1}px;
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
                    <Animated.View style={[getRightTagStyle(), { position: 'absolute', left: 0 }]}>
                        <TagImageBlock source={NopeIcon}/>
                    </Animated.View>
                    <Animated.View style={[getLeftTagStyle(), { position: 'absolute', left:cardSize-100}]}>
                        <TagImageBlock source={LikeIcon}/>
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