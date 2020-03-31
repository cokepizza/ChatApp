import { createAction, handleActions } from 'redux-actions';

const SET_VALUE = 'profile/SET_VALUE';
const CLEAR_VALUE = 'profile/CLEAR_VALUE';
export const setValue = createAction(SET_VALUE, payload => payload);
export const clearValue = createAction(CLEAR_VALUE);

const initialState = {
    introduction: '',
    introductionWordLimit: 100,
    nickname: '',
    school: '',
    major: '',
    job: '',
    work: '',
    region: '',
    birth: '',
    tall: '',
    shape: '',
    character: '',
    bloodType: '',
    smoking: '',
    drinking: '',
    validation: {
        introduction: false,
        nickname: false,
        school: false,
        major: false,
        job: false,
        work: false,
        region: false,
        birth: false,
        tall: false,
        shape: false,
        character: false,
        bloodType: false,
        smoking: false,
        drinking: false,
    },
};

export default handleActions({
    [SET_VALUE]: (state, { payload: { key, value } }) => ({
        ...state,
        [key]: value,
    }),
    [CLEAR_VALUE]: state => initialState,
}, initialState);