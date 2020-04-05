import React from 'react';
import { Dimensions, ActivityIndicator } from 'react-native';
import styled, { css } from 'styled-components/native';

import SubHeaderContainer from '../../containers/common/SubHeaderContainer';
import CheckBeforeIcon from '../../assets/images/check_before.png';
import CheckAfterIcon from '../../assets/images/check_after.png';
import ErrorIcon from '../../assets/images/error.png';

const AuthSignUpBaseBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
    align-items: center;
`;

// const BodyViewBlock = styled.View`
//     flex: 2;
//     width: 100%;
//     align-items: center;
//     background: white;
// `;

const InputOuterFrameBlock = styled.View`
    padding-left: 24px;
    padding-right: 24px;

    ${props => props.marginTop && css`
        margin-top: 30px;
    `}
`;

const InputFrameBlock = styled.View`
    flex-direction: row;
    width: 100%;
    height: 30px;
    border-bottom-width: 1px;
    opacity: 0.5;
    align-items: center;

    ${props => props.margin && css`
        margin-top: 10px;
    `}

    ${props => props.focused && css`
        opacity: 1;
    `}
`;

const InputBlock = styled.TextInput`
    flex: 1;
    height: 40px;
    margin-left: 10px;
    color: rgba(0, 0, 0, 0.7);
`;

const ImageBlock = styled.Image`
    width: 18px;
    height: 18px;
    opacity: 0.8;
`;

const ButtonTouchBlock = styled.TouchableOpacity`
    width: 90%;
    height: 30px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    /* background: rgba(176, 196, 222, 0.5); */
    background: rgba(123, 104, 238, 0.8);
    margin-top: 20px;

    ${props => props.disabled && css`
        background: rgba(0, 0, 0, 0.05);
        /* background: rgba(176, 196, 222, 0.2); */
    `}
`;

const ButtonTextBlock = styled.Text`
    font-size: 15px;
    color: white;

    ${props => props.disabled && css`
        color: rgba(0, 0, 0, 0.2);
    `}
`;

const CheckBoxFrameBlock = styled.View`
    align-items: center;
    justify-content: center;
    width: ${(parseInt(Dimensions.get('window').width * 0.9) - 30) / 2}px;

    ${props => props.margin && css`
        margin-left: 10px;
    `}
`;

const CheckBoxTouchBlock = styled.TouchableOpacity``;

const CheckBoxTextBlock = styled.Text`
    font-size: 12px;

    ${props => props.gender && css`
        font-size: 15px;
        font-weight: bold;
    `}
`;

const TextBlock = styled.Text`
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 5px;

    ${props => props.title && css`
        font-size: 15px;
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
    plainForm,
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
            {!plainForm && (
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
            )}
        </InputInnerFrameBlock>
    )
});

