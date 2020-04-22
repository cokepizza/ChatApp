import React from 'react';
import { Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';

import CardContainer from '../../containers/swipe/CardContainer';

const screenWidth = Dimensions.get('window').width;

const DeckBlock = styled.View`
    position: relative;
`;

const Deck = ({
    data,
    cardIndex,
    panResponder,
    getDynamicStyle,
    getRightTagStyle,
    getLeftTagStyle,
    getNextCardStyle
}) => {
    const deckArr = data.map((item, itemIndex) => {
        if(itemIndex < cardIndex) {
            return null;
        }
        else if(itemIndex === cardIndex) {
            return (
                <Animated.View
                    key={item.id}
                    style={[getDynamicStyle(), { position: 'absolute', width: screenWidth, alignItems: 'center', zIndex: 10 }]}
                    {...panResponder.panHandlers}
                >
                    <CardContainer
                        item={item}
                        getRightTagStyle={getRightTagStyle}
                        getLeftTagStyle={getLeftTagStyle}
                    />
                </Animated.View>
            )
        } else {
            return (
                <Animated.View
                    key={item.id}
                    style={[getNextCardStyle(), { position: 'absolute', width: screenWidth, alignItems: 'center', zIndex: 1 }]}
                >
                    <CardContainer
                        item={item}
                    />
                </Animated.View>
                
            )
        }
        
    }).reverse();

    return (
        <DeckBlock>
            {deckArr}
        </DeckBlock>
    );
};

export default Deck;