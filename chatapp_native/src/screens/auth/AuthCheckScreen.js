import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styled from 'styled-components/native';
import { setCheck } from '../../modules/auth';

const AuthCheckScreenBlock = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: white;
`;

const AuthCheckScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    console.log(navigation);
    useEffect(() => {
        (async() => {
            try {
                const auth = await AsyncStorage.getItem('auth:chat');
                if(auth) {
                    
                } else {
                    // navigation.navigate('AuthSignIn');
                    dispatch(setCheck(true));
                }
            } catch(e) {
                console.dir(e);
            }
        })();
    }, [dispatch]);

    return (
        <AuthCheckScreenBlock>
            <ActivityIndicator color="black" size="large" />
        </AuthCheckScreenBlock>
    )
};

AuthCheckScreen.navigationOptions = {
    headerShown: false,
}

export default AuthCheckScreen;