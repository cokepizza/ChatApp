import React from 'react';

import Card from '../../components/swipe/Card';

const CardContainer = ({ item, getRightTagStyle, getLeftTagStyle }) => {
    
    const onPressLeft = () => {
        
    };

    const onPressRight = () => {

    };
    
    return (
        <Card
            item={item}
            getRightTagStyle={getRightTagStyle}
            getLeftTagStyle={getLeftTagStyle}
            onPressLeft={onPressLeft}
            onPressRight={onPressRight}
        />
    );
};

export default CardContainer;