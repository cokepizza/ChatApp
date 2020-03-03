import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AuthSignInContainer from '../../containers/auth/AuthSignInContainer';
import { setCheck } from '../../modules/auth';

const AuthScreen = () => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     setTimeout(() => {
    //         dispatch(setCheck(false));
    //     }, 2000);
    // }, []);
    

    return (
        <AuthSignInContainer />
    )
};

export default AuthScreen;