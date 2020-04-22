import React from 'react';
import styled from 'styled-components/native';

import DeckContainer from '../../containers/swipe/DeckContainer';

const SwipeBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
`;

const ButtonBundleBlock = styled.View`
    flex: 1;
`;

const DeckView = styled.View`
    position: relative;
`;

const Swipe = () => {

    return (
        <SwipeBlock>
            <DeckContainer />
            {/* <ButtonBundleBlock>

            </ButtonBundleBlock> */}
        </SwipeBlock>
    );
};

export default Swipe;