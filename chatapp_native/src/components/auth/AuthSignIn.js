import React from 'react';
import styled, { css } from 'styled-components/native';

import UserIcon from '../../assets/images/user.png';
import LockIcon from '../../assets/images/lock.png';

const AuthSignInBlock = styled.SafeAreaView`
    flex: 1;
`;

const AuthSignInTouchBlock = styled.TouchableWithoutFeedback``;

const InputFrameTouchBlock = styled.TouchableWithoutFeedback``;

const HeaderViewBlock = styled.View`
    flex: 3;
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

const NavigateViewBlock = styled.View`
    flex-direction: row;
    margin-top: 20px;
`;

const NavigateTouchBlock = styled.TouchableOpacity`
    margin-left:10px;
`;

const NavigateInformTextBlock = styled.Text`
    
`;

const NavigateTextBlock = styled.Text`

`;

const AuthSignIn = ({
    focused,
    inputRef,
    onPress,
    onPressBackground,
    onPressNavigate,
    onSubmit,
    onFocus,
    onChangeText,
    username,
    password,
}) => {
    return (
        <AuthSignInTouchBlock onPress={onPressBackground}>
            <AuthSignInBlock>
                <HeaderViewBlock>
                </HeaderViewBlock>
                <BodyViewBlock>
                    <InputFrameTouchBlock onPress={() => onPress(0)}>
                        <InputFrameBlock focused={focused[0]}>
                            <ImageBlock source={UserIcon} />
                            <InputBlock
                                ref={ref => inputRef.current[0] = ref}
                                autoCapitalize="none"
                                autoCorrect={false}
                                allowFontScaling={false}
                                onFocus={() => onFocus(0)}
                                placeholderTextColor="rgba(176, 196, 222, 0.5)"
                                placeholder='Username'
                                value={username}
                                onChangeText={text => onChangeText('username', text)}
                                keyboardType='email-address'
                            />
                        </InputFrameBlock>
                    </InputFrameTouchBlock>
                    <InputFrameTouchBlock onPress={() => onPress(1)}>
                        <InputFrameBlock focused={focused[1]} margin>
                            <ImageBlock source={LockIcon} />
                            <InputBlock
                                ref={ref => inputRef.current[1] = ref}
                                autoCapitalize="none"
                                autoCorrect={false}
                                allowFontScaling={false}
                                onFocus={() => onFocus(1)}
                                placeholderTextColor="rgba(176, 196, 222, 0.5)"
                                placeholder='Password'
                                value={password}
                                onChangeText={text => onChangeText('password', text)}
                                secureTextEntry={true}
                                keyboardType='default'
                            />
                        </InputFrameBlock>
                    </InputFrameTouchBlock>
                    <ButtonTouchBlock onPress={onSubmit} >
                        <ButtonTextBlock>
                            Sign In
                        </ButtonTextBlock>
                    </ButtonTouchBlock>
                    <NavigateViewBlock>
                        <NavigateInformTextBlock>
                            아직 계정이 없으신가요?
                        </NavigateInformTextBlock>
                        <NavigateTouchBlock onPress={onPressNavigate}>
                            <NavigateTextBlock>
                                회원가입
                            </NavigateTextBlock>
                        </NavigateTouchBlock>    
                    </NavigateViewBlock>
                </BodyViewBlock>
            </AuthSignInBlock>
        </AuthSignInTouchBlock>
    );
};

export default AuthSignIn;