import { createAction, handleActions } from 'redux-actions';
import AsyncStorage from '@react-native-community/async-storage';

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

const loginMode = async ({ user, token, expiryDate }, dispatch) => {
    try {
        await setAsyncStorage({
            token,
            expiryDate: expiryDate.toString(),
        });
    
        console.dir(typeof expiryDate);
        dispatch(setAuth({
            user,
            token,
            expiryDate,
        }));
    } catch(e) {
        throw e;
    }
}

export const signInThunk = ({ username, password }) => async ( dispatch, getState ) => {
    try {
        const response = await dispatch(signIn({
            username,
            password,
        }));

        console.dir(response.expiryDate);

        await loginMode(response, dispatch);
    } catch(e) {
        console.dir(e);
    }
};

export const signUpThunk = ({ username, password }) => async ( dispatch, getState ) => {
    try {
        const response = await dispatch(signUp({
            username,
            password,
        }));

        await loginMode(response, dispatch);
    } catch(e) {
        console.dir(e);
    }
};

export const authSignInThunk = () => async ( dispatch, getState ) => {
    const {
        auth: { token, expiryDate },
    } = getState();

    if(!token || !expiryDate || new Date(expiryDate) <= new Date()) {
        try {
            const [ token, expiryDate ] = await getAsyncStorage([ 'token', 'expiryDate' ]);
            
        } catch(e) {
            console.dir(e);
        }
        

    }
    

}

export const setAsyncStorage = async obj => {
    const pendingPromiseArr = [];
    Object.keys(obj).forEach(key => {
        pendingPromiseArr.push(AsyncStorage.setItem(`chat:auth:${key}`, obj[key]));
    });
    
    try {
        await Promise.all(pendingPromiseArr);
    } catch(e) {
        throw e;
    }
};

export const getAsyncStorage = async arr => {
    const pendingPromiseArr = [];
    arr.forEach(key => {
        pendingPromiseArr.push(AsyncStorage.getItem(`chat:auth:${key}`));
    });

    try {
        await Promise.all(pendingPromiseArr);
    } catch(e) {
        throw e;
    }
};

const initialState = {
    signIn: {
        username: '',
        password: '',    
    },
    signUp: {
        username: '',
        password: '',
        passwordConfirm: '',    
    },
    auth: null,
    token: null,
    expiryDate: null,
    check: false,
    loading: false,
};

export default handleActions({
    [SET_CHECK]: (state, { payload: check }) => ({
        ...state,
        check,
    }),
    [SET_AUTH]: (state, { payload: { auth, token, expiryDate } }) => ({
        ...state,
        auth,
        token,
        expiryDate,
    }),
    [SET_VALUE]: (state, { payload: { kind, key, value } }) => ({
        ...state,
        [kind]: {
            ...state[kind],
            [key]: value,
        }
    }),
    [CHECK_SUCCESS]: state => state,
    [SIGNIN_SUCCESS]: state => state,
    [SIGNUP_SUCCESS]: state => state,
    [SIGNOUT_SUCCESS]: state => state,
}, initialState);