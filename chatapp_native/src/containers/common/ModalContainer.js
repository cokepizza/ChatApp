import React, { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import Modal from '../../components/common/Modal';
import {
    setValue as setModalValue,
    setModal,
    clearValue as clearModalValue,
    clearModal,
    inform as modalInform
} from '../../modules/modal';
import { setValue as setProfileValue } from '../../modules/profile';

const modalList = Object.keys(modalInform);

//  상위에서 modal이 변경되면 한번, useSelector 내부의 profile이 변경되면서 다시 한번 변경되서 두번의 렌더링이 일어남
//  React.memo로 막는 방법도 있지만 useSelector에서 profile 가져오지 않고 리듀서를 분리함으로써 이 문제를 해결할 수 있음
const ModalContainer = () => {
    const { modal, inform, value } = useSelector(({ modal }) => ({
        modal: modal.modal,
        inform: modal.inform,
        value: modal.value,
    }), shallowEqual);

    const dispatch = useDispatch();

    let  name, type, list, range, unit, join, detail;
    if(inform[modal]) {
        ({ name, type, list, range, unit, join, detail } = inform[modal]);
    }
    
    const onPressSubmit = useCallback(() => {
        let revisedValue = [];
        if(inform[modal].type === 'picker') {
            revisedValue = value[modal].map((val, index) => {
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
        } else if(inform[modal].type === 'selection') {
            revisedValue = value[modal]
                .reduce((acc, cur, index) => {
                    if(cur) {
                        acc.push(inform[modal].list[index]);
                    }
                    return acc;
                }, []);
        }

        const valueStr = revisedValue.join(`${join}`);
        
        dispatch(setProfileValue({
            key: modal,
            value: valueStr,
        }));
        dispatch(clearModalValue({
            key: modal,
        }));

        const currentIndex = modalList.indexOf(modal);
        if(currentIndex === -1) {
            dispatch(clearModal());
        } else {
            dispatch(setModal({
                modal: modalList[currentIndex+1],
            }));
        }        
    }, [dispatch, modal, inform, value, list, range]);

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
            detail={detail}
            value={value[modal]}
            onPressSubmit={onPressSubmit}
            onPressCancel={onPressCancel}
            onValueChange={onValueChange}
        />
    );
};

export default ModalContainer;