import React, { useEffect, useState } from 'react';
import Feed from '../../components/feed/Feed';

const FeedContainer = ({ navigation }) => {
    const [ list, setList ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        //  list 
    }, []);

    const onPress = () => {

    };

    const onScroll = () => {

    }

    const onEndReached = () => {

    }

    const onRefresh = () => {

    }

    return (
        <Feed
            list={list}
            loading={loading}
            onRefresh={onRefresh}
            onEndReached={onEndReached}
            onScroll={onScroll}
            onPress={onPress}
        />
    );
};

export default FeedContainer;