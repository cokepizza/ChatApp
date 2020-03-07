import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AuthSignUp from '../../components/auth/AuthSignUp';

const AuthSignUpContainer = () => {
    const { username, password, passwordConfirm } = useSelector(({ auth }) => ({
        username: auth.signUp.username,
        password: auth.signUp.password,
        passwordConfirm: auth.signUp.passwordConfirm,
    }));

    const dispatch = useDispatch();

    const onSubmit = useCallback(() => {

        if(password === passwordConfirm) {
            dispatch(signUp({
                username,
                password,   
            }));
        }
        
    }, [dispatch, username, password]);

    return (
        <AuthSignUp
            username={username}
            password={password}
            passwordConfirm={passwordConfirm}
            onSubmit={onSubmit}
        />
    )
};

export default AuthSignUpContainer;