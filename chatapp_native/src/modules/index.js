import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import chat, { chatSaga } from './chat';

const rootReducer = combineReducers({
    chat,
});

export function* rootSaga() {
    yield all([
        chatSaga(),
    ]);
};

export default rootReducer;