import {call} from 'redux-saga/effects';
const url = 'http://api.mediastack.com/v1/news?access_key=';
import config from '../../../config/config';

export const getNewsByCategoryCall = category => {
  console.log(
    'url',
    `${url}${config.API_KEY}&categories=${category}&languages=en`,
  );
  //my key is : '60e75124ba99c027323f13266392d25c'
  return fetch(`${url}${config.API_KEY}&categories=${category}&languages=en`);
};
