import React, { useCallback } from 'react';
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
                console.log('onPanResponderMove');
                position.setValue({ x: gestureState.dx, y: gestureState.dy })
            },
            onPanResponderRelease: (e, gestureState) => {
                console.log('onPanResponderRelease');
                if(gestureState.dx > swipeThreshold) {
                    swipeRight();
                } else if(gestureState.dx < -swipeThreshold) {
                    swipeLeft();
                } else {
                    resetPosition();
                }
            },
        })
    );

    const getDynamicStyle = () => {
        const rotate = position.x.interpolate({
            inputRange: [-screenWidth * 1.5, 0, screenWidth * 1.5],
            outRange: ['-120deg', '0deg', '120deg'],
        });
        
        return {
            ...position.getLayout(),
            transform: [{ rotate }],
        };
    }

    const resetPosition = useCallback(() => {
        Animated.spring(position, {
            toValue: { x: 0, y: 0 }
        }).start();
    }, []);

    const forceSwipe = useCallback(({ x, y }) => {
        Animated.timing(position, {
            toValue: { x, y },
            duration: 250
        }).start(() => {
            console.log('swipe end');
        });
    });

    const swipeRight = useCallback(() => {
        forceSwipe({ x: screenWidth, y: 0 });
    }, [forceSwipe]);

    const swipeLeft = useCallback(() => {
        forceSwipe({ x: -screenWidth, y: 0 });
    }, [forceSwipe]);

    return (
        <Deck
            DATA={DATA}
            position={position}
            panResponder={panResponder}
            getDynamicStyle={getDynamicStyle}
        />
    );
};

export default DeckContainer;