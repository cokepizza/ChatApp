import React from 'react';
import styled from 'styled-components/native';

import AuthImageContainer from '../../containers/auth/AuthImageContainer';
import ProfileContainer from '../../containers/auth/ProfileContainer';

const MarginBlock = styled.View`
    height: 30px;
`;

const SubmitFrameBlock = styled.View`
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    height: 40px;
    justify-content: center;
    align-items: center;
`;

const SubmitTouchBlock = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
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
            <AuthSignUpScrollView
                horizontal={false}
                keyboardShouldPersistTaps='always'
            >
                <AuthImageContainer />
                <MarginBlock />
                <ProfileContainer />
                <SubmitFrameBlock>
                    <SubmitTouchBlock onPress={onPressSubmit}>
                        <SubmitTextBlock>
                            Submit
                        </SubmitTextBlock>
                    </SubmitTouchBlock>
                </SubmitFrameBlock>
            </AuthSignUpScrollView>
        </AuthSignUpDetailBlock>
    );
};

export default AuthSignUpDetail;