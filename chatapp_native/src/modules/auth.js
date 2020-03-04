import { createAction, handleActions } from 'redux-actions';

const SET_CHECK = 'auth/SET_CHECK';
const SET_AUTH = 'aith/SET_AUTH';
export const setCheck = createAction(SET_CHECK, payload => payload);
export const setAuth = createAction(SET_AUTH, payload => payload);

const initialState = {
    auth: null,
    check: false,
    loading: false,
};

export default handleActions({
    [SET_CHECK]: (state, { payload: check }) => ({
        ...state,
        check,
    }),
    [SET_AUTH]: (state, { payload: auth }) => ({
        ...state,
        auth,
    })
}, initialState);