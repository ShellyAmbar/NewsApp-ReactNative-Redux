import {GET_NEWS_REQUEST_FAILURE, GET_NEWS_REQUEST_SUCCESS} from './actions';
function newsActionSuccess(payload, category) {
  return {
    type: GET_NEWS_REQUEST_SUCCESS,
    category: category,
    payload: payload,
  };
}
function newsActionError(error) {
  return {
    type: GET_NEWS_REQUEST_FAILURE,
    err: error,
    payload: error,
  };
}

export {newsActionError, newsActionSuccess};
