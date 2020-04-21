import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const screen_width = Dimensions.get('window').width;
const cardSize = screen_width * 0.9;

const CardBlock = styled.View`
    /* flex: 1; */
    height: 500px;
    width: ${cardSize}px;
    background: white;
`;

const CardImageBlock = styled.Image`
    width: ${cardSize}px;
    height: ${cardSize}px;
`;

const CardTextFrameBlock = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const CardTextBlock = styled.Text`
    font-size: 15px;
`;

const Card = ({ item }) => {
    
    return (
        <CardBlock>
            <CardImageBlock
                source={{ uri: item.uri }}
            />
            <CardTextFrameBlock>
                <CardTextBlock>
                    {item.text}
                </CardTextBlock>
            </CardTextFrameBlock>
        </CardBlock>
    );
};

export default Card;