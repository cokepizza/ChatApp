import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

const BaboContainer = () => {
    const { babo } = useSelector(({ babo }) => ({
        babo: babo.babo,
    }), shallowEqual);

    console.log(babo);

    return (
        <>
        </>
    );
};

export default BaboContainer;