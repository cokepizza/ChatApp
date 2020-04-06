import { createAction, handleActions } from 'redux-actions';

import createRequestThunk, { createRequestActionTypes } from '../lib/createRequestThunk';
import * as baseCtrl from '../lib/api/base';

const SET_VALUE = 'base/SET_VALUE';
const CLEAR_VALUE = 'base/CLEAR_VALUE';
const CLEAR_ALL = 'base/CLEAR_ALL';
export const setValue = createAction(SET_VALUE, payload => payload);
export const clearValue = createAction(CLEAR_VALUE, payload => payload);
export const clearAll = createAction(CLEAR_ALL);

const [ DUPLICATE_CHECK, DUPLICATE_CHECK_SUCCESS, DUPLICATE_CHECK_FAILURE, DUPLICATE_CHECK_LOADING ] = createRequestActionTypes('base/DUPLICATE_CHECK')
export const duplicateCheck = createRequestThunk(DUPLICATE_CHECK, baseCtrl.duplicateCheck);

const initialState = {
    username: '',
    password: '',
    passwordConfirm: '',
    gender: '',
    validation: {
        username: false,
        password: false,
        passwordConfirm: false,
        gender: false,
    },
    duplicateCheckFlag: false,
    duplicateCheckLoading: false,
    duplicateCheckError: false,
    duplicateCheckErrorRecord: false,
};

export default handleActions({
    [SET_VALUE]: (state, { payload: { key, value } }) => ({
        ...state,
        [key]: value,
    }),
    [CLEAR_VALUE]: (state, { payload: { key } }) => ({
        ...state,
        [key]: initialState[key],
    }),
    [CLEAR_ALL]: state => initialState,
    [DUPLICATE_CHECK_SUCCESS]: state => ({
        ...state,
        duplicateCheckFlag: true,
        duplicateCheckError: false,
        duplicateCheckErrorRecord: false,
    }),
    [DUPLICATE_CHECK_FAILURE]: (state, { payload: { error } }) => ({
        ...state,
        duplicateCheckFlag: false,
        duplicateCheckError: error,
        duplicateCheckErrorRecord: error,
    }),
    [DUPLICATE_CHECK_LOADING]: (state, { payload: loading }) => ({
        ...state,
        duplicateCheckLoading: loading,
    }),


}, initialState);