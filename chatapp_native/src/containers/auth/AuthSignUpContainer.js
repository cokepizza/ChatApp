import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Joi from 'react-native-joi';

import AuthSignUp from '../../components/auth/AuthSignUp';
import { signUpThunk, setValue } from '../../modules/auth';

const AuthSignUpContainer = ({ navigation }) => {
    const {
        signUp,
        username,
        nickname,
        password,
        passwordConfirm,
        gender,
        validation
    } = useSelector(({ auth }) => ({
        signUp: auth.signUp,
        username: auth.signUp.username,
        nickname: auth.signUp.nickname,
        password: auth.signUp.password,
        passwordConfirm: auth.signUp.passwordConfirm,
        gender: auth.signUp.gender,
        validation: auth.signUp.validation,
    }));

    const dispatch = useDispatch();
        
    useEffect(() => {
        const schema = Joi.object().keys({
            username: Joi.string().email().min(3).max(20).required(),
            // password: Joi.string().regex()
        });
        
    }, [signUp]);

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
                nickname,
                password,
                gender,
            }));
        }
    }, [dispatch, username, nickname, password, passwordConfirm, gender]);

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
            nickname={nickname}
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