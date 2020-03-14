import { createAction, handleActions } from 'redux-actions';

const SET_IMAGE = 'auth/SET_IMAGE';
const CLEAR_IMAGE = 'auth/CLEAR_IMAGE';
const SET_LOADING = 'auth/SET_LOADING';
const CLEAR_LOADING = 'auth/CLEAR_LOADING';
export const setImage = createAction(SET_IMAGE, payload => payload);
export const clearImage = createAction(CLEAR_IMAGE, payload => payload);
export const setLoading = createAction(SET_LOADING, payload => payload);
export const clearLoading = createAction(CLEAR_LOADING, payload => payload);

const initialState = {
    loadings: [ null, null, null, null, null, null ],
    images: [ null, null, null, null, null, null ]
};

export default handleActions({
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
}, initialState);