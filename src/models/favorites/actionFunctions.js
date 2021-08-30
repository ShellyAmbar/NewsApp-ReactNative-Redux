import {
  GET_FAVORITE_NEWS_REQUEST_FAILURE,
  GET_FAVORITE_NEWS_REQUEST_SUCCESS,
} from './actions';

function favoritesActionSuccess(payload) {
  return {
    type: GET_FAVORITE_NEWS_REQUEST_SUCCESS,
    payload: payload,
  };
}
function favoritesActionError(error) {
  return {
    type: GET_FAVORITE_NEWS_REQUEST_FAILURE,
    err: error,
    payload: error,
  };
}
export {favoritesActionSuccess, favoritesActionError};
