import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

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

const CardRightTagBlock = styled.View``;
const CardLeftTagBlock = styled.View``;

const Card = ({ item, getRightTagStyle ,getLeftTagStyle }) => {
    
    return (
        <CardBlock>
            <CardImageBlock
                source={{ uri: item.uri }}
            />
            <CardRightTagBlock style={getRightTagStyle ? getRightTagStyle(): null}>
                <CardTextBlock>
                    Yes
                </CardTextBlock>
            </CardRightTagBlock>
            <CardLeftTagBlock style={getLeftTagStyle ? getLeftTagStyle(): null}>
                <CardTextBlock>
                    No
                </CardTextBlock>
            </CardLeftTagBlock>
            <CardTextFrameBlock>
                <CardTextBlock>
                    {item.text}
                </CardTextBlock>
            </CardTextFrameBlock>
        </CardBlock>
    );
};

export default Card;