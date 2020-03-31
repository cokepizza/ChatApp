import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/common/Header';

const HeaderContainer = ({ left, center, right, leftNav, rightNav, navigation, ...rest }) => {
    const { modal } = useSelector(({ modal }) => ({
        modal: modal.modal,
    }));

    const onPressLeft = useCallback(() => {
        navigation.navigate(leftNav);
    }, [navigation, leftNav]);

    const onPressRight = useCallback(() => {
        navigation.navigate(rightNav);
    }, [navigation, rightNav]);
    
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
