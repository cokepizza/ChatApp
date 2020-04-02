import { createAction, handleActions } from 'redux-actions';
import { takeEvery, fork, take, cancel } from 'redux-saga/effects';
import { connectNamespace } from '../lib/websocket';

import createRequestThunk, { createRequestActionTypes } from '../lib/createRequestThunk';
import * as verifyCtrl from '../lib/api/verify';

const CONNECT_WEBSOCKET = 'verify/CONNECT_WEBSOCKET';
const DISCONNECT_WEBSOCKET = 'verify/DISCONNECT_WEBSOCKET';
const INITIALIZE_VALUE = 'verify/INITIALIZE_VALUE';
const CHANGE_VALUE = 'verify/CHANGE_VALUE';

export const initializeValue = createAction(INITIALIZE_VALUE, payload => payload);
export const changeValue = createAction(CHANGE_VALUE, payload => payload);
export const connectWebsocket = createAction(CONNECT_WEBSOCKET, payload => payload);
export const disconnectWebsocket = createAction(DISCONNECT_WEBSOCKET);

const SET_VALUE = 'verify/SET_VALUE';
export const setValue = createAction(SET_VALUE, payload => payload);

const [ CREATE_SMS, CREATE_SMS_SUCCESS, CREATE_SMS_FAILURE ] = createRequestActionTypes('verify/CREATE_SMS');
const [ VERIFY_TOKEN, VERIFY_TOKEN_SUCCESS, VERIFY_TOKEN_FAILURE ] = createRequestActionTypes('verify/VERIFY_TOKEN');
export const createSMS = createRequestThunk(CREATE_SMS, verifyCtrl.createSMS);
export const verifyToken = createRequestThunk(VERIFY_TOKEN, verifyCtrl.verifyToken);

function* connectWebsocketSaga (action) {
    const query = action.payload;

    const socketTask = yield fork(connectNamespace, {
        // url: 'https://hixxx.me/chat',
        url: 'http://192.168.0.11:5000/verify',
        // url: 'http://172.20.10.3:5000/verify',
        // url: 'http://192.168.0.16:5000/chat',
        // url: 'http://192.168.0.58:5000/chat',
        // url: 'http://52.79.100.5:4000/chat',
        // url: 'http://172.20.10.3:5000/chat',
        initializeValue,
        changeValue,
        query,
    });

    yield take(DISCONNECT_WEBSOCKET);
    yield cancel(socketTask);
}

export function* verifySaga() {
    yield takeEvery(CONNECT_WEBSOCKET, connectWebsocketSaga);
}

const initialState = {
    phone: '',
    token: '',
    timeLimit: '',
    sendSMS: false,
    sendSMSError: false,
    verificationCode: '',
    verificationError: false,
};

export default handleActions({
    [SET_VALUE]: (state, { payload: { key, value } }) => ({
        ...state,
        [key]: value,
    }),
    [CREATE_SMS_SUCCESS]: (state, { payload: { token } }) => ({
        ...state,
        token,
        sendSMS: true,
        sendSMSError: false,
    }),
    [CREATE_SMS_FAILURE]: (state, { payload: { error } }) => ({
        ...state,
        token: initialState.token,
        sendSMS: true,
        sendSMSError: error,
    }),
    [INITIALIZE_VALUE]: (state, { payload: { timeLimit } }) => ({
        ...state,
        timeLimit,
    }),
    [CHANGE_VALUE]: (state, { payload: { timeLimit } }) => ({
        ...state,
        timeLimit,
    }),
}, initialState);