const AuthSignUpBase = ({
    inputRef,
    username,
    password,
    passwordConfirm,
    gender,
    validation,
    duplicateCheckFlag,
    duplicateCheckLoading,
    duplicateCheckError,
    onChangeText,
    onPressUsername,
    onFocusUsername,
    onPressCheckBox,
    onPressSubmit,
}) => {
    
    let inValidSignUp = false;
    Object.keys(validation).forEach(key => {
        if(!validation[key]) {
            inValidSignUp = true;
        }
    })

    return (
        <AuthSignUpBaseBlock>
            <SubHeaderContainer
                title='계정 생성'
                index={1}
                total={3}
            />
            <InputOuterFrameBlock marginTop={1}>
                <TextBlock title={1}>
                    이메일
                </TextBlock>
                <TextInputForm
                    inputRef={inputRef}
                    index={0}
                    validation={validation.username}
                    flag={duplicateCheckFlag && !duplicateCheckError}
                    error={duplicateCheckError}
                    loading={duplicateCheckLoading}
                    mention='중복검사'
                    nextMention='재검사'
                    onPress={onPressUsername}
                    onFocus={onFocusUsername}
                    value={username}
                    onChangeText={text => onChangeText('username', text)}
                    keyboardType='email-address'
                />
            </InputOuterFrameBlock>
            {duplicateCheckError && (
                <RedWarningBlock>
                    <RedTextBlock>
                        {duplicateCheckError}
                    </RedTextBlock>
                </RedWarningBlock>
            )}
            <InputOuterFrameBlock marginTop={1}>
                <TextBlock title={1}>
                    비밀번호
                </TextBlock>
                <TextInputForm
                    inputRef={inputRef}
                    index={1}
                    validation={validation.password}
                    plainForm={true}
                    error={false}
                    // onFocus={onFocusUsername}
                    value={password}
                    onChangeText={text => onChangeText('password', text)}
                    secureTextEntry
                    textContentType='newPassword'
                    keyboardType='default'
                />
            </InputOuterFrameBlock>
            <InputOuterFrameBlock marginTop={1}>
                <TextBlock title={1}>
                    비밀번호 확인
                </TextBlock>
                <TextInputForm
                    inputRef={inputRef}
                    index={1}
                    validation={validation.passwordConfirm}
                    plainForm={true}
                    error={false}
                    // onFocus={onFocusUsername}
                    value={passwordConfirm}
                    onChangeText={text => onChangeText('passwordConfirm', text)}
                    secureTextEntry
                    textContentType='newPassword'
                    keyboardType='default'
                />
            </InputOuterFrameBlock>
            <InputOuterFrameBlock marginTop={1}>
                <TextBlock title={1}>
                    성별
                </TextBlock>
                <InputFrameBlock>
                    {validation.gender ? (
                        <ImageBlock source={CheckAfterIcon} />
                    ) : (
                        <ImageBlock source={CheckBeforeIcon} />
                    )}
                    <CheckBoxFrameBlock margin={1}>
                        <CheckBoxTouchBlock onPress={() => onPressCheckBox('gender', 'male')}>
                            <CheckBoxTextBlock gender={gender === 'male'}>
                                Male
                            </CheckBoxTextBlock>
                        </CheckBoxTouchBlock>
                    </CheckBoxFrameBlock>
                    <CheckBoxFrameBlock>
                        <CheckBoxTouchBlock onPress={() => onPressCheckBox('gender', 'female')}>
                            <CheckBoxTextBlock gender={gender === 'female'}>
                                Female
                            </CheckBoxTextBlock>
                        </CheckBoxTouchBlock>
                    </CheckBoxFrameBlock>
                </InputFrameBlock>
            </InputOuterFrameBlock>
            {/* <InputFrameBlock margin={1}>
                {validation.gender ? (
                    <ImageBlock source={CheckAfterIcon} />
                ) : (
                    <ImageBlock source={CheckBeforeIcon} />
                )}
                <CheckBoxFrameBlock margin={1}>
                    <CheckBoxTouchBlock onPress={() => onPressCheckBox('gender', 'male')}>
                        <CheckBoxTextBlock gender={gender === 'male'}>
                            Male
                        </CheckBoxTextBlock>
                    </CheckBoxTouchBlock>
                </CheckBoxFrameBlock>
                <CheckBoxFrameBlock>
                    <CheckBoxTouchBlock onPress={() => onPressCheckBox('gender', 'female')}>
                        <CheckBoxTextBlock gender={gender === 'female'}>
                            Female
                        </CheckBoxTextBlock>
                    </CheckBoxTouchBlock>
                </CheckBoxFrameBlock>
            </InputFrameBlock> */}
            <ButtonTouchBlock
                disabled={inValidSignUp}
                onPress={onPressSubmit}
            >
                <ButtonTextBlock
                    disabled={inValidSignUp}
                >
                    계정 생성하기
                </ButtonTextBlock>
            </ButtonTouchBlock>
        </AuthSignUpBaseBlock>
    );
};

export default AuthSignUpBase;