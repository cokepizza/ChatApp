import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled, { css } from 'styled-components/native';

import SubHeaderContainer from '../../containers/common/SubHeaderContainer';
import CheckBeforeIcon from '../../assets/images/check_before.png';
import CheckAfterIcon from '../../assets/images/check_after.png';
import ErrorIcon from '../../assets/images/error.png';

const AuthSignUpVerifyBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
    align-items: center;
`;

const WarningBlock = styled.View`
    width: 100%;
    height: 60px;
    padding-left: 20px;
    padding-right: 20px;
`;

const ImageBlock = styled.Image`
    width: 18px;
    height: 18px;
    opacity: 0.8;
`;

const InputOuterFrameBlock = styled.View`
    padding-left: 24px;
    padding-right: 24px;

    ${props => props.marginTop && css`
        margin-top: 30px;
    `}
`;

const InputInnerFrameBlock = styled.View`
    flex-direction: row;
    width: 100%;
    height: 40px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.2);
    align-items: center;
`;

const InputBlock = styled.TextInput`
    flex: 1;
    height: 40px;
    margin-left: 10px;
    color: rgba(0, 0, 0, 0.7);
`;

const TextBlock = styled.Text`
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 5px;

    ${props => props.title && css`
        font-size: 15px;
    `}
`;

const RedWarningBlock = styled.View`
    width: 100%;
    height: 40px;
    padding-left: 54px;
    padding-right: 54px;
    margin-top: 5px;
`;

const RedTextBlock = styled.Text`
    font-size: 13px;
    color: rgba(220, 20, 60, 0.8);
    margin-bottom: 10px;
`;

const PurpleTextBlock = styled.Text`
    font-size: 13px;
    color: rgba(123, 104, 238, 0.8);
    margin-bottom: 10px;
`;

const SubmitTouchBlock = styled.TouchableOpacity`
    height: 30px;
    width: 90px;
    padding: 5px;
    align-items: center;
    border-radius: 5px;
    justify-content: center;
    background: rgba(123, 104, 238, 0.8);

    ${props => props.flag && css`
        border: 1px solid rgba(123, 104, 238, 0.8);
        background: white;
    `}

    ${props => props.invalid && css`
        background: rgba(0, 0, 0, 0.05);
    `}
`;

const SubmitTextBlock = styled.Text`
    font-size: 13px;
    color: white;

    ${props => props.flag && css`
        color: rgba(123, 104, 238, 0.8);
    `}

    ${props => props.invalid && css`
        color: rgba(0, 0, 0, 0.2);
    `}
`;

const TextInputForm = React.memo(({
    inputRef,
    index,
    validation,
    value,
    flag,
    loading,
    error,
    mention,
    nextMention,
    onPress,
    ...rest
}) => {
    return (
        <InputInnerFrameBlock>
            {error ? (
                <ImageBlock source={ErrorIcon} />
            ) : (
                validation ? (
                    <ImageBlock source={CheckAfterIcon} />
                ) : (
                    <ImageBlock source={CheckBeforeIcon} />
                )
            )}
            <InputBlock
                ref={ref => inputRef.current[index] = ref}
                autoCapitalize='none'
                autoCorrect={false}
                allowFontScaling={false}
                placeholderTextColor='rgba(0, 0, 0, 0.5)'
                value={value}
                {...rest}
            />
            <SubmitTouchBlock
                onPress={onPress}
                disabled={!validation}
                invalid={!validation}
                flag={loading || flag}
            >
                {loading ? (
                    <ActivityIndicator color='rgba(123, 104, 238, 0.8)'/>
                ) : (
                    <SubmitTextBlock
                        flag={flag}
                        invalid={!validation}
                    >
                        {flag ? nextMention : mention}
                    </SubmitTextBlock>
                )}
            </SubmitTouchBlock>
        </InputInnerFrameBlock>
    )
});

const AuthSignUpVerify = ({
    inputRef,
    focused,
    timeLimit,
    createSMSInput,
    createSMSFlag,
    createSMSLoading,
    createSMSError,
    verificationTokenInput,
    verificationTokenLoading,
    verificationTokenError,
    validation,
    onChangeText,
    onPressSubmit,
    onPressVerify,
    onFocusVerify,
}) => {
    let minute = parseInt(timeLimit / 60);
    let second = parseInt(timeLimit % 60);
    if(minute < 10) {
        minute = '0' + minute;
    }
    if(second < 10) {
        second = '0' + second;
    }
    const time = minute + ":" + second;

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
                <TextBlock title={1}>
                    휴대폰 번호
                </TextBlock>
                <TextInputForm
                    inputRef={inputRef}
                    index={0}
                    validation={validation.createSMSInput}
                    flag={createSMSFlag && !createSMSError}
                    error={createSMSError}
                    loading={createSMSLoading}
                    mention='인증번호 전송'
                    nextMention='재전송'
                    value={createSMSInput}
                    onFocus={() => onFocus(0)}
                    onChangeText={text => onChangeText('createSMSInput', text)}
                    onPress={onPressSubmit}
                    keyboardType='number-pad'
                />
            </InputOuterFrameBlock>
            {createSMSError && (
                <RedWarningBlock>
                    <RedTextBlock>
                        {createSMSError}
                    </RedTextBlock>
                </RedWarningBlock>
            )}
            {createSMSFlag && !createSMSError && (
                <>
                    <InputOuterFrameBlock marginTop={1}>
                        <TextBlock title={1}>
                            인증번호
                        </TextBlock>
                        <TextInputForm
                            inputRef={inputRef}
                            index={1}
                            validation={validation.verificationTokenInput}
                            loading={verificationTokenLoading}
                            error={verificationTokenError}
                            mention='인증하기'
                            nextMention='인증하기'
                            value={verificationTokenInput}
                            onChangeText={text => onChangeText('verificationTokenInput', text)}
                            onPress={onPressVerify}
                            onFocus={onFocusVerify}
                            keyboardType='number-pad'
                        />
                    </InputOuterFrameBlock>
                    <RedWarningBlock>
                        {verificationTokenError ? (
                            <RedTextBlock>
                                {verificationTokenError}
                            </RedTextBlock>
                        ) : (
                                !!timeLimit && (
                                    <PurpleTextBlock>
                                        인증번호 유효시간 {time}
                                    </PurpleTextBlock>
                                )
                        )}
                    </RedWarningBlock>
                </>
            )}
        </AuthSignUpVerifyBlock>
    );
};

export default AuthSignUpVerify;