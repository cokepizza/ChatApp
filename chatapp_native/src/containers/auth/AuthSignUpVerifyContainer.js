import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AuthSignUpVerify from '../../components/auth/AuthSignUpVerify';
import { setValue, createSMS, verifyToken, connectWebsocket, disconnectWebsocket } from '../../modules/verify';

const AuthSignUpVerifyContainer = () => {
    const { phone, token, timeLimit, sendSMS, sendSMSError, verificationCode } = useSelector(({ verify }) => ({
        phone: verify.phone,
        token: verify.token,
        timeLimit: verify.timeLimit,
        sendSMS: verify.sendSMS,
        sendSMSError: verify.sendSMSError,
        verificationCode: verify.verificationCode,
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
        if(token !== '') {
            dispatch(disconnectWebsocket());
            Promise.resolve().then(() => {
                dispatch(connectWebsocket());
            });
        }
    }, [dispatch, token]);

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
        />
    );
};

export default AuthSignUpVerifyContainer;