import React from 'react';
import styled, { css } from 'styled-components/native';

import TextAreaContainer from '../../containers/common/TextAreaContainer';
import CheckBeforeIcon from '../../assets/images/check_before.png';
import CheckAfterIcon from '../../assets/images/check_after.png';

const ProfileTouchBlock = styled.TouchableWithoutFeedback``;

const ProfileBlock = styled.View`
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    height: 800px;
    /* background: red; */
`;

const ImageBlock = styled.Image`
    width: 20px;
    height: 20px;
`;

const InputInnerFrameBlock = styled.View`
    flex-direction: row;
    width: 100%;
    height: 30px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.5);
    align-items: center;
`;

const InputTouchFrameBlock = styled.TouchableWithoutFeedback``;

const InputOuterFrameBlock = styled.View`
    opacity: 0.5;

    ${props => props.marginTop && css`
        margin-top: 30px;
    `}

    ${props => props.focused && css`
        opacity: 1;
    `}
`;

const TextBlock = styled.Text`
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
`;

const InputBlock = styled.TextInput`
    flex: 1;
    height: 30px;
    margin-left: 10px;
`;

const TextInputForm = ({ validation, value, index, inputRef, ...rest }) => {
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
                 ref={ref => inputRef.current[index] = ref}
                 {...rest}
            />
        </InputInnerFrameBlock>
    )
    
}

const Profile = ({
    inputRef,
    focused,
    introduction,
    introductionWordLimit,
    school,
    major,
    job,
    region,
    validation,
    onChangeText,
    onFocus,
    onPress,
    onPressBackground,
}) => {
    return (
        <ProfileTouchBlock>
            <ProfileBlock>
                <InputTouchFrameBlock onPress={() => onPress(0)}>
                    <InputOuterFrameBlock focused={focused[0]}>
                        <TextBlock>
                            자기소개
                        </TextBlock>
                        <TextAreaContainer
                            
                            text={introduction}
                            textLimit={introductionWordLimit}
                            onFocus={() => onFocus(0)}
                            onChangeText={text => onChangeText('introduction', text)}
                        />
                    </InputOuterFrameBlock>
                </InputTouchFrameBlock>
                <InputTouchFrameBlock onPress={() => onPress(1)}>
                    <InputOuterFrameBlock focused={focused[1]} marginTop={1}>
                        <TextBlock>
                            학교
                        </TextBlock>
                        <TextInputForm
                            inputRef={inputRef}
                            index={1}
                            validation={validation.school}
                            value={school}
                            onFocus={() => onFocus(1)}
                            onChangeText={text => onChangeText('school', text)}
                        />
                    </InputOuterFrameBlock>
                </InputTouchFrameBlock>
                <InputTouchFrameBlock onPress={() => onPress(2)}>
                    <InputOuterFrameBlock focused={focused[2]} marginTop={1}>
                        <TextBlock>
                            전공
                        </TextBlock>
                        <TextInputForm
                            inputRef={inputRef}
                            index={2}
                            validation={validation.major}
                            value={major}
                            onFocus={() => onFocus(2)}
                            onChangeText={text => onChangeText('major', text)}
                        />
                    </InputOuterFrameBlock>
                </InputTouchFrameBlock>
                <InputTouchFrameBlock onPress={() => onPress(3)}>
                    <InputOuterFrameBlock focused={focused[3]} marginTop={1}>
                        <TextBlock>
                            직업
                        </TextBlock>
                        <TextInputForm
                            inputRef={inputRef}
                            index={3}
                            validation={validation.job}
                            value={job}
                            onFocus={() => onFocus(3)}
                            onChangeText={text => onChangeText('job', text)}
                        />
                    </InputOuterFrameBlock>
                </InputTouchFrameBlock>
            </ProfileBlock>
        </ProfileTouchBlock>
    );
};

export default Profile;