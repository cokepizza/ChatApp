import React from 'react';
import { Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const screenWidth = Dimensions.get('window').width;

import CardContainer from '../../containers/swipe/CardContainer';

const DeckView = styled.View`
    position: absolute;
    width: ${screenWidth}px;
    z-index: 1;
`;

const Deck = ({ data, cardIndex, position, panResponder, getDynamicStyle }) => {
    const deckArr = data.map((item, itemIndex) => {
        console.log(itemIndex);
        console.log(cardIndex);
        console.log(itemIndex < cardIndex);
        console.log('---------------');
        if(itemIndex < cardIndex) {
            console.log('other~');
            return null;
        }
        else if(itemIndex === cardIndex) {
            console.log(`card View: ${itemIndex}`);
            return (
                <Animated.View
                    key={item.id}
                    style={[getDynamicStyle(), { position: 'absolute', width: screenWidth, zIndex: 10 }]}
                    {...panResponder.panHandlers}
                >
                    <CardContainer item={item} />
                </Animated.View>
            )
        } else {
            return (
                <DeckView key={item.id}>
                    <CardContainer item={item} />
                </DeckView>
            )
        }
        
    }).reverse();

    return (
        <>
            {deckArr}
        </>
    );
};

export default Deck;