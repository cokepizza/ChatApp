import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native';

import AuthCheck from '../../components/auth/AuthCheck';
import { setCheck, autoSignInThunk } from '../../modules/auth';

const AuthCheckContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        (async() => {
            try {
                console.dir('store');
                await dispatch(autoSignInThunk());
            } catch(e) {
                console.dir('AuthCheckContainer');
                console.dir(e);
                setTimeout(() => {
                    dispatch(setCheck(true));
                }, 500);
            }
        })();
    }, [dispatch]);

    return (
        <AuthCheck />
    );
};

export default AuthCheckContainer;