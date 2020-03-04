import React from 'react';
import List from '../../components/chat/List';

const ListContainer = ({ navigation }) => {

    const onPress = name => {
        navigation.navigate('Chat', { name });
    };

    return (
        <List
            onPress={onPress}
        />
    );
};

export default ListContainer;