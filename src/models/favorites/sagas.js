import {takeEvery} from 'redux-saga/effects';
import {favoritesActionError, favoritesActionSuccess} from './actionFunctions';
import {GET_FAVORITE_NEWS_REQUEST} from './actions';

function* handler() {
  yield takeEvery(GET_FAVORITE_NEWS_REQUEST, getFavoritesNews);
}

function* getFavoritesNews(action) {
  try {
    const favorites = [];
    favoritesActionSuccess(favorites);
  } catch (error) {
    favoritesActionError(error);
  }
}
function* addToFavoritesNews(action) {
  try {
  } catch (err) {}
}

function* removeFromFavoritesNews(action) {
  try {
  } catch (err) {}
}

export {handler};
