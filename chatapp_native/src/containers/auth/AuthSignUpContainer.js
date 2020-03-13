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
        validation: auth.validation.signUp,
    }));

    const dispatch = useDispatch();
        
    useEffect(() => {
        const schema = Joi.object().keys({
            username: Joi.string().email({ minDomainAtoms: 2 }).min(3).max(30).required(),
            nickname: Joi.string().min(4).max(15).required(),
            password: Joi.string().min(4).max(15).required(),
            passwordConfirm: Joi.any().valid(Joi.ref('password')).required(),
            gender: Joi.string().min(2).required(),
        });
        
        const revisedValidation =
            Object.keys(signUp)
                .reduce((acc, cur) =>
                    ({
                        ...acc,
                        [cur]: true,
                    }), {});

        const result = Joi.validate(signUp, schema, { abortEarly: false });

        if(result.error) {
            result.error.details.forEach(detail => {
                revisedValidation[detail.path] = false;
            });
        };

        //  exception
        const confirm = signUp.passwordConfirm;
        if(confirm === '' || confirm.length < 4 || confirm.length > 15) {
            revisedValidation.passwordConfirm = false;
        }

        dispatch(setValue({
            kind: 'validation',
            key: 'signUp',
            value: revisedValidation,
        }));

    }, [dispatch, signUp]);

    const onChangeText = useCallback((key, value) => {
        dispatch(setValue({
            kind: 'signUp',
            key,
            value,
        }));
    }, [dispatch]);

    const onPressSubmit = useCallback(() => {
        // if(password === passwordConfirm) {
        //     dispatch(signUpThunk({
        //         username,
        //         nickname,
        //         password,
        //         gender,
        //     }));
        // }
        navigation.navigate('AuthSignUpDetail');
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
            validation={validation}
            onChangeText={onChangeText}
            onPressSubmit={onPressSubmit}
            onPressNavigate={onPressNavigate}
            onPressCheckBox={onPressCheckBox}
        />
    )
};

export default AuthSignUpContainer;