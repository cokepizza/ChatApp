import React, { useState, useCallback } from 'react';

import Card from '../../components/swipe/Card';

const CardContainer = ({ item, getRightTagStyle, getLeftTagStyle }) => {
    const [ uriIndex, setUriIndex ] = useState(0);
    const uriLength = item.uri.length;

    const onPressLeft = useCallback(() => {
        setUriIndex(prevState => {
            if(prevState-1 >= 0) {
                return prevState-1;
            }
            return prevState;
        });
    }, []);

    const onPressRight = useCallback(() => {
        setUriIndex(prevState => {
            if(prevState+1 < uriLength) {
                return prevState +1;
            }
            return prevState;
        })
    }, [uriLength]);

    
    return (
        <Card
            item={item}
            uriIndex={uriIndex}
            uriLength={uriLength}
            getRightTagStyle={getRightTagStyle}
            getLeftTagStyle={getLeftTagStyle}
            onPressLeft={onPressLeft}
            onPressRight={onPressRight}
        />
    );
};

export default CardContainer;