import React from 'react';
import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';

import UserIcon from '../../assets/images/user.png';
import LockIcon from '../../assets/images/lock.png';
import LogoIcon from '../../assets/images/hixxx.png';

const AuthSignInBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
`;

const AuthSignInTouchBlock = styled.TouchableWithoutFeedback``;

const InputFrameTouchBlock = styled.TouchableWithoutFeedback``;

const HeaderViewBlock = styled.View`
    flex: 3;
    width: 100%;
    align-items: center;
    justify-content: center;
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

    ${props => props.margin && css`
        margin-top: 10px;
    `}

    ${props => props.focused && css`
        opacity: 1;
    `}
`;

const ImageBlock = styled.Image`
    width: 30px;
    height: 30px;
`;

const ImageLogoBlock = styled.Image`
    width: 80%;
    height: 50%;
`;

const InputBlock = styled.TextInput`
    flex: 1;
    height: 30px;
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
`;

const ButtonTextBlock = styled.Text`
    font-size: 12px;
`;

const NavigationFrameBlock = styled.View`
    flex-direction: row;
    margin-top: 20px;
`;

const NavigationTouchBlock = styled.TouchableOpacity`
    margin-left:10px;
`;

const NavigationInformTextBlock = styled.Text``;

const NavigationTextBlock = styled.Text``;

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex: 1;
`;

const AuthSignIn = ({
    focused,
    inputRef,
    onPress,
    onPressBackground,
    onPressNavigate,
    onPressSubmit,
    onFocus,
    onChangeText,
    username,
    password,
}) => {
    return (
        <AuthSignInTouchBlock onPress={onPressBackground}>
            <AuthSignInBlock>
                <KeyboardAvoidingView behavior={Platform.select({android: undefined, ios: 'padding'})}>
                    <HeaderViewBlock>
                        <ImageLogoBlock
                            resizeMode="center"
                            source={LogoIcon}
                        />
                    </HeaderViewBlock>
                    <BodyViewBlock>
                        <InputFrameTouchBlock onPress={() => onPress(0)}>
                            <InputFrameBlock focused={focused[0]}>
                                <ImageBlock source={UserIcon} />
                                <InputBlock
                                    ref={ref => inputRef.current[0] = ref}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    allowFontScaling={false}
                                    onFocus={() => onFocus(0)}
                                    placeholderTextColor='rgba(33, 87, 142, 0.5)'
                                    placeholder='Username'
                                    value={username}
                                    onChangeText={text => onChangeText('username', text)}
                                    keyboardType='email-address'
                                />
                            </InputFrameBlock>
                        </InputFrameTouchBlock>
                        <InputFrameTouchBlock onPress={() => onPress(1)}>
                            <InputFrameBlock focused={focused[1]} margin={1}>
                                <ImageBlock source={LockIcon} />
                                <InputBlock
                                    ref={ref => inputRef.current[1] = ref}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    allowFontScaling={false}
                                    onFocus={() => onFocus(1)}
                                    placeholderTextColor='rgba(33, 87, 142, 0.5)'
                                    placeholder='Password'
                                    value={password}
                                    onChangeText={text => onChangeText('password', text)}
                                    secureTextEntry
                                    textContentType='newPassword'
                                    keyboardType='default'
                                />
                            </InputFrameBlock>
                        </InputFrameTouchBlock>
                        <ButtonTouchBlock onPress={onPressSubmit} >
                            <ButtonTextBlock>
                                Sign In
                            </ButtonTextBlock>
                        </ButtonTouchBlock>
                        <NavigationFrameBlock>
                            <NavigationInformTextBlock>
                                아직 계정이 없으신가요?
                            </NavigationInformTextBlock>
                            <NavigationTouchBlock onPress={onPressNavigate}>
                                <NavigationTextBlock>
                                    회원가입
                                </NavigationTextBlock>
                            </NavigationTouchBlock>    
                        </NavigationFrameBlock>
                    </BodyViewBlock>
                </KeyboardAvoidingView>
            </AuthSignInBlock>
        </AuthSignInTouchBlock>
    );
};

export default AuthSignIn;