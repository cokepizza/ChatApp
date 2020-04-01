import { createAction, handleActions } from 'redux-actions';

import createRequestThunk, { createRequestActionTypes } from '../lib/createRequestThunk';
import * as verifyCtrl from '../lib/api/verify';

const SET_VALUE = 'verify/SET_VALUE';
export const setValue = createAction(SET_VALUE, payload => payload);

const [ CREATE_SMS, CREATE_SMS_SUCCESS, CREATE_SMS_FAILURE ] = createRequestActionTypes('verify/CREATE_SMS');
export const createSMS = createRequestThunk(CREATE_SMS, verifyCtrl.createSMS);

const initialState = {
    phone: '',
    sendSMS: false,
    sendSMSError: false,
    verificationNumber: '',
    verificationError: false,
};

export default handleActions({
    [SET_VALUE]: (state, { payload: { key, value } }) => ({
        ...state,
        [key]: value,
    }),
    [CREATE_SMS_SUCCESS]: state => ({
        ...state,
        sendSMS: true,
        sendSMSError: false,
    }),
    [CREATE_SMS_FAILURE]: (state, { payload: { error } }) => ({
        ...state,
        sendSMS: true,
        sendSMSError: error,
    })
}, initialState);