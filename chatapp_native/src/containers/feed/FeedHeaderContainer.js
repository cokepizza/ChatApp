import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FeedHeader from '../../components/feed/FeedHeader';

const FeedHeaderContainer = ({ navigation }) => {

    const { coin } = useSelector(({ store }) => ({
        coin: store.coin,
    }));

    const dispatch = useDispatch();

    return (
        <FeedHeader
            coin={coin}
        />
    );
};

export default FeedHeaderContainer;