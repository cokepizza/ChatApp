import React from 'react';

import styled, { css } from 'styled-components/native';

const SelectionBlock = styled.View`
    flex: 1;
`;

const RowBlock = styled.View`
    flex: 1;
    flex-direction: row;
`;

const ItemBlock = styled.View`
    flex: 1;
    
    ${props => props.borderRight && css`
        border-right-width: 1px;
        border-right-color: rgba(0, 0, 0, 0.1);
    `}

    ${props => props.borderTop && css`
        border-top-width: 1px;
        border-top-color: rgba(0, 0, 0, 0.1);
    `}
`;

const ItemTouchBlock = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;

    ${props => props.value && css`
        background: rgba(123, 104, 238, 0.05);
    `}
`;

const TextBlock = styled.Text`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);

    ${props => props.value && css`
        color: rgba(123, 104, 238, 0.8);
    `}
`;

const Selection = ({ list, value, onPressItem }) => {
    const selectionRow = [];
    for(let i=0; i<list.length; i+=2) {
        selectionRow.push(
            <RowBlock key={`row_${i}`}>
                <ItemBlock
                    borderRight={1}
                    borderTop={i/2 > 0 ? 1 : 0}
                >
                    <ItemTouchBlock
                        onPress={() => onPressItem(i)}
                        value={value[i]}
                    >
                        <TextBlock value={value[i]}>
                            {list[i]}
                        </TextBlock>
                    </ItemTouchBlock>
                </ItemBlock>
                {list[i+1] && (
                    <ItemBlock
                        borderTop={i/2 > 0 ? 1 : 0}
                    >
                        <ItemTouchBlock
                            onPress={() => onPressItem(i+1)}
                            value={value[i+1]}
                        >
                            <TextBlock value={value[i+1]}>
                                {list[i+1]}
                            </TextBlock>
                        </ItemTouchBlock>
                    </ItemBlock>
                )}
            </RowBlock>
        )
    }

    return (
        <SelectionBlock>
            {selectionRow}
        </SelectionBlock>
    );
};

export default Selection;