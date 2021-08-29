import {put, takeEvery, call} from 'redux-saga/effects';
import {newsActionError, newsActionSuccess} from './actionsFunctions';
const url = 'http://api.mediastack.com/v1/news?access_key=';
const api_access_key = 'f0d01386d5b1bd39153cf9373f7626e3';
import {
  GET_NEWS_REQUEST,
  GET_NEWS_REQUEST_FAILURE,
  GET_NEWS_REQUEST_SUCCESS,
} from './actions';
import {getNewsByCategoryCall} from './calls';
import {
  SCIENCE,
  GENERAL,
  TECHNOLOGY,
  SPORTS,
  ENTERTAINMENT,
  HEALTH,
  BUSINESS,
  CATEGORIES,
} from './categories';
import {NavigationContext} from '@react-navigation/native';

function* newsSaga() {
  yield takeEvery(GET_NEWS_REQUEST, getNews);
}

function* getNewsByCategory(category) {
  console.log('getNewsByCategory');
  try {
    const response = yield call(getNewsByCategoryCall, category);
    const responseBody = yield response.json();
    const data = responseBody.data;

    yield put(newsActionSuccess(data, category));
  } catch (error) {
    yield put(newsActionError(error));
  }
}

function* getNews() {
  let i = 0;

  while (i < CATEGORIES.length) {
    category = CATEGORIES[i];
    yield getNewsByCategory(category);
    i += 1;
  }
}

export {newsSaga};
