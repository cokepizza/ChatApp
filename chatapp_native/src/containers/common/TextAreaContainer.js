import React, { useState, useEffect } from 'react';
import TextArea from '../../components/common/TextArea';

const TextAreaContainer = ({ text, textLimit, onChangeText }) => {
    const [ textState, setTextState ] = useState(text);
    const [ textLength, setTextLength ] = useState(text.length);

    useEffect(() => {
        setTextState(text);
        setTextLength(text.length);
    }, [text]);

    const onChangeTextState = changedText => {
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
            textState={textState}
            textLength={textLength}
            textLimit={textLimit}
            onChangeTextState={onChangeTextState}
        />
    );
};

export default TextAreaContainer;