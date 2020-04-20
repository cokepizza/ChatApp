import React from 'react';
import { Animated } from 'react-native';

const Deck = ({ data, cardIndex, screenWidth, position, panResponder, getDynamicStyle }) => {
    const deckArr = data.map((item, itemIndex) => (
        <Animated.View
            key={item.id}
            style={[getDynamicStyle(), { position: 'absolute', width: screenWidth, zIndex: 10 }]}
            {...panResponder.panHandlers}
        >

        </Animated.View>
    ));

    return (
        <>
            {deckArr}
        </>
    );
};

export default Deck;