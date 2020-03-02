import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styled from 'styled-components/native';

const AuthCheckBlock = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: white;
`;

const AuthCheck = ({ navigation }) => {
    useEffect(() => {
        (async() => {
            try {
                const auth = await AsyncStorage.getItem('auth:chat');
                if(auth) {
                    
                } else {
                    navigation.navigate('MainNavigator');
                }
            } catch(e) {
                console.dir(e);
            }
        })();
    }, []);

    return (
        <AuthCheckBlock>
            <ActivityIndicator color="black" size="large" />
        </AuthCheckBlock>
    )
};

AuthCheck.navigationOptions = {
    headerShown: false,
}

export default AuthCheck;