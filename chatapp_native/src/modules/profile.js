import { createAction, handleActions } from 'redux-actions';

import createRequestThunk, { createRequestActionTypes } from '../lib/createRequestThunk';

import * as profileCtrl from '../lib/api/profile';

const SET_VALUE = 'profile/SET_VALUE';
const CLEAR_VALUE = 'profile/CLEAR_VALUE';
const CLEAR_ALL = 'profile/CLEAR_ALL';
export const setValue = createAction(SET_VALUE, payload => payload);
export const clearValue = createAction(CLEAR_VALUE, payload => payload);
export const clearAll = createAction(CLEAR_ALL);

const [ DUPLICATE_CHECK, DUPLICATE_CHECK_SUCCESS, DUPLICATE_CHECK_FAILURE, DUPLICATE_CHECK_LOADING ] = createRequestActionTypes('profile/DUPLICATE_CHECK');
export const duplicateCheck = createRequestThunk(DUPLICATE_CHECK, profileCtrl.duplicateCheck);


const initialState = {
    introduction: '',
    introductionWordLimit: 100,
    nickname: '',
    school: '',
    major: '',
    job: '',
    work: '',
    region: '',
    birth: '',
    tall: '',
    shape: '',
    character: '',
    bloodType: '',
    smoking: '',
    drinking: '',
    validation: {
        introduction: false,
        nickname: false,
        school: false,
        major: false,
        job: false,
        work: false,
        region: false,
        birth: false,
        tall: false,
        shape: false,
        character: false,
        bloodType: false,
        smoking: false,
        drinking: false,
    },
    duplicateCheckFlag: false,
    duplicateCheckLoading: false,
    duplicateCheckError: false,
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
    }),
    [DUPLICATE_CHECK_FAILURE]: (state, { payload: { error } }) => ({
        ...state,
        duplicateCheckFlag: false,
        duplicateCheckError: error,
    }),
    [DUPLICATE_CHECK_LOADING]: (state, { payload: loading }) => ({
        ...state,
        duplicateCheckLoading: loading,
    }),
}, initialState);