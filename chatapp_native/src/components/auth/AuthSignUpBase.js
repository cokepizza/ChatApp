import React from 'react';
import { Dimensions, ActivityIndicator, Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import SubHeaderContainer from '../../containers/common/SubHeaderContainer';
import CheckBeforeIcon from '../../assets/images/check_before.png';
import CheckAfterIcon from '../../assets/images/check_after.png';
import ErrorIcon from '../../assets/images/error.png';

const AuthSignUpBaseTouchBlock = styled.TouchableWithoutFeedback``;

const AuthSignUpBaseBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
    align-items: center;
`;

const InputOuterTouchBlock = styled.TouchableWithoutFeedback``;

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
    height: 40px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.2);
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
    opacity: 0.3;

    ${props => props.focused && css`
        opacity: 0.8;
    `}
`;

const BottomViewBlock = styled.View`
    padding-left: 24px;
    padding-right: 24px;
    /* 전체높이 - 상태표시줄 -아이폰X 바텀바 -navigation 헤더 -서브헤더 -바디컴포넌트 높이*/
    height: ${Dimensions.get('window').height - getStatusBarHeight(true) - getBottomSpace()-45-60-404.5}px;
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

const CheckBoxFrameBlock = styled.View`
    width: ${(parseInt(Dimensions.get('window').width * 0.9) - 30) / 2}px;

    ${props => props.margin && css`
        margin-left: 10px;
    `}
`;

const CheckBoxTouchBlock = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

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

const MarginBlock = styled.View`
    width: 100%;
    height: 20px;
`;

const AuthSignUpBaseScrollViewBlock = styled.ScrollView`
    width: 100%;
`;

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex: 1;
`

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
    focused,
    ...rest
}) => {
    return (
        <InputInnerFrameBlock>
            {error ? (
                <ImageBlock
                    source={ErrorIcon}
                    focused={focused}
                />
            ) : (
                validation ? (
                    <ImageBlock
                        source={CheckAfterIcon}
                        focused={focused}
                    />
                ) : (
                    <ImageBlock
                        source={CheckBeforeIcon}
                        focused={focused}
                    />
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
    scrollRef,
    focused,
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
    onPressFrame,
    onPressBackground,
    onLayout,
    onFocus,
    onKeyboardReturn,
}) => {

    let inValidSignUp = false;
    Object.keys(validation).forEach(key => {
        if(!validation[key]) {
            inValidSignUp = true;
        }
    })

    if(!duplicateCheckFlag) {
        inValidSignUp = true;
    }

    return (
        <AuthSignUpBaseTouchBlock onPress={onPressBackground}>
            <AuthSignUpBaseBlock>
                <SubHeaderContainer
                    title='계정 생성'
                    index={1}
                    total={3}
                />
                <KeyboardAvoidingView
                    behavior={Platform.select({android: undefined, ios: 'padding'})}
                >
                    <AuthSignUpBaseScrollViewBlock
                        // bounces={false}
                        // scrollToOverflowEnabled={false}
                        // contentContainerStyle={{flexGrow: 1}}
                        ref={scrollRef}
                        horizontal={false}
                        keyboardShouldPersistTaps='always'
                    >
                        <InputOuterTouchBlock onPress={() => onPressFrame(0)}>
                            <InputOuterFrameBlock marginTop={1} onLayout={e => onLayout(e, 0)}>
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
                                    focused={focused[0]}
                                    // onFocus={onFocusUsername}
                                    value={username}
                                    onChangeText={text => onChangeText('username', text)}
                                    keyboardType='email-address'
                                    onSubmitEditing={() => onKeyboardReturn(0)}
                                />
                            </InputOuterFrameBlock>
                        </InputOuterTouchBlock>
                        {duplicateCheckError ? (
                            <RedWarningBlock>
                                <RedTextBlock>
                                    {duplicateCheckError}
                                </RedTextBlock>
                            </RedWarningBlock>
                        ): (
                            <MarginBlock />
                        )}
                        <InputOuterTouchBlock onPress={() => onPressFrame(1)}>
                            <InputOuterFrameBlock marginTop={1} onLayout={e => onLayout(e, 1)}>
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
                                    onFocus={() => onFocus(1)}
                                    focused={focused[1]}
                                    value={password}
                                    onChangeText={text => onChangeText('password', text)}
                                    secureTextEntry
                                    textContentType='newPassword'
                                    keyboardType='default'
                                    onSubmitEditing={() => onKeyboardReturn(1)}
                                />
                            </InputOuterFrameBlock>
                        </InputOuterTouchBlock>
                        <InputOuterTouchBlock onPress={() => onPressFrame(2)}>
                            <InputOuterFrameBlock marginTop={1} onLayout={e => onLayout(e, 2)}>
                                <TextBlock title={1}>
                                    비밀번호 확인
                                </TextBlock>
                                <TextInputForm
                                    inputRef={inputRef}
                                    index={2}
                                    validation={validation.passwordConfirm}
                                    plainForm={true}
                                    error={false}
                                    // onFocus={onFocusUsername}
                                    onFocus={() => onFocus(2)}
                                    focused={focused[2]}
                                    value={passwordConfirm}
                                    onChangeText={text => onChangeText('passwordConfirm', text)}
                                    secureTextEntry
                                    textContentType='newPassword'
                                    keyboardType='default'
                                    onSubmitEditing={() => onKeyboardReturn(2)}
                                />
                            </InputOuterFrameBlock>
                        </InputOuterTouchBlock>
                        <MarginBlock />
                        <InputOuterFrameBlock marginTop={1} onLayout={e => onLayout(e, 3)}>
                            <TextBlock title={1}>
                                성별
                            </TextBlock>
                            <InputFrameBlock>
                                {validation.gender ? (
                                    <ImageBlock source={CheckAfterIcon} focused={focused[3]}/>
                                ) : (
                                    <ImageBlock source={CheckBeforeIcon} focused={focused[3]}/>
                                )}
                                <CheckBoxFrameBlock margin={1}>
                                    <CheckBoxTouchBlock onPress={() => onPressCheckBox('gender', 'male')}>
                                        <CheckBoxTextBlock gender={gender === 'male'}>
                                            남자
                                        </CheckBoxTextBlock>
                                    </CheckBoxTouchBlock>
                                </CheckBoxFrameBlock>
                                <CheckBoxFrameBlock>
                                    <CheckBoxTouchBlock onPress={() => onPressCheckBox('gender', 'female')}>
                                        <CheckBoxTextBlock gender={gender === 'female'}>
                                            여자
                                        </CheckBoxTextBlock>
                                    </CheckBoxTouchBlock>
                                </CheckBoxFrameBlock>
                            </InputFrameBlock>
                        </InputOuterFrameBlock>
                        <BottomViewBlock>
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
                        </BottomViewBlock>
                    </AuthSignUpBaseScrollViewBlock>
                </KeyboardAvoidingView>
            </AuthSignUpBaseBlock>
        </AuthSignUpBaseTouchBlock>
    );
};

export default AuthSignUpBase;