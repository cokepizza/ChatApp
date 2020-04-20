import React, { useRef, useEffect } from 'react';
import { Animated, PanResponder } from 'react-native';
import Swipe from '../../components/swipe/Swipe';

const SwipeContainer = () => {
    // const pan = useRef(new Animated.ValueXY()).current;
    // const panResponder = useRef(
    //     PanResponder.create({
    //         // onMoveShouldSetPanResponderCapture: () => true,
    //         onStartShouldSetPanResponder: () => true,
    //         onPanResponderGrant: () => {
    //             pan.setOffset({
    //                 x: pan.x._value,
    //                 y: pan.y._value,
    //             });
    //         },
    //         // onPanResponderMove: Animated.event([
    //         //     null,
    //         //     { dx: pan.x, dy: pan.y }
    //         // ]),
    //         onPanResponderMove: (e, gestureState) => {
    //             console.log('onPanResponderMove');
    //             Animated.event([
    //                 null,
    //                 { dx: pan.x, dy: pan.y }
    //             ])(e, gestureState);
    //         },
    //         onPanResponderRelease: () => {
    //             pan.flattenOffset();
    //         }
    //     })
    // ).current;

    // useEffect(() => {
    //     Animated.timing(animation, {
    //         toValue: 1,
    //         duration: 20000,
    //     }).start();
    // })

    return (
        <Swipe />
    );
};

export default SwipeContainer;