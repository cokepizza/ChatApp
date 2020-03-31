import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/common/Header';

const HeaderContainer = ({ left, center, right, leftNav, rightNav, navigation }) => {
    const { modal } = useSelector(({ modal }) => ({
        modal: modal.modal,
    }));

    console.log(navigation);
    const onPressLeft = () => {
        navigation.navigate(leftNav);
    };

    const onPressRight = () => {
        navigation.navigate(rightNav);
    }
    
    return (
        <Header
            left={left}
            center={center}
            right={right}
            onPressLeft={onPressLeft}
            onPressRight={onPressRight}
            modal={modal}
        />
    );
};

export default HeaderContainer;
