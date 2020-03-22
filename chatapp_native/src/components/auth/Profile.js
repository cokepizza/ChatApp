import React from 'react';
import styled, { css } from 'styled-components/native';

import TextAreaContainer from '../../containers/common/TextAreaContainer';
import CheckBeforeIcon from '../../assets/images/check_before.png';
import CheckAfterIcon from '../../assets/images/check_after.png';
import SelectionContainer from '../../containers/common/SelectionContainer';

const ProfileTouchBlock = styled.TouchableWithoutFeedback``;

const ProfileBlock = styled.View`
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    height: 1600px;
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

const SelectionBlock = styled.Picker`
    flex: 1;
    height: 30px;
    margin-left: 10px;
`;

const ModalBackgroundBlock = styled.View`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 10;
`;
``
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

const SelectionForm = ({ validation, value }) => {
    return (
        <InputInnerFrameBlock>
            {validation ? (
                <ImageBlock source={CheckAfterIcon} />
            ) : (
                <ImageBlock source={CheckBeforeIcon} />
            )}
            <SelectionBlock>
                {value}
            </SelectionBlock>
        </InputInnerFrameBlock>
    );
}

const Profile = ({
    inputRef,
    focused,
    introduction,
    introductionWordLimit,
    nickname,
    school,
    major,
    job,
    work,
    region,
    validation,
    modal,
    onChangeText,
    onFocus,
    onPress,
    onPressPicker,
    onPressBackground,
    onLayout,
}) => {
    return (
        <>
            <ProfileTouchBlock onPress={onPressBackground}>
                <ProfileBlock onLayout={e => onLayout(e, -1)}>
                    <InputTouchFrameBlock onPress={() => onPress(0)}>
                        <InputOuterFrameBlock
                            focused={focused[0]}
                            onLayout={e => onLayout(e, 0)}
                        >
                            <TextBlock>
                                자기소개
                            </TextBlock>
                            <TextAreaContainer
                                inputRef={inputRef}
                                index={0}
                                text={introduction}
                                textLimit={introductionWordLimit}
                                onFocus={() => onFocus(0)}
                                onChangeText={text => onChangeText('introduction', text)}
                            />
                        </InputOuterFrameBlock>
                    </InputTouchFrameBlock>
                    <InputTouchFrameBlock onPress={() => onPress(1)}>
                        <InputOuterFrameBlock
                            marginTop={1}
                            focused={focused[1]}
                            onLayout={e => onLayout(e, 1)}
                        >
                            <TextBlock>
                                닉네임
                            </TextBlock>
                            <TextInputForm
                                inputRef={inputRef}
                                index={1}
                                validation={validation.nickname}
                                value={nickname}
                                onFocus={() => onFocus(1)}
                                onChangeText={text => onChangeText('nickname', text)}
                            />
                        </InputOuterFrameBlock>
                    </InputTouchFrameBlock>
                    <InputTouchFrameBlock onPress={() => onPress(2)}>
                        <InputOuterFrameBlock
                            marginTop={1}
                            focused={focused[2]}
                            onLayout={e => onLayout(e, 2)}
                        >
                            <TextBlock>
                                학교
                            </TextBlock>
                            <TextInputForm
                                inputRef={inputRef}
                                index={2}
                                validation={validation.school}
                                value={school}
                                onFocus={() => onFocus(2)}
                                onChangeText={text => onChangeText('school', text)}
                            />
                        </InputOuterFrameBlock>
                    </InputTouchFrameBlock>
                    <InputTouchFrameBlock onPress={() => onPress(3)}>
                        <InputOuterFrameBlock
                            marginTop={1}
                            focused={focused[3]}
                            onLayout={e => onLayout(e, 3)}
                        >
                            <TextBlock>
                                전공
                            </TextBlock>
                            <TextInputForm
                                inputRef={inputRef}
                                index={3}
                                validation={validation.major}
                                value={major}
                                onFocus={() => onFocus(3)}
                                onChangeText={text => onChangeText('major', text)}
                            />
                        </InputOuterFrameBlock>
                    </InputTouchFrameBlock>
                    <InputTouchFrameBlock onPress={() => onPress(4)}>
                        <InputOuterFrameBlock
                            marginTop={1}
                            focused={focused[4]}
                            onLayout={e => onLayout(e, 4)}
                        >
                            <TextBlock>
                                직업
                            </TextBlock>
                            <TextInputForm
                                inputRef={inputRef}
                                index={4}
                                validation={validation.job}
                                value={job}
                                onFocus={() => onFocus(4)}
                                onChangeText={text => onChangeText('job', text)}
                            />
                        </InputOuterFrameBlock>
                    </InputTouchFrameBlock>
                    <InputTouchFrameBlock onPress={() => onPress(5)}>
                        <InputOuterFrameBlock
                            marginTop={1}
                            focused={focused[5]}
                            onLayout={e => onLayout(e, 5)}
                        >
                            <TextBlock>
                                직장
                            </TextBlock>
                            <TextInputForm
                                inputRef={inputRef}
                                index={5}
                                validation={validation.work}
                                value={work}
                                onFocus={() => onFocus(5)}
                                onChangeText={text => onChangeText('work', text)}
                            />
                        </InputOuterFrameBlock>
                    </InputTouchFrameBlock>
                    <InputTouchFrameBlock onPress={() => onPressPicker(6)}>
                        <InputOuterFrameBlock
                            marginTop={1}
                            focused={focused[6]}
                            onLayout={e => onLayout(e, 6)}
                        >
                            <TextBlock>
                                지역
                            </TextBlock>
                            {/* <SelectionForm
                                validation={validation.region}
                                value={region}
                            /> */}
                        </InputOuterFrameBlock>
                    </InputTouchFrameBlock>
                    {/* <SelectionContainer /> */}
                    
                    {/* <SelectionBlock
                        selectedValue={'python'}
                    >
                        <SelectionBlock.Item label='java' value='java' />
                        <SelectionBlock.Item label='c++' value='c++' />
                        <SelectionBlock.Item label='python' value='python' />
                    </SelectionBlock> */}

                </ProfileBlock>
            </ProfileTouchBlock>
            {modal &&  <ModalBackgroundBlock /> }
        </>
    );
};

export default Profile;