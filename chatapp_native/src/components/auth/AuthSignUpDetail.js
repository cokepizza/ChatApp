import React from 'react';
import styled from 'styled-components/native';

import UploadImageContainer from '../../containers/auth/UploadImageContainer';

const AuthSignUpDetailBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
`;

const AuthSignUpDetail = () => {
    return (
        <AuthSignUpDetailBlock>
            <UploadImageContainer />
        </AuthSignUpDetailBlock>
    );
};

export default AuthSignUpDetail;