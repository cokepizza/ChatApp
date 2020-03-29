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

}

const initialState = {
    modal: '',
    value: {
        region: [''],
        birth: ['', '', ''],
        tall: [''],
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