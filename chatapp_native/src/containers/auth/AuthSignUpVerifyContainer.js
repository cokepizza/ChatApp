import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AuthSignUpVerify from '../../components/auth/AuthSignUpVerify';
import {
    setValue,
    clearValue,
    clearAll,
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
        verificationTokenError: verify.verificationTokenError,

    }));

    const dispatch = useDispatch();

    const [tokenError, setTokenError] = useState(verificationTokenError);

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
        // dispatch(clearAll());
    }, [dispatch, createSMSInput]);

    const onPressVerify = useCallback(() => {
        dispatch(verifyToken({
            code: verificationTokenInput,
            token,
        }));
    }, [token, verificationTokenInput]);

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
        if(verificationTokenFlag && !verificationTokenError) {
            dispatch(disconnectWebsocket());
        }
    }, [verificationTokenFlag, verificationTokenError]);

    useEffect(() => {
        console.log(timeLimit);
        if(timeFlag && timeLimit === 0) {
            dispatch(setValue({
                key: 'verificationTokenError',
                value: '인증 시간이 만료되었습니다'
            }))
        }
    }, [timeFlag, timeLimit]);

    // useEffect(() => {
    //     setTokenError(verificationTokenError);
    // }, [verificationTokenError]);

    return (
        <AuthSignUpVerify
            timeLimit={timeLimit}
            createSMSInput={createSMSInput}
            createSMSFlag={createSMSFlag}
            createSMSLoading={createSMSLoading}
            createSMSError={createSMSError}
            verificationTokenInput={verificationTokenInput}
            verificationTokenError={verificationTokenError}
            onChangeText={onChangeText}
            onPressSubmit={onPressSubmit}
            onPressVerify={onPressVerify}
            onFocusVerify={onFocusVerify}
        />
    );
};

export default AuthSignUpVerifyContainer;