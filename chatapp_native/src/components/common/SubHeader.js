import React from 'react';
import styled, { css } from 'styled-components/native';

const SubHeaderBlock = styled.View`
    /* width: 100%; */
    flex: 1;
    height: 50px;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: center;
    background: yellow;
`;

const SubHeaderTextBlock = styled.Text`
    font-size: 15px;
`;

const CircleRowBlock = styled.View`
    flex-direction: row;
`;

const CircleBlock = styled.View`
    height: 15px;
    width: 15px;
    background: red;
    border-radius: 30px;

    ${props => props.checked && css`
        background: red;
    `}
`;

const SubHeader = ({ title, index, total }) => {
    const circleRow = [];
    for(let i=0; i<total; ++i) {
        circleRow.push(
            <CircleBlock checked={i+1 === index}/>
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