import React, { useCallback, useEffect, useRef, createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Joi from 'react-native-joi';

import AuthSignUpBase from '../../components/auth/AuthSignUpBase';
import { setValue } from '../../modules/base';

const AuthSignUpBaseContainer = ({ navigation }) => {
    const {
        username,
        password,
        passwordConfirm,
        gender,
        validation
    } = useSelector(({ base }) => ({
        username: base.username,
        password: base.password,
        passwordConfirm: base.passwordConfirm,
        gender: base.gender,
        validation: base.validation,
    }));

    const dispatch = useDispatch();

    const inputRef = useRef([ createRef(), createRef(), createRef() ]);
        
    useEffect(() => {
        const schema = Joi.object().keys({
            username: Joi.string().email({ minDomainAtoms: 2 }).min(3).max(30).required(),
            password: Joi.string().min(4).max(15).required(),
            passwordConfirm: Joi.any().valid(Joi.ref('password')).required(),
            gender: Joi.string().min(2).required(),
        });

        const base = {
            username,
            password,
            passwordConfirm,
            gender,
        }
        
        const revisedValidation =
            Object.keys(base)
                .reduce((acc, cur) =>
                    ({
                        ...acc,
                        [cur]: true,
                    }), {});

        const result = Joi.validate(base, schema, { abortEarly: false });

        if(result.error) {
            result.error.details.forEach(detail => {
                revisedValidation[detail.path] = false;
            });
        };

        //  exception
        if(passwordConfirm === '' || passwordConfirm.length < 4 || passwordConfirm.length > 15) {
            revisedValidation.passwordConfirm = false;
        }

        dispatch(setValue({
            key: 'validation',
            value: revisedValidation,
        }));

    }, [dispatch, username, password, passwordConfirm, gender]);

    const onChangeText = useCallback((key, value) => {
        dispatch(setValue({
            key,
            value,
        }));
    }, [dispatch]);

    const onPressCheckBox = useCallback((key, value) => {
        dispatch(setValue({
            key,
            value,
        }))
    }, [dispatch]);

    //  고쳐야 함
    const onPressSubmit = useCallback(() => {
        if(password === passwordConfirm) {
            navigation.navigate('AuthSignUpDetail');
        }
    }, [dispatch, password, passwordConfirm]);

    return (
        <AuthSignUpBase
            inputRef={inputRef}
            username={username}
            password={password}
            passwordConfirm={passwordConfirm}
            gender={gender}
            validation={validation}
            onChangeText={onChangeText}
            onPressSubmit={onPressSubmit}
            onPressCheckBox={onPressCheckBox}
        />
    )
};

export default AuthSignUpBaseContainer;