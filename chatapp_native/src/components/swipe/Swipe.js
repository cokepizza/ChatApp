import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

const SwipeBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
`;

const SquareBlock = styled.View`
    height: 300px;
    width: 300px;
    background: red;
`;

const Swipe = ({ pan, panResponder }) => {

    return (
        <SwipeBlock>
            <Animated.View
                style={{ transform: [{ translateX: pan.x }, { translateY: pan.y }] }}
                {...panResponder.panHandlers}
            >
                <SquareBlock />
            </Animated.View>
        </SwipeBlock>
    );
};

export default Swipe;