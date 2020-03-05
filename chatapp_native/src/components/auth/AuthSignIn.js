import React from 'react';
import styled, { css } from 'styled-components/native';

import UserIcon from '../../assets/images/user.png';
import LockIcon from '../../assets/images/lock.png';

const AuthSignInBlock = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background: white;
`;

const InputFrameTouchBlock = styled.TouchableWithoutFeedback`

`;

const InputFrameBlock = styled.View`
    flex-direction: row;
    width: 90%;
    height: 30px;
    border-bottom-width: 1px;
    background: red;

    ${props => props.margin && css`
        margin-top: 10px;
    `}

    ${props => props.focused && css`
        background: blue;
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
`;

const ButtonTextBlock = styled.Text`
    font-size: 12px;
`;

const AuthSignIn = ({ focused, inputRef, onPress, onFocus }) => {
    return (
        <AuthSignInBlock>
            <InputFrameTouchBlock
                onPress={() => onPress(0)}
            >
                <InputFrameBlock
                    focused={focused[0]}
                >
                    <ImageBlock
                        source={UserIcon}
                    />
                    <InputBlock
                        ref={ref => inputRef.current[0] = ref}
                        autoCapitalize="none"
                        autoCorrect={false}
                        allowFontScaling={false}
                        onFocus={() => onFocus(0)}
                        placeholderTextColor="rgba(176, 196, 222, 0.5)"
                        placeholder='Username'
                    />
                </InputFrameBlock>
            </InputFrameTouchBlock>
            <InputFrameTouchBlock
               onPress={() => onPress(1)}
            >
                <InputFrameBlock
                    margin
                    focused={focused[1]}
                >
                    <ImageBlock
                        source={LockIcon}
                    />
                    <InputBlock
                        ref={ref => inputRef.current[1] = ref}
                        autoCapitalize="none"
                        autoCorrect={false}
                        allowFontScaling={false}
                        onFocus={() => onFocus(1)}
                        placeholderTextColor="rgba(176, 196, 222, 0.5)"
                        placeholder='Password'
                    />
                </InputFrameBlock>
            </InputFrameTouchBlock>
            <ButtonTouchBlock>
                <ButtonTextBlock>
                    Sign In
                </ButtonTextBlock>
            </ButtonTouchBlock>
        </AuthSignInBlock>
    );
};

export default AuthSignIn;