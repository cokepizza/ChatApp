export const createRequestActionTypes = type => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    const LOADING = `${type}_LOADING`;
    return [ type, SUCCESS, FAILURE, LOADING ];
};

export default function createRequestThunk (type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    const LOADING = `${type}_LOADING`;
    return params => async dispatch => {
        dispatch({
            type: LOADING,
            payload: true,
        });

        try {
            const response = await request(params);
            dispatch({
                type: SUCCESS,
                payload: response.data,
            });
            dispatch({
                type: LOADING,
                payload: false,
            });
            return response.data;
        } catch(e) {
            dispatch({
                type: FAILURE,
                payload: e.response.data,
                error: true,
            });
            dispatch({
                type: LOADING,
                payload: false,
            });
            throw e;
        }
    }
};