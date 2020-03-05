import React, { useCallback, useRef, createRef, useState } from 'react';
import AuthSignIn from '../../components/auth/AuthSignIn';

const AuthSignInContainer = () => {

    const [ focused, setFocused ] = useState([ false, false ]);
    const inputRef = useRef([ createRef(), createRef() ]);

    const onPress = index => {
        console.log('Inner onPress');
        inputRef.current[index].focus();
    };

    const onFocus = index => {
        setFocused(prevState => {
            const nextFocused = [ false, false ];
            nextFocused[index] = true;
            return nextFocused;
        })
    };

    const onSubmit = () => {
        onPressBackground();

    }

    const onPressBackground = () => {
        console.log('outer onPress');
        inputRef.current.forEach(input => input.blur());
        setFocused([ false, false ]);
    }

    return (
        <AuthSignIn
            focused={focused}
            onPress={onPress}
            onPressBackground={onPressBackground}
            onSubmit={onSubmit}
            onFocus={onFocus}
            inputRef={inputRef}
        />
    );
};

export default AuthSignInContainer;