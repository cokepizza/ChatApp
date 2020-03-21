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

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex: 1;
`;

const AuthSignUpDetailBlock = styled.SafeAreaView`
    flex: 1;
    position: relative;
    background: white;
    align-items: center;
`;

const AuthSignUpDetailBackgroundBlock = styled.View`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 10;
`;

const AuthSignUpScrollView = styled.ScrollView`
    width: 100%;
`;

const AuthSignUpDetail = ({ modal, onPressSubmit, scrollRef }) => {
    return (
        <>
            <KeyboardAvoidingView>
                <AuthSignUpDetailBlock>
                    <AuthSignUpScrollView
                        ref={scrollRef}
                        horizontal={false}
                        keyboardShouldPersistTaps='always'
                    >
                        <AuthImageContainer />
                        <MarginBlock />
                        <ProfileContainer scrollRef={scrollRef} />
                        <SubmitFrameBlock>
                            <SubmitTouchBlock onPress={onPressSubmit}>
                                <SubmitTextBlock>
                                    Submit
                                </SubmitTextBlock>
                            </SubmitTouchBlock>
                        </SubmitFrameBlock>
                    </AuthSignUpScrollView>
                </AuthSignUpDetailBlock>
                {modal &&  <AuthSignUpDetailBackgroundBlock /> }
            </KeyboardAvoidingView>
        </>
    );
};

export default AuthSignUpDetail;