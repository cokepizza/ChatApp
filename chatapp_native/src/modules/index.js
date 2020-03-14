import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import auth from './auth';
import chat, { chatSaga } from './chat';
import uploadImage from './uploadImage';

const rootReducer = combineReducers({
    auth,
    chat,
    uploadImage,
});

export function* rootSaga() {
    yield all([
        chatSaga(),
    ]);
};

export default rootReducer;