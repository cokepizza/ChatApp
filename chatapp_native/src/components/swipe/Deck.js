import React from 'react';
import { Animated } from 'react-native';

import CardContainer from '../../containers/swipe/CardContainer';
import Card from '../../components/swipe/Card';

const Deck = ({ data, cardIndex, screenWidth, position, panResponder, getDynamicStyle }) => {
    const deckArr = data.map((item, itemIndex) => (
        <Animated.View
            key={item.id}
            style={[getDynamicStyle(), { position: 'absolute', width: screenWidth, zIndex: 10 }]}
            {...panResponder.panHandlers}
        >
            <Card item={item} />
        </Animated.View>
    ));

    return (
        <>
            {deckArr}
        </>
    );
};

export default Deck;