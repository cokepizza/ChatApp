import React from 'react';
import styled from 'styled-components/native';

import HorizontalScrollContainer from '../../containers/introduce/HorizontalScrollContainer';

const IntroduceBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
`;

const SelectionBlock = styled.Image`
    flex: 1;
`;

const RecommandationBlock = styled.View`

`;

const OptionBlock = styled.View`
    flex-direction: row;
`;

const Introduce = () => {
    return (
        <IntroduceBlock>
            <HorizontalScrollContainer />
            <SelectionBlock>

            </SelectionBlock>
        </IntroduceBlock>
    );
};

export default Introduce;