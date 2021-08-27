import {takeEvery} from 'redux-saga/effects';
import {GET_FAVORITE_NEWS_REQUEST} from './actions';

function* handler() {
  yield takeEvery(GET_FAVORITE_NEWS_REQUEST, getFavoritesNews);
}

function* getFavoritesNews(action) {
  try {
  } catch (err) {}
}

export {handler};
