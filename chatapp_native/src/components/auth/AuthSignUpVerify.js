import React from 'react';
import styled from 'styled-components/native';

import SubHeaderContainer from '../../containers/common/SubHeaderContainer';

const AuthSignUpVerifyBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
    align-items: center;
`;

const AuthSignUpVerify = () => {
    return (
        <AuthSignUpVerifyBlock>
            <SubHeaderContainer
                title='본인 인증'
                index={2}
                total={3}
            />
        </AuthSignUpVerifyBlock>
    );
};

export default AuthSignUpVerify;