import React from 'react';
import styled, { css } from 'styled-components/native';

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
`;

const ImageBlock = styled.Image`
    width: 18px;
    height: 18px;
`;

const FeedHeader = ({ modal, left, center, right, onPressLeft, onPressRight }) => {

    return (
        <HeaderSafeBlock modal={modal}>
            <HeaderBlock>
                <HeaderViewBlock left={1}>
                    {left &&(
                        <HeaderTouchBlock onPress={onPressLeft}>
                            <HeaderTextBlock left={1}>
                                {left}
                            </HeaderTextBlock>
                        </HeaderTouchBlock>
                    )}
                </HeaderViewBlock>
                <HeaderViewBlock>
                    <HeaderTextBlock>
                        {center}
                    </HeaderTextBlock>
                </HeaderViewBlock>
                <HeaderViewBlock right={1}>
                    <HeaderTouchBlock onPress={onPressRight}>
                        <ImageBlock src={} />
                        
                    </HeaderTouchBlock>
                </HeaderViewBlock>
            </HeaderBlock>
        </HeaderSafeBlock>
    );
};

export default FeedHeader;