import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Selection from '../../components/common/Selection';
import { setValue } from '../../modules/modal';
// import { setValue } from '../../modules/profile';

const SelectionContainer = () => {
    const { modal, value, inform } = useSelector(({ modal }) => ({
        modal: modal.modal,
        value: modal.value,
        inform: modal.inform,
    }));

    const dispatch = useDispatch();

    const onPressItem = index => {
        dispatch(setValue({
            key: modal,
            index,
            value: !value[modal][index],
        }))
    };

    return (
        <Selection
            list={inform[modal].list}
            value={value[modal]}
            onPressItem={onPressItem}
        />
    );
};

export default SelectionContainer;