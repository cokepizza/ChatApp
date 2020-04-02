import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AuthSignUpVerify from '../../components/auth/AuthSignUpVerify';
import { setValue, createSMS, verifyToken, connectWebsocket, disconnectWebsocket } from '../../modules/verify';

const AuthSignUpVerifyContainer = () => {
    const {
        phone,
        token,
        timeLimit,
        sendSMS,
        sendSMSError,
        verificationCode,
        verificationToken,
        verificationTokenError,
    } = useSelector(({ verify }) => ({
        phone: verify.phone,
        token: verify.token,
        timeLimit: verify.timeLimit,
        sendSMS: verify.sendSMS,
        sendSMSError: verify.sendSMSError,
        verificationCode: verify.verificationCode,
        verificationToken: verify.verificationToken,
        verificationTokenError: verify.verificationTokenError,

    }));

    const dispatch = useDispatch();

    const onChangeText = useCallback((key, value) => {
        dispatch(setValue({
            key,
            value,
        }));
    }, [dispatch]);
    
    const onPressSubmit = useCallback(() => {
        dispatch(createSMS({
            phone,
        }));
    }, [dispatch]);

    const onPressVerify = useCallback(() => {
        dispatch(verifyToken({
            code: verificationCode,
            token,
        }));
    }, [token, verificationCode]);

    useEffect(() => {
        console.dir('token change');
        if(token !== '') {
            console.dir('token change inner');
            console.dir(token);
            dispatch(disconnectWebsocket());
            Promise.resolve().then(() => {
                alert('connect');
                dispatch(connectWebsocket({
                    token,
                }));
            });
        }
    }, [dispatch, token]);

    useEffect(() => {
        if(verificationToken && !verificationTokenError) {
            dispatch(disconnectWebsocket());
            console.log('end verify');
        }
    }, [verificationToken, verificationTokenError])

    return (
        <AuthSignUpVerify
            phone={phone}
            verificationCode={verificationCode}
            timeLimit={timeLimit}
            sendSMS={sendSMS}
            sendSMSError={sendSMSError}
            onChangeText={onChangeText}
            onPressSubmit={onPressSubmit}
            onPressVerify={onPressVerify}
            verificationTokenError={verificationTokenError}
        />
    );
};

export default AuthSignUpVerifyContainer;