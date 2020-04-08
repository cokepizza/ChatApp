import React, { useCallback, useEffect, useRef, createRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Joi from 'react-native-joi';

import AuthSignUpVerify from '../../components/auth/AuthSignUpVerify';
import {
    setValue,
    clearValue,
    clearPressSubmit,
    createSMS,
    verifyToken,
    connectWebsocket,
    disconnectWebsocket
} from '../../modules/verify';

const AuthSignUpVerifyContainer = ({ navigation }) => {
    const {
        token,
        timeLimit,
        timeFlag,
        createSMSInput,
        createSMSFlag,
        createSMSLoading,
        createSMSError,
        verificationTokenInput,
        verificationTokenFlag,
        verificationTokenLoading,
        verificationTokenError,
        validation,
    } = useSelector(({ verify }) => ({
        token: verify.token,
        timeLimit: verify.timeLimit,
        timeFlag: verify.timeFlag,
        createSMSInput: verify.createSMSInput,
        createSMSFlag: verify.createSMSFlag,
        createSMSLoading: verify.createSMSLoading,
        createSMSError: verify.createSMSError,
        verificationTokenInput: verify.verificationTokenInput,
        verificationTokenFlag: verify.verificationTokenFlag,
        verificationTokenLoading: verify.verificationTokenLoading,
        verificationTokenError: verify.verificationTokenError,
        validation: verify.validation,
    }));

    const dispatch = useDispatch();

    const [ focused, setFocused ] = useState([ false, false ]);
    const inputRef = useRef([ createRef(), createRef() ]);

    const clearFocus = useCallback(() => {
        inputRef.current.forEach(ref => {
            if(ref.blur) {
                ref.blur();
            }
        });

        setFocused([ false, false ]);
    }, []);

    const onFocus = useCallback(index => {
        setFocused(prevState => {
            const nextFocused = [ false, false ];
            nextFocused[index] = true;
            return nextFocused;
        });
    }, []);

    const onFocusVerify = useCallback(() => {
        onFocus(1);
        dispatch(clearValue({
            key: 'verificationTokenError',
        }));
    }, [dispatch, onFocus]);

    const onChangeText = useCallback((key, value) => {
        dispatch(setValue({
            key,
            value,
        }));
    }, [dispatch]);
    
    const onPressSubmit = useCallback(() => {
        dispatch(createSMS({
            createSMSInput,
        }));
        dispatch(disconnectWebsocket());
        dispatch(clearPressSubmit());
        clearFocus();
    }, [dispatch, createSMSInput, clearFocus]);

    const onPressVerify = useCallback(() => {
        dispatch(verifyToken({
            code: verificationTokenInput,
            token,
        }));
        clearFocus();
    }, [token, verificationTokenInput, token, clearFocus]);

    useEffect(() => {
        const schema = Joi.object().keys({
            createSMSInput: Joi.string().min(10).max(11).required(),
            verificationTokenInput: Joi.string().min(6).max(6).required(),
        });

        const verify = {
            createSMSInput,
            verificationTokenInput,
        }

        const revisedValidation =
            Object.keys(verify)
                .reduce((acc, cur) =>
                    ({
                        ...acc,
                        [cur]: true,
                    }), {});

        const result = Joi.validate(verify, schema, { abortEarly: false });

        if(result.error) {
            result.error.details.forEach(detail => {
                revisedValidation[detail.path] = false;
            });
        };

        dispatch(setValue({
            key: 'validation',
            value: revisedValidation,
        }));
    }, [dispatch, createSMSInput, verificationTokenInput]);

    useEffect(() => {
        if(token !== '') {
            dispatch(disconnectWebsocket());
            Promise.resolve().then(() => {
                dispatch(connectWebsocket({
                    token,
                }));
            });
        }
    }, [dispatch, token]);

    //  verification success
    useEffect(() => {
        if(verificationTokenFlag) {
            navigation.navigate('AuthSignUpDetail');
            dispatch(disconnectWebsocket());
        }
    }, [verificationTokenFlag]);

    useEffect(() => {
        if(timeFlag && timeLimit === 0) {
            dispatch(setValue({
                key: 'verificationTokenError',
                value: '인증 시간이 만료되었습니다'
            }))
        }
    }, [timeFlag, timeLimit]);

    return (
        <AuthSignUpVerify
            inputRef={inputRef}
            focused={focused}
            timeLimit={timeLimit}
            createSMSInput={createSMSInput}
            createSMSFlag={createSMSFlag}
            createSMSLoading={createSMSLoading}
            createSMSError={createSMSError}
            verificationTokenInput={verificationTokenInput}
            verificationTokenLoading={verificationTokenLoading}
            verificationTokenError={verificationTokenError}
            validation={validation}
            onChangeText={onChangeText}
            onPressSubmit={onPressSubmit}
            onPressVerify={onPressVerify}
            onFocusVerify={onFocusVerify}
            onFocus={onFocus}
        />
    );
};

export default AuthSignUpVerifyContainer;