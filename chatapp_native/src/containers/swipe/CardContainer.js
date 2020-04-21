import React from 'react';

import Card from '../../components/swipe/Card';

const CardContainer = ({ item, getRightTagStyle, getLeftTagStyle }) => {
    return (
        <Card
            item={item}
            getRightTagStyle={getRightTagStyle}
            getLeftTagStyle={getLeftTagStyle}
        />
    );
};

export default CardContainer;