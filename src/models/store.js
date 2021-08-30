import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducer} from './root-reducer';
import {rootSagas} from './root-saga';
import {handler as userSaga} from './user/sagas';
import {newsSaga} from './news/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);

export {store};
