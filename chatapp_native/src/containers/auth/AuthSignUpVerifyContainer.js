import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AuthSignUpVerify from '../../components/auth/AuthSignUpVerify';
import { setValue, createSMS, verifyToken } from '../../modules/verify';

const AuthSignUpVerifyContainer = () => {
    const { phone, token, sendSMS, sendSMSError, verificationNumber } = useSelector(({ verify }) => ({
        phone: verify.phone,
        token: verify.token,
        sendSMS: verify.sendSMS,
        sendSMSError: verify.sendSMSError,
        verificationNumber: verify.verificationNumber,
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
            token,
        }))
    }, [token]);

    return (
        <AuthSignUpVerify
            phone={phone}
            verificationNumber={verificationNumber}
            sendSMS={sendSMS}
            sendSMSError={sendSMSError}
            onChangeText={onChangeText}
            onPressSubmit={onPressSubmit}
            onPressVerify={onPressVerify}
        />
    );
};

export default AuthSignUpVerifyContainer;