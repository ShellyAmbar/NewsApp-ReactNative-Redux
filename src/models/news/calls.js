import {call} from 'redux-saga/effects';
const url = 'http://api.mediastack.com/v1/news?access_key=';
import config from '../../../config/config';

export const getNewsByCategoryCall = category => {
  console.log(
    'url',
    `${url}${config.API_KEY}&categories=${category}&languages=en`,
  );

  return fetch(`${url}${config.API_KEY}&categories=${category}&languages=en`);
};
