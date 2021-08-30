import {all, spawn} from 'redux-saga/effects';
import {handler as userSaga} from './user/sagas';
import {
  handlerGetFavorites as getFavoritesSaga,
  handlerAddToFavorites as addToFavoritesSaga,
  handlerRemoveFromFavorites as removeFromFavoritesSaga,
} from './favorites/sagas';
import {newsSaga} from './news/sagas';

function* rootSagas() {
  yield all([
    newsSaga(),
    userSaga(),
    getFavoritesSaga(),
    addToFavoritesSaga(),
    removeFromFavoritesSaga(),
  ]);
}

export {rootSagas};
