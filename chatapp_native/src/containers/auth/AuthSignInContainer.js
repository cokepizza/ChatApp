import React, { useCallback, useRef, createRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AuthSignIn from '../../components/auth/AuthSignIn';
import { signInThunk, setValue } from '../../modules/auth';

const AuthSignInContainer = ({ navigation }) => {
    const { username, password } = useSelector(({ auth }) => ({
        username: auth.signIn.username,
        password: auth.signIn.password,
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

    const clearFocus = useCallback(() => {
        inputRef.current.forEach(input => input.blur());
        setFocused([ false, false ]);
    }, []);

    const onChangeText = useCallback((key, value) => {
        dispatch(setValue({
            kind: 'signIn',
            key,
            value,
        }));
    }, [dispatch]);

    const onPressSubmit = useCallback(() => {
        onPressBackground();
        dispatch(signInThunk({
            username,
            password,
        }));
    }, [dispatch, username, password, onPressBackground]);

    const onPressBackground = useCallback(() => {
        clearFocus();
    }, []);

    const onPressNavigate = useCallback(() => {
        // navigation.navigate('AuthSignUp');
        clearFocus();
        navigation.navigate('AuthSignUpDetail');
    }, [navigation]);

    return (
        <AuthSignIn
            inputRef={inputRef}    
            focused={focused}
            onPress={onPress}
            onPressBackground={onPressBackground}
            onPressNavigate={onPressNavigate}
            onPressSubmit={onPressSubmit}
            onFocus={onFocus}
            onChangeText={onChangeText}
            username={username}
            password={password}
        />
    );
};

export default AuthSignInContainer;