import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import AuthCheck from '../../components/auth/AuthCheck';
import { setCheck, setAuth } from '../../modules/auth';

const AuthCheckContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        (async() => {
            try {
                const auth = await AsyncStorage.getItem('auth:chat');
                if(auth) {
                    
                } else {
                    // dispatch(setCheck(true));
                    dispatch(setAuth(true));
                }
            } catch(e) {
                console.dir(e);
            }
        })();
    }, [dispatch]);

    return (
        <>
        </>
        // <AuthCheck>
        //     <ActivityIndicator color="black" size="large" />
        // </AuthCheck>
    );
};

export default AuthCheckContainer;