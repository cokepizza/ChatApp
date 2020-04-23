import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import HorizontalScroll from '../../components/introduce/HorizontalScroll';

const HorizontalScrollContainer = () => {
    const { items } = useSelector(({ introduce }) => ({
        items: introduce.items,
    }));
    const dispatch = useDispatch();
    const [ itemIndex, setItemIndex ] = useState(0);

    const onScroll = useCallback(({ index }) => {
        setItemIndex(index);
    }, []);

    return (
        <HorizontalScroll
            items={items}    
            itemIndex={itemIndex}
            onScroll={onScroll}
        />
    );
};

export default HorizontalScrollContainer;