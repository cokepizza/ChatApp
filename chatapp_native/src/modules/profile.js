import { createAction, handleActions } from 'redux-actions';

const SET_VALUE = 'profile/SET_VALUE';
export const setValue = createAction(SET_VALUE, payload => payload);

const initialState = {
    introduction: '',
    introductionWordLimit: 100,
    nickname: '',
    school: '',
    major: '',
    job: '',
    work: '',
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
}, initialState);