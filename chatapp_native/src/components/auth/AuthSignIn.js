import React from 'react';
import styled from 'styled-components/native';

const AuthSignInBlock = styled.View`
    flex: 1;
    background: red;
`;

const InputBlock = styled.TextInput`
    width: 100px;
    height: 30px;
    background: blue;

    /* & + & {
        margin-top: 10;
    } */
    &:hover {
        background: green;
    }
`;

const AuthSignIn = () => {
    return (
        <AuthSignInBlock>
            <InputBlock />
            <InputBlock />
        </AuthSignInBlock>
    );
};

export default AuthSignIn;