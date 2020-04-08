import React from 'react';
import styled from 'styled-components/native';

const FeedBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
`;

const FeedScrollBlock = styled.ScrollView`
`;

const ItemBlock = styled.View`
    width: 100px;
    height: 100px;
    border: 1px solid black;
`;

const ItemRowBlock = styled.View`
    flex-direction: row;
`;

const Feed = ({ list }) => {
    const rowList = [];
    for(let i=0; i<list; i+=3) {
        rowList.push(
            <ItemRowBlock>
                {list.splice(0, 3).map(item => (
                    <ItemBlock item={item} />
                ))}
            </ItemRowBlock>
        );
    }

    return (
        <FeedBlock>
            <FeedScrollBlock>
                {rowList}
            </FeedScrollBlock>
        </FeedBlock>
    );
};

export default Feed;