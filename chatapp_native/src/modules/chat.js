import { createAction, handleActions } from 'redux-actions';
import { takeEvery, fork, take, cancel } from 'redux-saga/effects';
import { connectNamespace } from '../lib/websocket';
import createRequestThunk, { createRequestActionTypes } from '../lib/createRequestThunk';
import * as chatCtrl from '../lib/api/chat';

const CONNECT_WEBSOCKET = 'chat/CONNECT_WEBSOCKET';
const DISCONNECT_WEBSOCKET = 'chat/DISCONNECT_WEBSOCKET';
const INITIALIZE_VALUE = 'chat/INITIALIZE_VALUE';
const CHANGE_VALUE = 'chat/CHANGE_VALUE';

export const initializeValue = createAction(INITIALIZE_VALUE, payload => payload);
export const changeValue = createAction(CHANGE_VALUE, payload => payload);
export const connectWebsocket = createAction(CONNECT_WEBSOCKET, payload => payload);
export const disconnectWebsocket = createAction(DISCONNECT_WEBSOCKET);

const [ SEND_MESSAGE, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILURE ] = createRequestActionTypes('chat/SEND_MESSAGE');
const SET_MESSAGE = 'chat/SET_MESSAGE';
export const sendMessage = createRequestThunk(SEND_MESSAGE, chatCtrl.createMessage);
export const setMessage = createAction(SET_MESSAGE, payload => payload);

function* connectWebsocketSaga (action) {
    const query = action.payload;

    const socketTask = yield fork(connectNamespace, {
        url: 'http://localhost:5000/chat',
        initializeValue,
        changeValue,
        query,
    });

    yield take(DISCONNECT_WEBSOCKET);
    yield cancel(socketTask);
}

export function* chatSaga() {
    yield takeEvery(CONNECT_WEBSOCKET, connectWebsocketSaga);
}

const initialState = {
    message: '',
    messages: [],
};

export default handleActions({
    [INITIALIZE_VALUE]: (state, { payload: { messages } }) => ({
        ...state,
        messages,
    }),
    [CHANGE_VALUE]: (state, { payload: { message } }) => ({
        ...state,
        messages: [ ...state.messages, message ],
    }),
    [SET_MESSAGE]: (state, { payload: { message } }) => ({
        ...state,
        message,
    }),
    [SEND_MESSAGE_SUCCESS]: state => state,
    [SEND_MESSAGE_FAILURE]: state => state,
}, initialState);