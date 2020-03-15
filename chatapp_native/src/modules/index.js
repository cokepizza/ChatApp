import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import auth from './auth';
import chat, { chatSaga } from './chat';
import image from './image';

const rootReducer = combineReducers({
    auth,
    chat,
    image,
});

export function* rootSaga() {
    yield all([
        chatSaga(),
    ]);
};

export default rootReducer;