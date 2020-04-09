import React from 'react';
import styled, { css } from 'styled-components/native';

import Cocktail from '../../assets/images/cocktail.png';

const HeaderSafeBlock = styled.SafeAreaView`
    background: white;

    ${props => props.modal && css`
        opacity: 0.9;
        background: rgba(0, 0, 0, 0.3);
    `}
`;


const HeaderBlock = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 45px;
    padding-left: 20px;
    padding-right: 20px;
`;

const HeaderViewBlock = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    ${props => props.left && css`
        align-items: flex-start;
    `}

    ${props => props.right && css`
        align-items: flex-end;
    `}
`;

const HeaderTextBlock = styled.Text`
    font-size: 15px;
    
    ${props => props.left && css`
        font-size: 12px;
        color: rgba(0, 0, 0, 0.3);
    `}

    ${props => props.right && css`
        font-size: 12px;
        color: rgba(0, 0, 0, 0.3);
    `}
`;

const HeaderTouchBlock = styled.TouchableOpacity`
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const ImageBlock = styled.Image`
    width: 20px;
    height: 20px;
`;

const FeedHeader = ({ coin }) => {

    return (
        <HeaderSafeBlock>
            <HeaderBlock>
                <HeaderViewBlock left={1}>
                    <HeaderTouchBlock onPress={() => {}}>
                        <HeaderTextBlock left={1}>
                            left
                        </HeaderTextBlock>
                    </HeaderTouchBlock>
                </HeaderViewBlock>
                <HeaderViewBlock />
                <HeaderViewBlock right={1}>
                    <HeaderTouchBlock onPress={() => {}}>
                        <ImageBlock source={Cocktail} />
                        <HeaderTextBlock>
                            {coin}
                        </HeaderTextBlock>
                    </HeaderTouchBlock>
                </HeaderViewBlock>
            </HeaderBlock>
        </HeaderSafeBlock>
    );
};

export default FeedHeader;