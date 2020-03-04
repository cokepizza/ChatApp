import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

const ItemTouchBlock = styled.TouchableOpacity``;

const ItemViewBlock = styled.View`
    width: 100px;
    height: 100px;
    background: blue;
`;

const ItemTextBlock = styled.Text``;

const Item = React.memo(({ item, onPress }) => {
    return (
        <ItemTouchBlock onPress={() => onPress(item.name)}>
            <ItemViewBlock>
                <ItemTextBlock>
                    {item.name}
                </ItemTextBlock>
            </ItemViewBlock>
        </ItemTouchBlock>        
    )
});

const data = [
    { name: 'abc' },
    { name: 'def' },
    { name: 'poi' }
];

const List = ({ onPress }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => `list_${item.name}`}
            renderItem={({ item, index}) => (
                 <Item
                    onPress={onPress}
                    item={item}
                 />
            )}
        />
        // <ListTouchBlock onPress={onPress}>
        //     <ListBlock />
        // </ListTouchBlock>
    );
};

export default List;