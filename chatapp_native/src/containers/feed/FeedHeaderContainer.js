import React from 'react';
import Header from '../../components/common/Header';

const FeedHeaderContainer = ({ left, center, right, onPressLeft, onPressRight }) => {
    
    return (
        <Header
            left={left}
            center={center}
            right={right}
            onPressLeft={onPressLeft}
            onPressRight={onPressRight}
        />
    );
};

export default FeedHeaderContainer;