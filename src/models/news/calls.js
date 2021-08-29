import {call} from 'redux-saga/effects';
const url = 'http://api.mediastack.com/v1/news?access_key=';
const api_access_key = 'e1460d5a6646a777b5de445040411029';

export const getNewsByCategoryCall = category => {
  console.log(
    'url',
    `${url}${api_access_key}&categories=${category}&languages=en`,
  );

  return fetch(`${url}${api_access_key}&categories=${category}&languages=en`);
};
