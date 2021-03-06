import React, { useState, useEffect } from 'react';
import TextArea from '../../components/common/TextArea';

const TextAreaContainer = ({ inputRef, index, text, textLimit, focused, onFocus, onChangeText }) => {
    const [ textState, setTextState ] = useState(text);
    const [ textLength, setTextLength ] = useState(text.length);

    useEffect(() => {
        setTextState(text);
        setTextLength(text.length);
    }, [text]);

    const onChangeTextState = changedText => {
        onFocus();
        if(changedText.length <= textLimit) {
            setTextState(changedText);
            setTextLength(changedText.length);
            if(onChangeText) {
                onChangeText(changedText);
            }
        }
    }

    return (
        <TextArea
            inputRef={inputRef}
            index={index}
            textState={textState}
            textLength={textLength}
            textLimit={textLimit}
            focused={focused}
            onFocus={onFocus}
            onChangeTextState={onChangeTextState}
        />
    );
};

export default TextAreaContainer;