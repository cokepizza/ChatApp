import React from 'react';
import styled, { css } from 'styled-components/native';

const ShadowHeaderSafeBlock = styled.SafeAreaView`
    background: white;

    ${props => props.modal && css`
        opacity: 0.9;
        background: rgba(0, 0, 0, 0.3);
    `}
`;

const ShadowHeaderBlock = styled.View`
    width: 100%;
    height: 45px;
    
    /* background: white; */
    /* height: 80px; */
`;
const HeaderText = styled.Text``;

const ShadowHeader = ({ children }) => {
    console.log(children);

    return (
        <ShadowHeaderSafeBlock>
            <ShadowHeaderBlock>
                <HeaderText>
                    {'hahaha'}
                </HeaderText>
            </ShadowHeaderBlock>
        </ShadowHeaderSafeBlock>
    );
};

export default ShadowHeader;