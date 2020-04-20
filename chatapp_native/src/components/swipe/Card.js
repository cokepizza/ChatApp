import React from 'react';
import styled from 'styled-components/native';

const CardBlock = styled.View`
    /* flex: 1; */
    height: 500px;
    width: 300px;
    background: red;
`;

const CardTextBlock = styled.Text``;

const Card = ({ item }) => {
    
    return (
        <CardBlock>
            <CardTextBlock>
                {item.uri}
            </CardTextBlock>
            <CardTextBlock>
                {item.text}
            </CardTextBlock>
        </CardBlock>
    );
};

export default Card;