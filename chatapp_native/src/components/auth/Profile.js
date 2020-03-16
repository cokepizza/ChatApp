import React from 'react';
import styled from 'styled-components/native';

import TextAreaContainer from '../../containers/common/TextAreaContainer';

const ProfileBlock = styled.View`
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    height: 800px;
    /* background: red; */
`;

const InputFrameBlock = styled.View`

`;

const TextBlock = styled.Text`
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
`;

const TextInputBlock = styled.TextInput`
    background: white;
`;

const TextAreaBlock = styled.TextInput`
    border: 1px dashed rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 10px;
    height: 150px;
`;

const Profile = ({ introduction, introductionWordLimit, onChangeText }) => {
    return (
        <ProfileBlock>
            <InputFrameBlock>
                <TextBlock>
                    자기소개
                </TextBlock>
                <TextAreaContainer
                    text={introduction}
                    textLimit={introductionWordLimit}
                    onChangeText={onChangeText}
                />
            </InputFrameBlock>
            {/* <InputFrameBlock>
                <TextBlock>
                    학교
                </TextBlock>
                <TextInputBlock />
            </InputFrameBlock>
            <InputFrameBlock>
                <TextBlock>
                    전공
                </TextBlock>
                <TextInputBlock />
            </InputFrameBlock>
            <InputFrameBlock>
                <TextBlock>
                    학교
                </TextBlock>
                <TextInputBlock />
            </InputFrameBlock> */}

        </ProfileBlock>
    );
};

export default Profile;