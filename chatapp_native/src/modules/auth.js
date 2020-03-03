import { createAction, handleActions } from 'redux-actions';

const SET_CHECK = 'auth/SET_CHECK';
export const setCheck = createAction(SET_CHECK, payload => payload);

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
}, initialState);