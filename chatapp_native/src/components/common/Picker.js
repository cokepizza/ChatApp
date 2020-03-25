import React from 'react';
import styled from 'styled-components/native';

const PickerBlock = styled.View`
    /* position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.5); */
`;

const Picker = () => {
    return (
        <PickerBlock />
    );
};

export default Picker;