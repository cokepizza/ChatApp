import { createAction, handleActions } from 'redux-actions';

const SET_MODAL = 'modal/SET_MODAL';
const CLEAR_MODAL = 'modal/CLEAR_MODAL';
const SET_VALUE = 'modal/SET_VALUE';
const CLEAR_VALUE = 'modal/CLEAR_VALUE';
export const setModal = createAction(SET_MODAL, payload => payload);
export const clearModal = createAction(CLEAR_MODAL);
export const setValue = createAction(SET_VALUE, payload => payload);
export const clearValue = createAction(CLEAR_VALUE, payload => payload);

const modalInform = {
    'region': {
        name: '지역',
        type: 'picker',
        value: '',
        list: [ '서울', '경기', '인천', '대전', '충북', '충남', '강원', '부산', '경북', '경남', '대구', '울산', '광주', '전북', '전남', '제주' ],
    },
    'birth': {
        name: '생년월일',
        type: 'birth_picker',
        value: [],
        range: [{ s: 1976, e: 2001 }, { s: 1, e: 12 }, { s: 1, e: 31 }],
    },
    'tall': {
        name: '키',
        type: 'picker',
        value: '',
        range: { s: 150, e: 190 },
    },
    
}

const initialState = {
    modal: '',
    modalInform,
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
    [SET_VALUE]: (state, { payload: { key, value } }) => ({
        ...state,
        modalInform: {
            ...state.modalInform,
            [key]: {
                ...state.modalInform[key],
                value,
            },
        }
    }),
    [CLEAR_VALUE]: (state, { payload: { key } }) => ({
        ...state,
        modalInform: {
            ...state.modalInform,
            [key]: initialState.modalInform[key],
        }
    }),
}, initialState);