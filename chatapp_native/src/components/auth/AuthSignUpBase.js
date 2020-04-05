import React from 'react';
import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

import BackIcon from '../../assets/images/back.png';
import CheckBeforeIcon from '../../assets/images/check_before.png';
import CheckAfterIcon from '../../assets/images/check_after.png';

const AuthSignUpBaseBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
`;

const HeaderViewBlock = styled.View`
    flex: 2;
    width: 100%;
    align-items: center;
    background: white;
`;

const BodyViewBlock = styled.View`
    flex: 2;
    width: 100%;
    align-items: center;
    background: white;
`;

const InputFrameBlock = styled.View`
    flex-direction: row;
    width: 90%;
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
    height: 30px;
    margin-left: 10px;
`;

const NavigationTouchBlock = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    margin-top: 20px;
    margin-left: 20px;
`;

const ImageBlock = styled.Image`
    width: 20px;
    height: 20px;
`;

const NavigationTextBlock = styled.Text`
    margin-left: 10px;
`;

const ButtonTouchBlock = styled.TouchableOpacity`
    width: 90%;
    height: 30px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: rgba(176, 196, 222, 0.5);
    margin-top: 20px;

    ${props => props.disabled && css`
        background: rgba(176, 196, 222, 0.2);
    `}
`;

const ButtonTextBlock = styled.Text`
    font-size: 12px;
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

const AuthSignUpBase = ({
    username,
    nickname,
    password,
    passwordConfirm,
    gender,
    validation,
    onPressSubmit,
    onPressNavigate,
    onPressCheckBox,
    onChangeText
}) => {
    
    let inValidSignUp = false;
    Object.keys(validation).forEach(key => {
        if(!validation[key]) {
            inValidSignUp = true;
        }
    })

    return (
        <AuthSignUpBaseBlock>
            <HeaderViewBlock>

            </HeaderViewBlock>
            <BodyViewBlock>
                <InputFrameBlock>
                    {validation.username ? (
                        <ImageBlock source={CheckAfterIcon} />
                    ) : (
                        <ImageBlock source={CheckBeforeIcon} />
                    )}
                    <InputBlock
                        autoCapitalize='none'
                        autoCorrect={false}
                        allowFontScaling={false}
                        placeholderTextColor="rgba(33, 87, 142, 0.5)"
                        placeholder='Username'
                        value={username}
                        onChangeText={text => onChangeText('username', text)}
                        keyboardType='email-address'
                    />
                </InputFrameBlock>
                <InputFrameBlock margin={1}>
                    {validation.nickname ? (
                        <ImageBlock source={CheckAfterIcon} />
                    ) : (
                        <ImageBlock source={CheckBeforeIcon} />
                    )}
                    <InputBlock
                        autoCapitalize='none'
                        autoCorrect={false}
                        allowFontScaling={false}
                        placeholderTextColor='rgba(33, 87, 142, 0.5)'
                        placeholder='Nickname'
                        value={nickname}
                        onChangeText={text => onChangeText('nickname', text)}
                        keyboardType='default'
                    />
                </InputFrameBlock>
                <InputFrameBlock margin={1}>
                    {validation.password ? (
                        <ImageBlock source={CheckAfterIcon} />
                    ) : (
                        <ImageBlock source={CheckBeforeIcon} />
                    )}
                    <InputBlock
                        autoCapitalize='none'
                        autoCorrect={false}
                        allowFontScaling={false}
                        placeholderTextColor='rgba(33, 87, 142, 0.5)'
                        placeholder='Password'
                        value={password}
                        onChangeText={text => onChangeText('password', text)}
                        secureTextEntry
                        textContentType='newPassword'
                        keyboardType='default'
                    />
                </InputFrameBlock>
                <InputFrameBlock margin={1}>
                    {validation.passwordConfirm ? (
                        <ImageBlock source={CheckAfterIcon} />
                    ) : (
                        <ImageBlock source={CheckBeforeIcon} />
                    )}
                    <InputBlock
                        autoCapitalize='none'
                        autoCorrect={false}
                        allowFontScaling={false}
                        placeholderTextColor='rgba(33, 87, 142, 0.5)'
                        placeholder='PasswordConfirm'
                        value={passwordConfirm}
                        onChangeText={text => onChangeText('passwordConfirm', text)}
                        secureTextEntry
                        textContentType='newPassword'
                        keyboardType='default'
                    />
                </InputFrameBlock>
                <InputFrameBlock margin={1}>
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
                <ButtonTouchBlock
                    disabled={inValidSignUp}
                    onPress={onPressSubmit}
                >
                    <ButtonTextBlock>
                        Sign Up
                    </ButtonTextBlock>
                </ButtonTouchBlock>
                <NavigationTouchBlock onPress={onPressNavigate}>
                    <ImageBlock source={BackIcon} />
                    <NavigationTextBlock>
                        기존회원 로그인
                    </NavigationTextBlock>
                </NavigationTouchBlock>
            </BodyViewBlock>
        </AuthSignUpBaseBlock>
    );
};

export default AuthSignUpBase;