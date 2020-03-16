import { createAction, handleActions } from 'redux-actions';

const SET_VALUE = 'profile/SET_VALUE';
export const setValue = createAction(SET_VALUE, payload => payload);

const initialState = {
    introduction: '',
    introductionWordLimit: 100,
};

export default handleActions({
    [SET_VALUE]: (state, { payload: { key, value } }) => ({
        ...state,
        [key]: value,
    }),
}, initialState);