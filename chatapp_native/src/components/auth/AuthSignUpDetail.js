import React from 'react';
import styled, { css } from 'styled-components/native';

import SubHeaderContainer from '../../containers/common/SubHeaderContainer';
import AuthImageContainer from '../../containers/auth/AuthImageContainer';
import ProfileContainer from '../../containers/auth/ProfileContainer';
import ModalContainer from '../../containers/common/ModalContainer';

const AuthSignUpDetailBlock = styled.SafeAreaView`
    flex: 1;
    /* position: relative; */
    background: white;
    align-items: center;
`;

const AuthSignUpScrollViewBlock = styled.ScrollView`
    width: 100%;
`;

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

const TextBlock = styled.Text`
    font-size: 11px;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 5px;
    padding-left: 20px;
    padding-right: 20px;
    
    ${props => props.title && css`
        font-size: 15px;
    `}
`;

const BottomViewBlock = styled.View`
    padding-left: 24px;
    padding-right: 24px;
    /* 전체높이 - 상태표시줄 -아이폰X 바텀바 -navigation 헤더 -서브헤더 -바디컴포넌트 높이*/
    
    height: 40px;
    justify-content: flex-end;
    padding-bottom: 30px;
`;

const ButtonTouchBlock = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: rgba(123, 104, 238, 0.8);
    ${props => props.disabled && css`
        background: rgba(0, 0, 0, 0.05);
    `}
`;

const ButtonTextBlock = styled.Text`
    font-size: 15px;
    color: white;

    ${props => props.disabled && css`
        color: rgba(0, 0, 0, 0.2);
    `}
`;

const AuthSignUpDetail = ({ scrollRef, mention, onPressSubmit }) => {
    return (
        <AuthSignUpDetailBlock>
            <SubHeaderContainer
                title='프로필 작성'
                index={3}
                total={3}
            />
            <AuthSignUpScrollViewBlock
                ref={scrollRef}
                horizontal={false}
                // scrollEnabled={!modal}
                keyboardShouldPersistTaps='always'
            >
                <TextBlock title={1}>
                    사진
                </TextBlock>
                {mention && (
                    <TextBlock style={{ marginLeft: 5 }}>
                        {mention}
                    </TextBlock>
                )}

                <AuthImageContainer />
                <MarginBlock />
                <ProfileContainer scrollRef={scrollRef} />
                <BottomViewBlock>
                    <ButtonTouchBlock
                        // disabled={inValidSignUp}
                        disabled={true}
                        onPress={onPressSubmit}
                    >
                        <ButtonTextBlock
                            // disabled={inValidSignUp}
                            disabled={true}
                        >
                            계정 생성하기
                        </ButtonTextBlock>
                    </ButtonTouchBlock>
                </BottomViewBlock>
                {/* <SubmitFrameBlock>
                    <SubmitTouchBlock onPress={onPressSubmit}>
                        <SubmitTextBlock>
                            Submit
                        </SubmitTextBlock>
                    </SubmitTouchBlock>
                </SubmitFrameBlock> */}
            </AuthSignUpScrollViewBlock>
            <ModalContainer />
        </AuthSignUpDetailBlock>
    );
};

export default React.memo(AuthSignUpDetail);