import React from 'react';
import styled from 'styled-components/native';

const HomeBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
`

const NavigationTouchBlock = styled.TouchableOpacity`
    width: 200px;
    height: 100px;
    background: blue;
`;

const NavigationTextBlock = styled.Text`
    font-size: 12px;
`;

const Home = ({ onPressNavigate }) => {
    return (
        <HomeBlock>
            <NavigationTouchBlock onPress={onPressNavigate}>
                <NavigationTextBlock>
                    로그아웃
                </NavigationTextBlock>    
            </NavigationTouchBlock>
        </HomeBlock>
    );
};

export default Home;