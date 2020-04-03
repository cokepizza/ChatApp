import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AuthSignUpVerify from '../../components/auth/AuthSignUpVerify';
import { setValue, createSMS, verifyToken, connectWebsocket, disconnectWebsocket } from '../../modules/verify';

const AuthSignUpVerifyContainer = () => {
    const {
        phone,
        token,
        timeLimit,
        timeFlag,
        sendSMS,
        sendSMSError,
        verificationCode,
        verificationToken,
        verificationTokenError,
    } = useSelector(({ verify }) => ({
        phone: verify.phone,
        token: verify.token,
        timeLimit: verify.timeLimit,
        timeFlag: verify.timeFlag,
        sendSMS: verify.sendSMS,
        sendSMSError: verify.sendSMSError,
        verificationCode: verify.verificationCode,
        verificationToken: verify.verificationToken,
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

    useEffect(() => {
        console.log(verificationToken);
        console.log(timeLimit);
        if(timeFlag && timeLimit === 0) {
            setTokenError('인증 시간이 만료되었습니다');
        }
    }, [timeFlag, timeLimit]);

    useEffect(() => {
        setTokenError(verificationTokenError);
    }, [verificationTokenError]);

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
            tokenError={tokenError}
        />
    );
};

export default AuthSignUpVerifyContainer;