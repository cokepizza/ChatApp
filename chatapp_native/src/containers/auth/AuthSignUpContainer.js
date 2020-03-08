import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AuthSignUp from '../../components/auth/AuthSignUp';
import { signUp, setValue } from '../../modules/auth';

const AuthSignUpContainer = ({ navigation }) => {
    const { username, password, passwordConfirm } = useSelector(({ auth }) => ({
        username: auth.signUp.username,
        password: auth.signUp.password,
        passwordConfirm: auth.signUp.passwordConfirm,
    }));

    const dispatch = useDispatch();

    const onChangeText = useCallback((key, value) => {
        dispatch(setValue({
            kind: 'signUp',
            key,
            value,
        }));
    }, [dispatch])

    const onPressSubmit = useCallback(() => {
        if(password === passwordConfirm) {
            dispatch(signUp({
                username,
                password,
            }));
        }
    }, [dispatch, username, password, passwordConfirm]);

    const onPressNavigate = useCallback(() => {
        navigation.goBack();
    }, []);

    return (
        <AuthSignUp
            username={username}
            password={password}
            passwordConfirm={passwordConfirm}
            onChangeText={onChangeText}
            onPressSubmit={onPressSubmit}
            onPressNavigate={onPressNavigate}
        />
    )
};

export default AuthSignUpContainer;