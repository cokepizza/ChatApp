import React, { useCallback, useEffect, useRef, createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

const AuthSignUpVerifyContainer = () => {
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
    }));

    const dispatch = useDispatch();

    const inputRef = useRef([ createRef(), createRef() ]);

    const clearFocus = useCallback(() => {
        inputRef.current.forEach(ref => {
            if(ref.blur) {
                ref.blur();
            }
        })
    }, []);

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
    }, [token, verificationTokenInput, clearFocus]);

    const onFocusVerify = () => {
        dispatch(clearValue({
            key: 'verificationTokenError',
        }))
    }

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
            dispatch(disconnectWebsocket());
        }
    }, [verificationTokenFlag]);

    useEffect(() => {
        console.log(timeLimit);
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
            timeLimit={timeLimit}
            createSMSInput={createSMSInput}
            createSMSFlag={createSMSFlag}
            createSMSLoading={createSMSLoading}
            createSMSError={createSMSError}
            verificationTokenInput={verificationTokenInput}
            verificationTokenLoading={verificationTokenLoading}
            verificationTokenError={verificationTokenError}
            onChangeText={onChangeText}
            onPressSubmit={onPressSubmit}
            onPressVerify={onPressVerify}
            onFocusVerify={onFocusVerify}
        />
    );
};

export default AuthSignUpVerifyContainer;