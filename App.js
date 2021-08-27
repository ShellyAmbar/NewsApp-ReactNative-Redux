import React from 'react';
import {store} from './src/models/store';
import {Provider} from 'react-redux';
import {Text, View} from 'react-native';
import {App} from './src/index';

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
