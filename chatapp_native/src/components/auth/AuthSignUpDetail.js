import React from 'react';
import styled from 'styled-components/native';

import SubHeaderContainer from '../../containers/common/SubHeaderContainer';
import AuthImageContainer from '../../containers/auth/AuthImageContainer';
import ProfileContainer from '../../containers/auth/ProfileContainer';
import ModalContainer from '../../containers/common/ModalContainer';

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
    position: relative;
    background: white;
    align-items: center;
`;

const AuthSignUpScrollViewBlock = styled.ScrollView`
    width: 100%;
`;

const AuthSignUpDetail = ({ onPressSubmit, scrollRef }) => {
    return (
        <AuthSignUpDetailBlock>
            <AuthSignUpScrollViewBlock
                ref={scrollRef}
                horizontal={false}
                // scrollEnabled={!modal}
                keyboardShouldPersistTaps='always'
            >
                <SubHeaderContainer
                    title='Profile'
                    index={3}
                    total={3}
                />
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
            </AuthSignUpScrollViewBlock>
            <ModalContainer />
        </AuthSignUpDetailBlock>
    );
};

export default React.memo(AuthSignUpDetail);