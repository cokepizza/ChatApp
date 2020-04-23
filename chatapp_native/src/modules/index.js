import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import auth from './auth';

//  signUp
import base from './base';
import verify, { verifySaga } from './verify';
import profile from './profile';
import modal from './modal';
import image from './image';

//  main
import introduce from './introduce';
import chat, { chatSaga } from './chat';
import store from './store';

const rootReducer = combineReducers({
    auth,

    base,
    verify,
    profile,
    modal,
    image,

    introduce,
    chat,
    store,

});

export function* rootSaga() {
    yield all([
        verifySaga(),
        chatSaga(),
    ]);
};

export default rootReducer;