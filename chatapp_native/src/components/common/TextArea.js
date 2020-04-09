import React from 'react';
import styled, { css } from 'styled-components/native';

// const TextAreaFrameBlock = styled.View`
//     border: 1px dashed rgba(0, 0, 0, 0.2);
//     border-radius: 10px;
//     padding: 10px;
//     height: 150px;
//     align-items: flex-end;
// `;

const TextAreaFrameBlock = styled.View`
    border: 1px dashed rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 10px;
    height: 150px;
    align-items: flex-end;

    ${props => props.focused && css`
        border: 1px dashed rgba(0, 0, 0, 0.8);
    `}
`;

const TextAreaBlock = styled.TextInput`
    /* border: 1px dashed rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 10px;
    height: 150px; */
    height: 110px;
    width: 100%;
`;

const TextViewBlock = styled.Text`
    color: rgba(0, 0, 0, 0.5);
    height: 20px;
`;

const TextArea = ({
    inputRef,
    index,
    textState,
    textLength,
    textLimit,
    focused,
    onFocus,
    onChangeTextState,
}) => {
    return (
        <TextAreaFrameBlock focused={focused}>
            <TextAreaBlock
                ref={ref => inputRef.current[index] = ref}
                multiline={true}
                numberOfLines={4}
                autoCapitalize='none'
                autoCorrect={false}
                allowFontScaling={false}
                value={textState}
                onFocus={onFocus}
                onChangeText={text => onChangeTextState(text)}
            />
            <TextViewBlock>
                {textLength} / {textLimit}
            </TextViewBlock>
        </TextAreaFrameBlock>
    );
};

export default TextArea;