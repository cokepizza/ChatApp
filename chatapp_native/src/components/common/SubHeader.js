import React from 'react';
import styled, { css } from 'styled-components/native';

const SubHeaderBlock = styled.View`
    width: 100%;
    height: 60px;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: center;
    /* background: red; */
`;

const SubHeaderTextBlock = styled.Text`
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
`;

const CircleRowBlock = styled.View`
    height: 10px;
    flex-direction: row;
    align-items: center;
`;

const CircleBlock = styled.View`
    height: 8px;
    width: 8px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    margin-right: 3px;

    ${props => props.checked && css`
        background: rgba(123, 104, 238, 0.8);
        height: 9px;
        width: 9px;
    `}

    ${props => props.marginNone && css`
        margin-right: 0px;
    `}
`;

const SubHeader = ({ title, index, total }) => {
    const circleRow = [];
    for(let i=0; i<total; ++i) {
        circleRow.push(
            <CircleBlock
                marginNone={i === total-1}
                checked={i+1 === index}
            />
        );
    }

    return (
        <SubHeaderBlock>
            <CircleRowBlock>
                {circleRow}
            </CircleRowBlock>
            <SubHeaderTextBlock>
                {title}
            </SubHeaderTextBlock>
        </SubHeaderBlock>
    );
};

export default SubHeader;