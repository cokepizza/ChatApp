import React from 'react';
import styled from 'styled-components/native';

const AuthSignInBlock = styled.View`
    flex: 1;
    background: white;
`;

const InputBlock = styled.TextInput`
    width: 100px;
    height: 30px;
    background: blue;
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