import React from 'react';
import styled, { css } from 'styled-components/native';

const HeaderSafeBlock = styled.SafeAreaView`
    background: white;

    ${props => props.modal && css`
        opacity: 0.9;
        background: rgba(0, 0, 0, 0.3);
    `}
`;


const HeaderBlock = styled.View`
    width: 100%;
    height: 45px;
`;

const HeaderText = styled.Text``;

const Header = ({ modal }) => {

    return (
        <HeaderSafeBlock modal={modal}>
            <HeaderBlock>
                <HeaderText>
                    {'hahaha'}
                </HeaderText>
            </HeaderBlock>
        </HeaderSafeBlock>
    );
};

export default Header;