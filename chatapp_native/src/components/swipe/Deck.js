import React from 'react';
import { Animated, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

import CardContainer from '../../containers/swipe/CardContainer';

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
        console.log(itemIndex);
        console.log(cardIndex);
        console.log(itemIndex < cardIndex);
        console.log('---------------');
        if(itemIndex < cardIndex) {
            return null;
        }
        else if(itemIndex === cardIndex) {
            return (
                <Animated.View
                    key={item.id}
                    style={[getDynamicStyle(), { position: 'absolute', width: screenWidth, zIndex: 10 }]}
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
                    style={[getNextCardStyle(), { position: 'absolute', width: screenWidth, zIndex: 1 }]}
                >
                    <CardContainer
                        item={item}
                    />
                </Animated.View>
                
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