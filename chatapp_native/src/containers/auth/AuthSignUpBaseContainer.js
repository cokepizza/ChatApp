import React, { useCallback, useEffect, useRef, createRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Joi from 'react-native-joi';

import AuthSignUpBase from '../../components/auth/AuthSignUpBase';
import { setValue, clearValue, duplicateCheck } from '../../modules/base';

const inputComponentNum = 3;

const AuthSignUpBaseContainer = ({ navigation }) => {
    const {
        username,
        password,
        passwordConfirm,
        gender,
        validation,
        duplicateCheckFlag,
        duplicateCheckLoading,
        duplicateCheckError,
    } = useSelector(({ base }) => ({
        username: base.username,
        password: base.password,
        passwordConfirm: base.passwordConfirm,
        gender: base.gender,
        validation: base.validation,
        duplicateCheckFlag: base.duplicateCheckFlag,
        duplicateCheckLoading: base.duplicateCheckLoading,
        duplicateCheckError: base.duplicateCheckError,
    }));

    const dispatch = useDispatch();

    const [ focused, setFocused ] = useState([ false, false, false, false ]);
    const componentHeight = useRef([ null, null, null, null ]);
    const inputRef = useRef([ createRef(), createRef(), createRef(), createRef() ]);
    const scrollRef = useRef();

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
        clearFocus();
        onFocus(3);
        dispatch(setValue({
            key,
            value,
        }))
    }, [dispatch, onFocus, clearFocus]);

    const onPressUsername = useCallback(() => {
        dispatch(duplicateCheck({
            username,
        }))
    }, [dispatch, username]);

    const clearFocus = useCallback(() => {
        inputRef.current.forEach((input, index) => {
            if(index < inputComponentNum) {
                input.blur();
            }
        });

        setFocused([ false, false, false, false ]);
    }, []);

    const onFocus = useCallback(index => {
        if(scrollRef.current) {
            //  sugar
            console.log(index);
            console.log(componentHeight.current[index]);
            setTimeout(() => {
                scrollRef.current.scrollTo({ y: componentHeight.current[index], animated: true });
            }, 100);
        }

        setFocused(prevState => {
            const nextFocused = [ false, false, false, false ];
            nextFocused[index] = true;
            return nextFocused;
        });
    }, []);

    const onFocusUsername = useCallback(() => {
        onFocus(0);
        dispatch(clearValue({
            key: 'duplicateCheckError'
        }))
    }, [dispatch, onFocus]);

    const onLayout = useCallback(({ nativeEvent: { layout: { x, y, width, height }}}, index) => {
        componentHeight.current[index] = y - 10;
    }, []);

    const onPressFrame = useCallback(index => {
        inputRef.current[index].focus();
    }, []);

    const onPressBackground = useCallback(() => {
        clearFocus();
    }, [clearFocus]);

    const onPressSubmit = useCallback(() => {
        navigation.navigate('AuthSignUpVerify');
    }, [navigation]);

    return (
        <AuthSignUpBase
            inputRef={inputRef}
            scrollRef={scrollRef}
            focused={focused}
            username={username}
            password={password}
            passwordConfirm={passwordConfirm}
            gender={gender}
            validation={validation}
            duplicateCheckFlag={duplicateCheckFlag}
            duplicateCheckLoading={duplicateCheckLoading}
            duplicateCheckError={duplicateCheckError}
            onChangeText={onChangeText}
            onPressUsername={onPressUsername}
            onFocusUsername={onFocusUsername}
            onPressCheckBox={onPressCheckBox}
            onPressSubmit={onPressSubmit}
            onPressFrame={onPressFrame}
            onPressBackground={onPressBackground}
            onLayout={onLayout}
            onFocus={onFocus}
        />
    )
};

export default AuthSignUpBaseContainer;