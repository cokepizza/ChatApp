import { createAction, handleActions } from 'redux-actions';

import createRequestThunk, { createRequestActionTypes } from '../lib/createRequestThunk';

import * as imageCtrl from '../lib/api/image';

const SET_FILE = 'image/SET_FILE';
const CLEAR_FILE = 'image/CLEAR_FILE';
const SET_IMAGE = 'image/SET_IMAGE';
const CLEAR_IMAGE = 'image/CLEAR_IMAGE';
const SET_LOADING = 'image/SET_LOADING';
const CLEAR_LOADING = 'image/CLEAR_LOADING';
const CLEAR_VALUE = 'image/CLEAR_VALUE';
export const setFile = createAction(SET_FILE, payload => payload);
export const clearFile = createAction(CLEAR_FILE, payload => payload);
export const setImage = createAction(SET_IMAGE, payload => payload);
export const clearImage = createAction(CLEAR_IMAGE, payload => payload);
export const setLoading = createAction(SET_LOADING, payload => payload);
export const clearLoading = createAction(CLEAR_LOADING, payload => payload);
export const clearValue = createAction(CLEAR_VALUE);

const [ CREATE_AUTH_IMAGE, CREATE_AUTH_IMAGE_SUCCESS, CREATE_AUTH_IMAGE_FAILURE ] = createRequestActionTypes('image/CREATE_AUTH_IMAGE');
export const createAuthImage = createRequestThunk(CREATE_AUTH_IMAGE, imageCtrl.createAuthImage);

const initialState = {
    loadings: [ null, null, null, null, null, null ],
    files: [ null, null, null, null, null, null ],
    images: [ null, null, null, null, null, null ],
};

export default handleActions({
    [SET_FILE]: (state, { payload: { index, file } }) => ({
        ...state,
        files: [
            ...state.files.slice(0, index),
            file,
            ...state.files.slice(index+1, state.files.length),
        ],
    }),
    [CLEAR_FILE]: (state, { payload: { index } }) => ({
        ...state,
        files: [
            ...state.files.slice(0, index),
            null,
            ...state.files.slice(index+1, state.files.length),
        ],
    }),
    [SET_IMAGE]: (state, { payload: { index, image } }) => ({
        ...state,
        images: [
            ...state.images.slice(0, index),
            image,
            ...state.images.slice(index+1, state.images.length),
        ]
    }),
    [CLEAR_IMAGE]: (state, { payload: { index } }) => ({
        ...state,
        images: [
            ...state.images.slice(0, index),
            null,
            ...state.images.slice(index+1, state.images.length),
        ]
    }),
    [SET_LOADING]: (state, { payload: { index } }) => ({
        ...state,
        loadings: [
            ...state.loadings.slice(0, index),
            true,
            ...state.loadings.slice(index+1, state.loadings.length),  
        ]
    }),
    [CLEAR_LOADING]: (state, { payload: { index } }) => ({
        ...state,
        loadings: [
            ...state.loadings.slice(0, index),
            false,
            ...state.loadings.slice(index+1, state.loadings.length),  
        ]
    }),
    [CLEAR_VALUE]: state => initialState,
    [CREATE_AUTH_IMAGE_SUCCESS]: state => state,
}, initialState);