import React, { useCallback, useState, useRef } from 'react';
import { Animated, PanResponder, Dimensions } from 'react-native';

import Deck from '../../components/swipe/Deck';

const DATA = [
    { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
    { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
    { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
    { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
    { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
    { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
    { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
    { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  ];
  
const screenWidth = Dimensions.get('window').width;
const swipeThreshold = screenWidth * 0.2;

const DeckContainer = () => {
    const position = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (e, gestureState) => {
                position.setValue({ x: gestureState.dx, y: gestureState.dy })
            },
            onPanResponderRelease: (e, gestureState) => {
                if(gestureState.dx > swipeThreshold) {
                    forceSwipe('right');
                } else if(gestureState.dx < -swipeThreshold) {
                    forceSwipe('left');
                } else {
                    resetPosition();
                }
            },
        })
    ).current;

    const [ cardIndex, setCardIndex ] = useState(0);

    const getDynamicStyle = useCallback(() => {
        const rotate = position.x.interpolate({
            inputRange: [-screenWidth * 1.5, 0, screenWidth * 1.5],
            outputRange: ['-120deg', '0deg', '120deg'],
        });
        
        return {
            ...position.getLayout(),
            transform: [{ rotate }],
        };
    }, []);

    const getNextCardStyle = useCallback(() => {
        const rotate = position.x.interpolate({
            inputRange: [-screenWidth * 0.3, -screenWidth * 0.1, 0, screenWidth * 0.1, screenWidth * 0.3],
            outputRange: [0, 20, 0, 20, 0],
        });

        return {
            top: rotate,
        }
    }, []);

    const getRightTagStyle = useCallback(() => {
        const rotate = position.x.interpolate({
            inputRange: [-screenWidth * 0.5, 0, screenWidth * 0.5],
            outputRange: [1, 0, 0],
        });

        // return {
        //     opacity: rotate,
        // }
        return {
            
        }
    }, []);

    const getLeftTagStyle = useCallback(() => {
        const rotate = position.x.interpolate({
            inputRange: [-screenWidth * 0.5, 0, screenWidth * 0.5],
            outputRange: [0, 0, 1],
        });

        // return {
        //     opacity: rotate,
        // }
        return {
           
        }
    }, []);

    const resetPosition = useCallback(() => {
        Animated.spring(position, {
            toValue: { x: 0, y: 0 }
        }).start();
    }, []);

    const forceSwipe = useCallback(direction => {
        const x = direction === 'right' ? screenWidth : -screenWidth;
        Animated.timing(position, {
            toValue: { x, y: 0 },
            duration: 250
        }).start(() => swipeComplete(direction));
    });

    const swipeComplete = useCallback(direction => {
        direction === 'right' ? onSwipeRight() : onSwipeLeft();
        position.setValue({ x : 0, y : 0 });
        setCardIndex(prevState => prevState + 1);
    }, []);
    
    const onSwipeRight = useCallback(() => {

    }, []);

    const onSwipeLeft = useCallback(() => {

    }, []);

    return (
        <Deck
            data={DATA}
            cardIndex={cardIndex}
            panResponder={panResponder}
            getDynamicStyle={getDynamicStyle}
            getRightTagStyle={getRightTagStyle}
            getLeftTagStyle={getLeftTagStyle}
            getNextCardStyle={getNextCardStyle}
        />
    );
};

export default DeckContainer;