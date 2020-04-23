import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Swipe from '../../components/swipe/Swipe';

const SwipeContainer = () => {
    const { user } = useSelector(({ auth }) => ({
        user: auth.user,
    }));

    const dispatch = useDispatch();

    console.log(user);

    return (
        <Swipe />
    );
};

export default SwipeContainer;