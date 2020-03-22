import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import auth from './auth';
import chat, { chatSaga } from './chat';
import image from './image';
import profile from './profile';
import modal from './modal';

const rootReducer = combineReducers({
    auth,
    chat,
    image,
    profile,
    modal,
});

export function* rootSaga() {
    yield all([
        chatSaga(),
    ]);
};

export default rootReducer;