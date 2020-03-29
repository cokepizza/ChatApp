import { createAction, handleActions } from 'redux-actions';

const SET_MODAL = 'modal/SET_MODAL';
const CLEAR_MODAL = 'modal/CLEAR_MODAL';
const SET_VALUE = 'modal/SET_VALUE';
const CLEAR_VALUE = 'modal/CLEAR_VALUE';
export const setModal = createAction(SET_MODAL, payload => payload);
export const clearModal = createAction(CLEAR_MODAL);
export const setValue = createAction(SET_VALUE, payload => payload);
export const clearValue = createAction(CLEAR_VALUE, payload => payload);

const inform = {
    'region': {
        name: '지역',
        type: 'picker',
        list: [ '서울', '경기', '인천', '대전', '충북', '충남', '강원', '부산', '경북', '경남', '대구', '울산', '광주', '전북', '전남', '제주' ],
    },
    'birth': {
        name: '생년월일',
        type: 'picker',
        join: '-',
        unit: ['', '', ''],
        range: [{ s: 1976, e: 2001 }, { s: 1, e: 12 }, { s: 1, e: 31 }],
    },
    'tall': {
        name: '키',
        type: 'picker',
        unit: ['cm'],
        range: [{ s: 150, e: 190 }],
    },
    'shape': {
        name: '체형',
        type: 'picker',
        list: ['마른', '슬림탄탄', '보통', '건장한', '근육질', '통통한'],
    },
    'character': {
        name: '성격',
        type: 'selection',
        join: ', ',
        list: ['지적인', '차분한', '유머있는', '낙천적인', '내향적인', '외향적인', '감성적인', '상냥한', '귀여운', '열정적인', '듬직한', '개성있는'],
    },
    'bloodType': {
        name: '혈액형',
        type: 'picker',
        list: ['A', 'B', 'O', 'AB'],
    },
    'smoking': {
        name: '흡연여부',
        type: 'picker',
        list: ['흡연', '비흡연'],
    },
    'drinking': {
        name: '음주여부',
        type: 'picker',
        list: ['마시지 않음', '가끔 마심', '어느 정도 즐김', '술자리를 즐김'],
    }
}

const initialState = {
    modal: '',
    value: {
        region: [''],
        birth: ['', '', ''],
        tall: [''],
        shape: [''],
        character: [false, false, false, false, false, false, false, false, false, false, false, false],
        bloodType: [''],
        smoking: [''],
        drinking: [''],
    },
    inform,
};

export default handleActions({
    [SET_MODAL]: (state, { payload: { modal } }) => ({
        ...state,
        modal,
    }),
    [CLEAR_MODAL]: state => ({
        ...state,
        modal: initialState.modal,
    }),
    [SET_VALUE]: (state, { payload: { key, index, value } }) => { console.log(state); return {
        ...state,
        value: {
            ...state.value,
            [key]: [
                ...state.value[key].slice(0, index),
                value,
                ...state.value[key].slice(index+1, state.value[key].length),
            ],
        },
    }},
    [CLEAR_VALUE]: (state, { payload: { key } }) => ({
        ...state,
        value: {
            ...state.value,
            [key]: initialState.value[key],
        },
    }),
}, initialState);