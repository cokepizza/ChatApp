import React from 'react';
import styled from 'styled-components/native';

import AuthImageContainer from '../../containers/auth/AuthImageContainer';
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

const AuthSignUpScrollView = styled.ScrollView`
    width: 100%;
`;

const AuthSignUpDetail = ({ onPressSubmit }) => {
    return (
        <AuthSignUpDetailBlock>
            <AuthSignUpScrollView horizontal={false}>
                <AuthImageContainer />
                <ProfileContainer />
                <SubmitTouchBlock onPress={onPressSubmit}>
                    <SubmitTextBlock>
                        Submit
                    </SubmitTextBlock>
                </SubmitTouchBlock>
            </AuthSignUpScrollView>
        </AuthSignUpDetailBlock>
    );
};

export default AuthSignUpDetail;