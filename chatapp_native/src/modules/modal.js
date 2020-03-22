import { createAction, handleActions } from 'redux-actions';

const SET_MODAL = 'modal/SET_MODAL';
const CLEAR_MODAL = 'modal/CLEAR_MODAL';
export const setModal = createAction(SET_MODAL, payload => payload);
export const clearModal = createAction(CLEAR_MODAL, payload => payload);

const modalObject = {
    'region': [ '서울', '경기', '인천', '대전', '충북', '충남', '강원', '부산', '경북', '경남', '대구', '울산', '광주', '전북', '전남', '제주' ],
}

const initialState = {
    modalType: null,
    modalObject,
};

export default handleActions({
    [SET_MODAL]: (state, { payload: { modalType } }) => ({
        ...state,
        modalType,
    }),
    [CLEAR_MODAL]: state => ({
        ...state,
        modalType: initialState.modalType,
    }),
}, initialState);