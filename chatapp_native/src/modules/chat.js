import { createAction, handleActions } from 'redux-actions';
import { takeEvery, fork, take, cancel } from 'redux-saga/effects';

const PLUS = 'chat/PLUS';
const CONNECT_WEBSOCKET = 'chat/CONNECT_WEBSOCKET';
const DISCONNECT_WEBSOCKET = 'chat/DISCONNECT_WEBSOCKET';
const INITIALIZE_VALUE = 'chat/INITIALIZE_VALUE';
const CHANGE_VALUE = 'chat/CHANGE_VALUE';
export const plus = createAction(PLUS);
export const initializeValue = createAction(INITIALIZE_VALUE, payload => payload);
export const changeValue = createAction(CHANGE_VALUE, payload => payload);
export const connectWebsocket = createAction(CONNECT_WEBSOCKET, payload => payload);
export const disconnectWebsocket = createAction(DISCONNECT_WEBSOCKET);

function* connectWebsocketSaga (action) {
    const query = action.payload;

    const socketTask = yield fork(connectNamespace, {
        url: '/chat',
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
    num: 0,
    messages: [],
};

export default handleActions({
    [PLUS]: (state) => ({
        ...state,
        num: state.num+1,
    }),
    [INITIALIZE_VALUE]: (state, { payload: { messages } }) => ({
        ...state,
        messages,
    }),
    [CHANGE_VALUE]: (state, { payload: { message } }) => ({
        ...state,
        messages: [ ...state.messages, message ],
    }),
}, initialState);