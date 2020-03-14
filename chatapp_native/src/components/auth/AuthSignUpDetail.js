import React from 'react';
import styled from 'styled-components/native';

import UploadImageContainer from '../../containers/auth/UploadImageContainer';
import ProfileContainer from '../../containers/auth/ProfileContainer';

const SubmitTouchBlock = styled.TouchableOpacity`
    width: 90%;
    height: 40px;
    background: green;
    justify-content: center;
    align-items: center;
`;

const SubmitTextBlock = styled.Text``;

const AuthSignUpDetailBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
    align-items: center;
`;

const AuthSignUpDetail = ({ onPressSubmit }) => {
    return (
        <AuthSignUpDetailBlock>
            <UploadImageContainer />
            <ProfileContainer />
            <SubmitTouchBlock onPress={onPressSubmit}>
                <SubmitTextBlock>
                    Submit
                </SubmitTextBlock>
            </SubmitTouchBlock>
        </AuthSignUpDetailBlock>
    );
};

export default AuthSignUpDetail;