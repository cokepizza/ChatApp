import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Home from '../../components/home/Home';
import { signOutThunk } from '../../modules/auth';

const HomeContainer = () => {
    const dispatch = useDispatch();

    const onPressNavigate = useCallback(() => {
        dispatch(signOutThunk());
    }, [dispatch]);

    return (
        <Home
            onPressNavigate={onPressNavigate}
        />
    );
};

export default HomeContainer;