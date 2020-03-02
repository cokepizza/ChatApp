import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk';

import rootReducer, { rootSaga } from './modules';

let composeEnhancers = compose;

if(__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const sagaMiddleware = createSagaMiddleware();
const store = () => {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk, sagaMiddleware)))
    sagaMiddleware.run(rootSaga);

    return store;
};



export default store;