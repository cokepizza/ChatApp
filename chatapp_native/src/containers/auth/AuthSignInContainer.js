import React, { useCallback, useRef, createRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthSignIn from '../../components/auth/AuthSignIn';
import { signIn } from '../../modules/auth';

const AuthSignInContainer = () => {
    const { username, password } = useSelector(({ auth }) => ({
        username: auth.username,
        password: auth.password,
    }));

    const dispatch = useDispatch();

    const [ focused, setFocused ] = useState([ false, false ]);
    const inputRef = useRef([ createRef(), createRef() ]);

    const onPress = useCallback(index => {
        inputRef.current[index].focus();
    }, []);

    const onFocus = useCallback(index => {
        setFocused(prevState => {
            const nextFocused = [ false, false ];
            nextFocused[index] = true;
            return nextFocused;
        })
    }, []);

    const onSubmit = useCallback(() => {
        onPressBackground();
        dispatch(signIn({
            username,
            password, 
        }));
    }, [dispatch, onPressBackground]);

    const onPressBackground = useCallback(() => {
        inputRef.current.forEach(input => input.blur());
        setFocused([ false, false ]);
    }, []);

    const onChangeText = useCallback((key, value) => {
        dispatch(
            setValue({
                key,
                value,
            })
        );
    }, [dispatch])

    return (
        <AuthSignIn
            inputRef={inputRef}    
            focused={focused}
            onPress={onPress}
            onPressBackground={onPressBackground}
            onSubmit={onSubmit}
            onFocus={onFocus}
            onChangeText={onChangeText}
            username={username}
            password={password}
        />
    );
};

export default AuthSignInContainer;