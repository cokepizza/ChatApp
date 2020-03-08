import React from 'react';
import styled from 'styled-components/native';

import BackIcon from '../../assets/images/back.png';

const AuthSignUpBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
`;

const BodyViewBlock = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const InputFrameBlock = styled.View`
    flex-direction: row;
    width: 90%;
    height: 30px;
    border-bottom-width: 1px;
    opacity: 0.5;
`;

const InputBlock = styled.TextInput`
    flex: 1;
    height: 30px;
    margin-left: 10px;
`;

const NavigationTouchBlock = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const ImageBlock = styled.Image`
    width: 30px;
    height: 30px;
`;

const NavigationTextBlock = styled.Text``;

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

const AuthSignUp = ({
    username,
    password,
    passwordConfirm,
    onPressSubmit,
    onPressNavigate,
    onChangeText
}) => {
    
    return (
        <AuthSignUpBlock>
            <BodyViewBlock>
                <InputFrameBlock>
                    <InputBlock
                        autoCapitalize="none"
                        autoCorrect={false}
                        allowFontScaling={false}
                        placeholderTextColor="rgba(176, 196, 222, 0.5)"
                        placeholder='Username'
                        value={username}
                        onChangeText={text => onChangeText('username', text)}
                        keyboardType='email-address'
                    />
                </InputFrameBlock>
                <InputFrameBlock>
                    <InputBlock
                        autoCapitalize="none"
                        autoCorrect={false}
                        allowFontScaling={false}
                        placeholderTextColor="rgba(176, 196, 222, 0.5)"
                        placeholder='Password'
                        value={password}
                        onChangeText={text => onChangeText('password', text)}
                        secureTextEntry={true}
                        keyboardType='default'
                    />
                </InputFrameBlock>
                <InputFrameBlock>
                    <InputBlock
                        autoCapitalize="none"
                        autoCorrect={false}
                        allowFontScaling={false}
                        placeholderTextColor="rgba(176, 196, 222, 0.5)"
                        placeholder='PasswordConfirm'
                        value={passwordConfirm}
                        onChangeText={text => onChangeText('passwordConfirm', text)}
                        secureTextEntry={true}
                        keyboardType='default'
                    />
                </InputFrameBlock>
                <ButtonTouchBlock onPress={onPressSubmit}>
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
        </AuthSignUpBlock>
    );
};

export default AuthSignUp;