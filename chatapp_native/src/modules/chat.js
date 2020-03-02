import { createAction, handleActions } from 'redux-actions';

const PLUS = 'chat/PLUS';
export const plus = createAction(PLUS);

const initialState = {
    num: 0,
};

export default handleActions({
    [PLUS]: (state) => ({
        ...state,
        num: num+1,
    }),
}, initialState);