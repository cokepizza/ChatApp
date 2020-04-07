import { createAction, handleActions } from 'redux-actions';
import { takeEvery, fork, take, cancel } from 'redux-saga/effects';
import { connectNamespace } from '../lib/websocket';

import createRequestThunk, { createRequestActionTypes } from '../lib/createRequestThunk';
import * as verifyCtrl from '../lib/api/verify';

const CONNECT_WEBSOCKET = 'verify/CONNECT_WEBSOCKET';
const DISCONNECT_WEBSOCKET = 'verify/DISCONNECT_WEBSOCKET';
const INITIALIZE_VALUE = 'verify/INITIALIZE_VALUE';

export const initializeValue = createAction(INITIALIZE_VALUE, payload => payload);
export const connectWebsocket = createAction(CONNECT_WEBSOCKET, payload => payload);
export const disconnectWebsocket = createAction(DISCONNECT_WEBSOCKET);

const SET_VALUE = 'verify/SET_VALUE';
const CLEAR_VALUE = 'verify/CLEAR_VALUE';
const CLEAR_PRESS_SUBMIT = 'verify/CLEAR_PRESS_SUBMIT';
const CLEAR_ALL = 'verify/CLEAR_ALL';
export const setValue = createAction(SET_VALUE, payload => payload);
export const clearValue = createAction(CLEAR_VALUE, payload => payload);
export const clearPressSubmit = createAction(CLEAR_PRESS_SUBMIT);
export const clearAll = createAction(CLEAR_ALL);


const [ CREATE_SMS, CREATE_SMS_SUCCESS, CREATE_SMS_FAILURE, CREATE_SMS_LOADING ] = createRequestActionTypes('verify/CREATE_SMS');
const [ VERIFY_TOKEN, VERIFY_TOKEN_SUCCESS, VERIFY_TOKEN_FAILURE, VERIFY_TOKEN_LOADING ] = createRequestActionTypes('verify/VERIFY_TOKEN');
export const createSMS = createRequestThunk(CREATE_SMS, verifyCtrl.createSMS);
export const verifyToken = createRequestThunk(VERIFY_TOKEN, verifyCtrl.verifyToken);

function* connectWebsocketSaga (action) {
    const query = action.payload;

    const socketTask = yield fork(connectNamespace, {
        // url: 'https://hixxx.me/chat',
        // url: 'http://192.168.0.11:5000/verify',
        url: 'http://192.168.0.107:5000/verify',
        // url: 'http://172.20.10.3:5000/verify',
        // url: 'http://192.168.0.16:5000/chat',
        // url: 'http://192.168.0.58:5000/chat',
        // url: 'http://52.79.100.5:4000/chat',
        // url: 'http://172.20.10.3:5000/chat',
        initializeValue,
        query,
    });

    yield take(DISCONNECT_WEBSOCKET);
    yield cancel(socketTask);
}

export function* verifySaga() {
    yield takeEvery(CONNECT_WEBSOCKET, connectWebsocketSaga);
}

const initialState = {
    token: '',
    timeFlag: false,
    timeLimit: 0,  
    createSMSInput: '',
    createSMSFlag: false,
    createSMSLoading: false,
    createSMSError: false,
    verificationTokenInput: '',
    verificationTokenFlag: false,
    verificationTokenLoading: false,
    verificationTokenError: false,
    validation: {
        createSMSInput: false,
        verificationTokenInput: false,
    }
};

export default handleActions({
    [SET_VALUE]: (state, { payload: { key, value } }) => ({
        ...state,
        [key]: value,
    }),
    [CLEAR_VALUE]: (state, { payload: { key } }) => ({
        ...state,
        [key]: initialState[key],
    }),
    [CLEAR_PRESS_SUBMIT]: state => ({
        ...initialState,
        validation: {
            ...initialState.verificationTokenInput,
            createSMSInput: state.validation.createSMSInput,
        },
        createSMSInput: state.createSMSInput,
        createSMSLoading: state.createSMSLoading,
    }),
    [CLEAR_ALL]: state => initialState,
    [CREATE_SMS_LOADING]: (state, { payload: loading }) => ({
        ...state,
        createSMSLoading: loading,
    }),
    [VERIFY_TOKEN_LOADING]: (state, { payload: loading }) => ({
        ...state,
        verificationTokenLoading: loading,
    }),
    [INITIALIZE_VALUE]: (state, { payload: { timeLimit, timeFlag } }) => ({
        ...state,
        timeLimit,
        timeFlag,
    }),
    [CREATE_SMS_SUCCESS]: (state, { payload: { token } }) => ({
        ...state,
        token,
        createSMSFlag: true,
        createSMSError: false,
    }),
    [CREATE_SMS_FAILURE]: (state, { payload: { error } }) => ({
        ...state,
        token: initialState.token,
        createSMSFlag: false,
        createSMSError: error,
    }),
    [VERIFY_TOKEN_SUCCESS]: state => ({
        ...state,
        verificationTokenFlag: true,
        verificationTokenError: false,
    }),
    [VERIFY_TOKEN_FAILURE]: (state, { payload: { error } } ) => ({
        ...state,
        verificationTokenFlag: false,
        verificationTokenError: error,
    })
}, initialState);