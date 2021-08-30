import {takeEvery} from 'redux-saga/effects';
import {
  getFavoritesActionError,
  getFavoritesActionSuccess,
  removeFromFavoritesActionError,
  removeFromFavoritesActionSuccess,
  setToFavoritesActionError,
  setToFavoritesActionSuccess,
} from './actionFunctions';
import {GET_FAVORITE_NEWS_REQUEST} from './actions';

function* handler() {
  yield takeEvery(GET_FAVORITE_NEWS_REQUEST, getFavoritesNews);
}

function* getFavoritesNews(action) {
  try {
    const favorites = [];
    getFavoritesActionSuccess(favorites);
  } catch (error) {
    getFavoritesActionError(error);
  }
}
function* addToFavoritesNews(favirte) {
  try {
    setToFavoritesActionSuccess(favirte);
  } catch (error) {
    setToFavoritesActionError(error);
  }
}

function* removeFromFavoritesNews(favirte) {
  try {
    removeFromFavoritesActionSuccess(favirte);
  } catch (error) {
    removeFromFavoritesActionError(error);
  }
}

export {handler};
