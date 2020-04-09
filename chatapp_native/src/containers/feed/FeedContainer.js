import React, { useEffect, useState } from 'react';
import Feed from '../../components/feed/Feed';

const FeedContainer = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        //  list 
    }, []);

    return (
        <Feed
            list={list}
        />
    );
};

export default FeedContainer;