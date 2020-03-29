import React, { useCallback } from 'react';
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
    const { modal, inform, value } = useSelector(({ modal }) => ({
        modal: modal.modal,
        inform: modal.inform,
        value: modal.value,
    }), shallowEqual);

    const dispatch = useDispatch();

    let  name, type, list, range, unit, join;
    if(inform[modal]) {
        ({ name, type, list, range, unit, join } = inform[modal]);
    }
    
    const onPressSubmit = useCallback(() => {
        const revisedValue = value[modal].map((val, index) => {
            if(val === '') {
                if(list) {
                    let str = `${list[0]}`;
                    if(typeof list[0] === 'number' && list[0] < 10) {
                        str = '0' + str;
                    }
                    if(unit) {
                        str = str + `${unit[0]}`;
                    }

                    //  다중 리스트 처리 필요
                    return str;
                }
                if(range) {
                    let str = `${range[index].s}`;
                    if(typeof range[index].s === 'number' && range[index].s < 10) {
                        str = '0' + str;
                    }
                    if(unit) {
                        str = str + `${unit[0]}`;
                    }
                    return str;
                }
            }

            return val;
        });

        const valueStr = revisedValue.join(`${join}`);
        
        dispatch(setProfileValue({
            key: modal,
            value: valueStr,
        }));
        dispatch(clearModalValue({
            key: modal,
        }));
        dispatch(clearModal());
    }, [dispatch, modal, value, list, range]);

    const onPressCancel = useCallback(() => {
        dispatch(clearModalValue({
            key: modal,
        }));
        dispatch(clearModal());
    }, [dispatch, modal]);

    const onValueChange = useCallback((selectedValue, itemIndex, modalIndex) => {
        dispatch(setModalValue({
            key: modal,
            index: modalIndex,
            value: selectedValue,
        }));
    }, [dispatch, modal]);

    if(!modal) {
        return (
            <>
            </>
        );
    };

    return (
        <Modal
            name={name}
            type={type}
            list={list}
            range={range}
            unit={unit}
            join={join}
            value={value[modal]}
            onPressSubmit={onPressSubmit}
            onPressCancel={onPressCancel}
            onValueChange={onValueChange}
        />
    );
};

export default ModalContainer;