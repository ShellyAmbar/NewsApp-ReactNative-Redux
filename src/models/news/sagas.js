import {takeEvery} from 'redux-saga/effects';
import {GET_NEWS_REQUEST, GET_NEWS_REQUEST_FAILURE, GET_NEWS_REQUEST_SUCCESS} from './actions';
const url = 'http://api.mediastack.com/v1/news?access_key=';
const api_access_key = 'f0d01386d5b1bd39153cf9373f7626e3';
const languages = [
  'ar',
  'de',
  'en',
  'es',
  'fr',
  'he',
  'it',
  'nl',
  'no',
  'pt',
  'ru',
  'se',
  'zh',
];

function* newsSaga() {
  yield takeEvery(GET_NEWS_REQUEST, getNews(category));
}

function* getNews(category) {
  console.log(category);
  try {
    fetch(`${url}${api_access_key}&${category}`)
      .then(res => res.json())
      .then(result => {

        yield put({
          type: GET_NEWS_REQUEST_SUCCESS,
          category: category,
          payload: result,
      });
      }, error =>{
        yield put({
          type: GET_NEWS_REQUEST_FAILURE,
          err: error,
        });
      })
      


  } catch (error) {
    yield put({
      type: GET_NEWS_REQUEST_FAILURE,
      err: error,
    });
  }
}

export {newsSaga};
