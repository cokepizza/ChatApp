import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const AuthCheckBlock = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: white;
`;

const AuthCheck = () => {
    return (
        <AuthCheckBlock>
            <ActivityIndicator color="black" size="large" />
        </AuthCheckBlock>
    );
};

export default AuthCheck;