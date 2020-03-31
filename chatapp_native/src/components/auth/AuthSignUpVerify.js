import React from 'react';
import styled from 'styled-components/native';

import SubHeaderContainer from '../../containers/common/SubHeaderContainer';
import CheckBeforeIcon from '../../assets/images/check_before.png';
import CheckAfterIcon from '../../assets/images/check_after.png';

const AuthSignUpVerifyBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
    align-items: center;
`;

const WarningBlock = styled.View`
    width: 100%;
    height: 80px;
    padding-left: 20px;
    padding-right: 20px;
`;

// const TextBlock = styled.Text`
//     font-size: 13px;
//     color: rgba(0, 0, 0, 0.5);
// `;

const ImageBlock = styled.Image`
    width: 20px;
    height: 20px;
`;

const InputOuterFrameBlock = styled.View`
    flex: 1;
    padding-left: 20px;
    padding-right: 20px;
`;

const InputInnerFrameBlock = styled.View`
    flex-direction: row;
    width: 100%;
    height: 40px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.5);
    align-items: center;
`;

const InputBlock = styled.TextInput`
    flex: 1;
    height: 40px;
    margin-left: 10px;
`;

const TextBlock = styled.Text`
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
`;

const SubmitTouchBlock = styled.TouchableOpacity`
    height: 30px;
    width: 90px;
    padding: 5px;
    align-items: center;
    border-radius: 5px;
    justify-content: center;
    background:  rgba(123, 104, 238, 0.8);
`;

const SubmitTextBlock = styled.Text`
    font-size: 13px;
    color: white;
`;

const TextInputForm = React.memo(({ validation, value, onPressSubmit, ...rest }) => {
    return (
        <InputInnerFrameBlock>
            {validation ? (
                <ImageBlock source={CheckAfterIcon} />
            ) : (
                <ImageBlock source={CheckBeforeIcon} />
            )}
            <InputBlock
                 autoCapitalize='none'
                 autoCorrect={false}
                 allowFontScaling={false}
                 placeholderTextColor='rgba(0, 0, 0, 0.5)'
                 value={value}
                 {...rest}
            />
            <SubmitTouchBlock onPress={onPressSubmit}>
                <SubmitTextBlock>
                    인증번호 전송
                </SubmitTextBlock>
            </SubmitTouchBlock>
        </InputInnerFrameBlock>
    )
});

const AuthSignUpVerify = ({ value, onChangeText, onPressSubmit }) => {
    return (
        <AuthSignUpVerifyBlock>
            <SubHeaderContainer
                title='본인 인증'
                index={2}
                total={3}
            />
            <WarningBlock>
                <TextBlock>
                    허위/중복 가입을 막기 위한 절차이며,
                </TextBlock>
                <TextBlock>
                    휴대폰번호는 절대 외부에 공개되지 않습니다.
                </TextBlock>
            </WarningBlock>
            <InputOuterFrameBlock>
                <TextBlock>
                    휴대폰 번호
                </TextBlock>
                <TextInputForm
                    validation={false}
                    value={value}
                    onChangeText={text => onChangeText(text)}
                    onPressSubmit={onPressSubmit}
                />
            </InputOuterFrameBlock>
        </AuthSignUpVerifyBlock>
    );
};

export default AuthSignUpVerify;