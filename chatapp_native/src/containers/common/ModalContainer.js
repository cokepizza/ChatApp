import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import Modal from '../../components/common/Modal';
import { setValue as setModalValue, clearModal, clearValue } from '../../modules/modal';
import { setValue as setProfileValue } from '../../modules/profile';

//  상위에서 modal이 변경되면 한번, useSelector 내부의 profile이 변경되면서 다시 한번 변경되서 두번의 렌더링이 일어남
//  React.memo로 막는 방법도 있지만 useSelector에서 profile 가져오지 않고 리듀서를 분리함으로써 이 문제를 해결할 수 있음
const ModalContainer = () => {
    const {  modal, modalObject, modalName, selectedValue } = useSelector(({ modal }) => ({
        modal: modal.modal,
        modalObject: modal.modalObject,
        modalName: modal.modalName,
        selectedValue: modal.selectedValue,
    }), shallowEqual);

    const dispatch = useDispatch();

    const modalArr = modalObject[modal] ? modalObject[modal] : null;
    const modalTitle = modalName[modal] ? modalName[modal] : null;

    const onPressSubmit = () => {
        dispatch(setProfileValue({
            key: modal,
            value: selectedValue,
        }));
        dispatch(clearValue());
        dispatch(clearModal());
    };

    const onPressCancel = () => {
        dispatch(clearValue());
        dispatch(clearModal());
    };

    const onValueChange = (selectedValue, index) => {
        dispatch(setModalValue({
            selectedValue,
        }));
    }

    return (
        <Modal
            modalTitle={modalTitle}
            modalArr={modalArr}
            selectedValue={selectedValue}
            onPressSubmit={onPressSubmit}
            onPressCancel={onPressCancel}
            onValueChange={onValueChange}
        />
    );
};

export default ModalContainer;