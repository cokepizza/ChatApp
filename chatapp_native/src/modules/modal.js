import { createAction, handleActions } from 'redux-actions';

const SET_MODAL = 'modal/SET_MODAL';
const CLEAR_MODAL = 'modal/CLEAR_MODAL';
const SET_VALUE = 'modal/SET_VALUE';
const CLEAR_VALUE = 'modal/CLEAR_VALUE';
export const setModal = createAction(SET_MODAL, payload => payload);
export const clearModal = createAction(CLEAR_MODAL);
export const setValue = createAction(SET_VALUE, payload => payload);
export const clearValue = createAction(CLEAR_VALUE);

const modalObject = {
    'region': [ '서울', '경기', '인천', '대전', '충북', '충남', '강원', '부산', '경북', '경남', '대구', '울산', '광주', '전북', '전남', '제주' ],
}

const modalName = {
    'region': '지역',
}

const initialState = {
    modal: '',
    selectedValue: '',
    modalObject,
    modalName,
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
    [SET_VALUE]: (state, { payload: { selectedValue } }) => ({
        ...state,
        selectedValue,
    }),
    [CLEAR_VALUE]: state => ({
        ...state,
        selectedValue: initialState.selectedValue,
    }),
}, initialState);