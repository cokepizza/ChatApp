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
    height: 1600px;
`;

const ImageBlock = styled.Image`
    width: 18px;
    height: 18px;
`;

const InputInnerFrameBlock = styled.View`
    flex-direction: row;
    width: 100%;
    height: 40px;
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

    ${props => props.title && css`
        font-size: 15px;
    `}
`;

const InputBlock = styled.TextInput`
    flex: 1;
    height: 40px;
    margin-left: 10px;
`;

const PickerBlock = styled.View`
    flex: 1;
    height: 30px;
    margin-left: 10px;
    justify-content: center;
`;

const PickerTextBlock = styled.Text``;

const TextInputForm = React.memo(({ validation, value, index, inputRef, ...rest }) => {
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
});

const PickerForm = React.memo(({ validation, value }) => {
    return (
        <InputInnerFrameBlock>
            {validation ? (
                <ImageBlock source={CheckAfterIcon} />
            ) : (
                <ImageBlock source={CheckBeforeIcon} />
            )}
            <PickerBlock>
                <PickerTextBlock>
                    {value}
                </PickerTextBlock>
            </PickerBlock>
        </InputInnerFrameBlock>
    );
});

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
    birth,
    tall,
    shape,
    character,
    bloodType,
    smoking,
    drinking,
    validation,
    onChangeText,
    onFocus,
    onPress,
    onPressPicker,
    onPressBackground,
    onLayout,
}) => {
    return (
        <ProfileTouchBlock onPress={onPressBackground}>
            <ProfileBlock onLayout={e => onLayout(e, -1)}>
                <InputTouchFrameBlock onPress={() => onPress(0)}>
                    <InputOuterFrameBlock
                        focused={focused[0]}
                        onLayout={e => onLayout(e, 0)}
                    >
                        <TextBlock title={1}>
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
                        <TextBlock title={1}>
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
                        <TextBlock title={1}>
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
                        <TextBlock title={1}>
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
                        <TextBlock title={1}>
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
                        <TextBlock title={1}>
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
                <InputTouchFrameBlock onPress={() => onPressPicker('region', region, 6)}>
                    <InputOuterFrameBlock
                        marginTop={1}
                        focused={focused[6]}
                        onLayout={e => onLayout(e, 6)}
                    >
                        <TextBlock title={1}>
                            지역
                        </TextBlock>
                        <PickerForm
                            validation={validation.region}
                            value={region}
                        />
                    </InputOuterFrameBlock>
                </InputTouchFrameBlock>
                <InputTouchFrameBlock onPress={() => onPressPicker('birth', birth, 7)}>
                    <InputOuterFrameBlock
                        marginTop={1}
                        focused={focused[7]}
                        onLayout={e => onLayout(e, 7)}
                    >
                        <TextBlock title={1}>
                            생년월일
                        </TextBlock>
                        <PickerForm
                            validation={validation.birth}
                            value={birth}
                        />
                    </InputOuterFrameBlock>
                </InputTouchFrameBlock>
                <InputTouchFrameBlock onPress={() => onPressPicker('tall', tall, 8)}>
                    <InputOuterFrameBlock
                        marginTop={1}
                        focused={focused[8]}
                        onLayout={e => onLayout(e, 8)}
                    >
                        <TextBlock title={1}>
                            키
                        </TextBlock>
                        <PickerForm
                            validation={validation.tall}
                            value={tall}
                        />
                    </InputOuterFrameBlock>
                </InputTouchFrameBlock>
                <InputTouchFrameBlock onPress={() => onPressPicker('shape', shape, 9)}>
                    <InputOuterFrameBlock
                        marginTop={1}
                        focused={focused[9]}
                        onLayout={e => onLayout(e, 9)}
                    >
                        <TextBlock title={1}>
                            체형
                        </TextBlock>
                        <PickerForm
                            validation={validation.shape}
                            value={shape}
                        />
                    </InputOuterFrameBlock>
                </InputTouchFrameBlock>
                <InputTouchFrameBlock onPress={() => onPressPicker('character', character, 10)}>
                    <InputOuterFrameBlock
                        marginTop={1}
                        focused={focused[10]}
                        onLayout={e => onLayout(e, 10)}
                    >
                        <TextBlock title={1}>
                            성격
                        </TextBlock>
                        <PickerForm
                            validation={validation.character}
                            value={character}
                        />
                    </InputOuterFrameBlock>
                </InputTouchFrameBlock>
                <InputTouchFrameBlock onPress={() => onPressPicker('bloodType', bloodType, 11)}>
                    <InputOuterFrameBlock
                        marginTop={1}
                        focused={focused[11]}
                        onLayout={e => onLayout(e, 11)}
                    >
                        <TextBlock title={1}>
                            혈액형
                        </TextBlock>
                        <PickerForm
                            validation={validation.bloodType}
                            value={bloodType}
                        />
                    </InputOuterFrameBlock>
                </InputTouchFrameBlock>
                <InputTouchFrameBlock onPress={() => onPressPicker('smoking', smoking, 12)}>
                    <InputOuterFrameBlock
                        marginTop={1}
                        focused={focused[12]}
                        onLayout={e => onLayout(e, 12)}
                    >
                        <TextBlock title={1}>
                            흡연
                        </TextBlock>
                        <PickerForm
                            validation={validation.smoking}
                            value={smoking}
                        />
                    </InputOuterFrameBlock>
                </InputTouchFrameBlock>
                <InputTouchFrameBlock onPress={() => onPressPicker('drinking', drinking, 13)}>
                    <InputOuterFrameBlock
                        marginTop={1}
                        focused={focused[13]}
                        onLayout={e => onLayout(e, 13)}
                    >
                        <TextBlock title={1}>
                            음주
                        </TextBlock>
                        <PickerForm
                            validation={validation.drinking}
                            value={drinking}
                        />
                    </InputOuterFrameBlock>
                </InputTouchFrameBlock>
            </ProfileBlock>
        </ProfileTouchBlock>
    );
};

export default Profile;