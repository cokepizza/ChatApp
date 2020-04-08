import React from 'react';
import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';

const arr = [
    {
        id: 1,
        title: 'a',
        content: 'adasdasdsaczxczczxcz',
    },
    {
        id: 2,
        title: 'b',
        content: 'adasdasdsaczxczczxcz',
    },
    {
        id: 3,
        title: 'c',
        content: 'adasdasdsaczxczczxcz',
    },
    {
        id: 4,
        title: 'a',
        content: 'adasdasdsaczxczczxcz',
    },
    {
        id: 5,
        title: 'b',
        content: 'adasdasdsaczxczczxcz',
    },
    {
        id: 6,
        title: 'c',
        content: 'adasdasdsaczxczczxcz',
    }
    
];

const ScorllBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
    position: relative;
`;

const ItemBlock = styled.View`
    height: 150px;
    background: red;
    border-radius: 20px;
    flex-direction: row;

    ${props => props.index > 0 && css`
        margin-top: 20px;
    `}
`;

const ItemTitleTextBlock = styled.Text`
    font-size: 40px;
    font-weight: bold;
    background: red;
`;

const ItemBodyTextBlock = styled.Text`
    font-size: 20px;
`;

const LeftBlock = styled.View`
    height: 100%;
    width: 15px;
    background: skyblue;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`;

const RightBlock = styled.View`
    flex: 1;
    padding-left: 20px;
    background: blue;
`;

const ItemTitleViewBlock = styled.View`
    flex: 1;
    justify-content: center;
    /* align-items: center; */
    background: yellow;
`;

const ItemBodyViewBlock = styled.View`
   flex: 1;
`;

const TouchBlock = styled.TouchableOpacity``

const onPress = () => {
    setTimeout(() => {
        alert('press');
    }, 1000);
    
}

const AbsoluteBlock = styled.View`
    position: absolute;
    height: 100px;
    width: 100px;
    background: green;
    justify-content: flex-end;
    align-items: center;
    top: 90%;
    left: 70%;
`;

const Item = React.memo(({ item, index }) => {
    return (
        <TouchBlock onPress={onPress}>
            <ItemBlock index={index}>
                <LeftBlock />
                <RightBlock>
                    <ItemTitleViewBlock>
                        <ItemTitleTextBlock>
                            {item.title}
                        </ItemTitleTextBlock>
                    </ItemTitleViewBlock>
                    <ItemBodyViewBlock>
                        <ItemBodyTextBlock>
                            {item.content}
                        </ItemBodyTextBlock>
                    </ItemBodyViewBlock>
                </RightBlock>
            </ItemBlock>
        </TouchBlock>
    )
});

const Scroll = () => {
    return (
        <ScorllBlock>
            <FlatList
                // contentContainerStyle={{ flexGrow: 1 }}
                data={arr}
                renderItem={({ item, index }) => <Item item={item} index={index} />}
                keyExtractor={item => item.id}
            />
            <AbsoluteBlock />
        </ScorllBlock>
    )
};

export default Scroll;