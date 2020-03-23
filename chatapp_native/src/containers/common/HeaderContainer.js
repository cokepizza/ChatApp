import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/common/Header';

const HeaderContainer = () => {
    const { modal } = useSelector(({ modal }) => ({
        modal: modal.modal,
    }));
    
    return (
        <Header
            modal={modal}
        />
    );
};

export default HeaderContainer;
