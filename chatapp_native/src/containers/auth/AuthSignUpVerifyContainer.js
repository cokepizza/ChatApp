import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AuthSignUpVerify from '../../components/auth/AuthSignUpVerify';
import { setValue } from '../../modules/verify';

const AuthSignUpVerifyContainer = () => {
    const { phone } = useSelector(({ verify }) => ({
        phone: verify.phone,
    }));

    const dispatch = useDispatch();

    const onChangeText = value => {
        dispatch(setValue({
            key: 'phone',
            value,
        }))
    };
    
    const onPressSubmit = () => {
        
    }

    return (
        <AuthSignUpVerify
            value={phone}
            onChangeText={onChangeText}
            onPressSubmit={onPressSubmit}
        />
    );
};

export default AuthSignUpVerifyContainer;