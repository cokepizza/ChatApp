import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AuthSignUp from '../../components/auth/AuthSignUp';
import { signUpThunk, setValue } from '../../modules/auth';

const AuthSignUpContainer = ({ navigation }) => {
    const { username, password, passwordConfirm, gender } = useSelector(({ auth }) => ({
        username: auth.signUp.username,
        password: auth.signUp.password,
        passwordConfirm: auth.signUp.passwordConfirm,
        gender: auth.signUp.gender,
    }));

    const dispatch = useDispatch();

    const onChangeText = useCallback((key, value) => {
        dispatch(setValue({
            kind: 'signUp',
            key,
            value,
        }));
    }, [dispatch]);

    const onPressSubmit = useCallback(() => {
        if(password === passwordConfirm) {
            dispatch(signUpThunk({
                username,
                password,
            }));
        }
    }, [dispatch, username, password, passwordConfirm]);

    const onPressNavigate = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    const onPressCheckBox = useCallback((key, value) => {
        dispatch(setValue({
            kind: 'signUp',
            key,
            value,
        }))
    }, [dispatch])

    return (
        <AuthSignUp
            username={username}
            password={password}
            passwordConfirm={passwordConfirm}
            gender={gender}
            onChangeText={onChangeText}
            onPressSubmit={onPressSubmit}
            onPressNavigate={onPressNavigate}
            onPressCheckBox={onPressCheckBox}
        />
    )
};

export default AuthSignUpContainer;