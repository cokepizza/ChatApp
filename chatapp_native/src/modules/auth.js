import { createAction, handleActions } from 'redux-actions';

import createRequestThunk, { createRequestActionTypes } from '../lib/createRequestThunk';
import * as authCtrl from '../lib/api/auth';

const SET_CHECK = 'auth/SET_CHECK';
const SET_AUTH = 'auth/SET_AUTH';
const SET_VALUE = 'auth/SET_VALUE';
const [ SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE ] = createRequestActionTypes('auth/SIGNIN');
const [ SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE ] = createRequestActionTypes('auth/SIGNUP');
const [ SIGNOUT, SIGNOUT_SUCCESS, SIGNOUT_FAILURE ] = createRequestActionTypes('auth/SIGNOUT');
const [ CHECK, CHECK_SUCCESS, CHECK_FAILURE ] = createRequestActionTypes('auth/CHECK');
export const setValue = createAction(SET_VALUE, payload => payload);
export const setCheck = createAction(SET_CHECK, payload => payload);
export const setAuth = createAction(SET_AUTH, payload => payload);
export const signIn = createRequestThunk(SIGNIN, authCtrl.signIn);
export const signUp = createRequestThunk(SIGNUP, authCtrl.signUp);
export const signOut = createRequestThunk(SIGNOUT, authCtrl.signOut);
export const check = createRequestThunk(CHECK, authCtrl.check);

const initialState = {
    username: '',
    password: '',
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
    }),
    [SET_VALUE]: (state, { payload: { key, value } }) => ({
        ...state,
        [key]: value,
    }),
    [CHECK_SUCCESS]: (state, { payload: auth }) => ({
        ...state,
        auth,
    }),
    [SIGNIN_SUCCESS]: (state, { payload: auth }) => ({
        ...state,
        auth,
    }),
    [SIGNUP_SUCCESS]: (state, { payload: auth }) => ({
        ...state,
        auth,
    }),
    [SIGNOUT_SUCCESS]: (state) => ({
        ...state,
        auth: initialState.auth,
    }),
}, initialState);