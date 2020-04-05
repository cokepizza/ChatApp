import { createAction, handleActions } from 'redux-actions';
import createRequestThunk, { createRequestActionTypes } from '../lib/createRequestThunk';

const SET_VALUE = 'base/SET_VALUE';
export const setValue = createAction(SET_VALUE, payload => payload);

const initialState = {
    username: '',
    password: '',
    passwordConfirm: '',
    gender: '',
    validation: {
        username: '',
        password: '',
        passwordConfirm: '',
        gender: '',
    }
};

export default handleActions({
    [SET_VALUE]: (state, { payload: { key, value } }) => ({
        ...state,
        [key]: value,
    }),
}, initialState);