import React, { useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import Selection from '../../components/common/Selection';
import { setValue, inform } from '../../modules/modal';

const SelectionContainer = () => {
    const { modal, value } = useSelector(({ modal }) => ({
        modal: modal.modal,
        value: modal.value,
    }), shallowEqual);

    const dispatch = useDispatch();

    const onPressItem = useCallback(index => {
        const count = value[modal].reduce((acc, cur) => {
            if(cur) return acc+1;
            return acc;
        }, 0);
        
        if(count+1 > inform[modal].required && !value[modal][index]) {
            return;
        }

        dispatch(setValue({
            key: modal,
            index,
            value: !value[modal][index],
        }))
    }, [dispatch, inform, value, modal]);

    return (
        <Selection
            list={inform[modal].list}
            value={value[modal]}
            onPressItem={onPressItem}
        />
    );
};

export default SelectionContainer;