import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import auth from './auth';
import chat, { chatSaga } from './chat';

//  signUp
import base from './base';
import verify, { verifySaga } from './verify';
import profile from './profile';
import modal from './modal';
import image from './image';

//  main
import store from './store';

const rootReducer = combineReducers({
    auth,

    base,
    verify,
    profile,
    modal,
    image,

    store,
    chat,

});

export function* rootSaga() {
    yield all([
        verifySaga(),
        chatSaga(),
    ]);
};

export default rootReducer;