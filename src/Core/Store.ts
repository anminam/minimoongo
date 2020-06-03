import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './reducers';

export const configureStore = () => {

    const sagaMiddleware = createSagaMiddleware();
    let middleware = applyMiddleware(sagaMiddleware);


    // 테스트는 여기다 넣자
    //
    
    const store = createStore(reducers, middleware);
    sagaMiddleware.run(sagas)

    return store;
}