import {put, takeEvery} from 'redux-saga/effects';
import {
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_REQUEST_FAILURE,
  GET_USER_INFO_REQUEST_SUCCESS,
} from './actions';

function* handler() {
  yield takeEvery(GET_USER_INFO_REQUEST, getAllUserInfo);
}

function* getAllUserInfo(action) {
  console.log(action);
  try {
    //if success
    yield put({
      type: GET_USER_INFO_REQUEST_SUCCESS,
      payload: {
        id: 'idShelly',
        name: 'shelly',
        email: 'shelly@gmail.com',
        token: '45645656rtgr6t546',
      },
    });
  } catch (error) {
    yield put({
      type: GET_USER_INFO_REQUEST_FAILURE,
      err: error,
    });
  }
}

export {handler};
