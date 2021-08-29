import React from 'react';
import {View, Text} from 'react-native';
import RootNavigation from './src/navigation';
import {store} from './src/models/store';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export {App};
