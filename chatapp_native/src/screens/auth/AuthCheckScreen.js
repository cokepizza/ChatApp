import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styled from 'styled-components/native';

const AuthCheckScreenBlock = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: white;
`;

const AuthCheckScreen = ({ navigation }) => {
    useEffect(() => {
        (async() => {
            try {
                const auth = await AsyncStorage.getItem('auth:chat');
                if(auth) {
                    
                } else {
                    navigation.navigate('Main');
                }
            } catch(e) {
                console.dir(e);
            }
        })();
    }, []);

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