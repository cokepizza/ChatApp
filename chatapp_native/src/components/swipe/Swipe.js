import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import DeckContainer from '../../containers/swipe/DeckContainer';

const screenWidth = Dimensions.get('window').width;

const SwipeBlock = styled.SafeAreaView`
    flex: 1;
`;

const DeckBlock = styled.View`
    position: relative;
`;

const Swipe = () => {

    return (
        <SwipeBlock>
            <DeckBlock>
                <DeckContainer />
            </DeckBlock>
        </SwipeBlock>
    );
};

export default Swipe;