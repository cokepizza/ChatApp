import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import communication from 'react-native-communications';

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
        console.log('submit');
        communication.text(phone, '안녕하세요 ㅎㅎ');
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