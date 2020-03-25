import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import Modal from '../../components/common/Modal';
import {
    setValue as setModalValue,
    clearValue as clearModalValue,
    clearModal,
} from '../../modules/modal';
import { setValue as setProfileValue } from '../../modules/profile';

//  상위에서 modal이 변경되면 한번, useSelector 내부의 profile이 변경되면서 다시 한번 변경되서 두번의 렌더링이 일어남
//  React.memo로 막는 방법도 있지만 useSelector에서 profile 가져오지 않고 리듀서를 분리함으로써 이 문제를 해결할 수 있음
const ModalContainer = () => {
    const { modal, modalInform } = useSelector(({ modal }) => ({
        modal: modal.modal,
        modalInform: modal.modalInform,
    }), shallowEqual);

    const dispatch = useDispatch();

    let  name, type, list, value;
    if(modalInform[modal]) {
        console.log(modalInform[modal]);
        ({ name, type, list, value } = modalInform[modal]);
    }
    
    if(!modal) {
        return (
            <>
            </>
        )
    }

    console.log(modal);

    const onPressSubmit = () => {
        dispatch(setProfileValue({
            key: modal,
            value,
        }));
        // dispatch(clearModalValue({
        //     key: modal,
        // }));
        dispatch(clearModal());
    };

    const onPressCancel = () => {
        // dispatch(clearModalValue({
        //     key: modal,
        // }));
        dispatch(clearModal());
    };

    const onValueChange = (value, index) => {
        dispatch(setModalValue({
            key: modal,
            value,
        }));
    }

    return (
        <Modal
            name={name}
            type={type}
            list={list}
            value={value}
            onPressSubmit={onPressSubmit}
            onPressCancel={onPressCancel}
            onValueChange={onValueChange}
        />
    );
};

export default ModalContainer;