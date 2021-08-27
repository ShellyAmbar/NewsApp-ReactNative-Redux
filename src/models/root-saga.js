import {all, spawn} from 'redux-saga/effects';
import {handler as userSaga} from './user/sagas';
import {handler as favoritesSaga} from './favorites/sagas';
import {newsSaga} from './news/sagas';

function* rootSagas() {
  yield spawn(userSaga), yield spawn(favoritesSaga), yield spawn(newsSaga);
}

export {rootSagas};
