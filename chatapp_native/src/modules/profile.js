import { createAction, handleActions } from 'redux-actions';

const SET_VALUE = 'profile/SET_VALUE';
const OPEN_MODAL = 'profile/OPEN_MODAL';
const CLOSE_MODAL = 'profile/CLOSE_MODAL';
export const setValue = createAction(SET_VALUE, payload => payload);
export const openModal = createAction(OPEN_MODAL, payload => payload);
export const closeModal = createAction(CLOSE_MODAL, payload => payload);

const initialState = {
    introduction: '',
    introductionWordLimit: 100,
    nickname: '',
    school: '',
    major: '',
    job: '',
    work: 'hihi',
    region: '',
    tags: '',
    validation: {
        introduction: false,
        nickname: false,
        school: false,
        major: false,
        job: false,
        work: false,
        region: false,
        tags: false,
    },
    modal: false,
};

export default handleActions({
    [SET_VALUE]: (state, { payload: { key, value } }) => ({
        ...state,
        [key]: value,
    }),
    [OPEN_MODAL]: state => ({
        ...state,
        modal: true,
    }),
    [CLOSE_MODAL]: state => ({
        ...state,
        modal: false,
    }),
}, initialState);