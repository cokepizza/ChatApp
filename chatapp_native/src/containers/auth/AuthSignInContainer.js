import React, { useCallback, useRef, createRef, useState } from 'react';
import AuthSignIn from '../../components/auth/AuthSignIn';

const AuthSignInContainer = () => {

    const [ focused, setFocused ] = useState([ false, false ]);
    const inputRef = useRef([ createRef(), createRef() ]);

    const onPress = index => {
        console.log('aa');
        // console.log(inputRef.current);
        // if(inputRef.current[index]) {
        inputRef.current[index].focus();
        // inputRef.current[index].blur();
        // }
        
    };

    const onFocus = index => {
        setFocused(prevState => {
            const nextFocused = [ false, false ];
            nextFocused[index] = true;
            return nextFocused;
        })
    };

    return (
        <AuthSignIn
            focused={focused}
            onPress={onPress}
            onFocus={onFocus}
            inputRef={inputRef}
        />
    );
};

export default AuthSignInContainer;