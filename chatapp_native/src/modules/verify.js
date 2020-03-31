import { createAction, handleActions } from 'redux-actions';

const SET_VALUE = 'verify/SET_VALUE';
export const setValue = createAction(SET_VALUE, payload => payload);

const initialState = {
    phone: '',
};

export default handleActions({
    [SET_VALUE]: (state, { payload: { key, value } }) => ({
        ...state,
        [key]: value,
    }),
}, initialState);