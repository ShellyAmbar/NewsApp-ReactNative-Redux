import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import RootNavigation from './src/navigation';
import {store} from './src/models/store';
import {Provider} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

const App = () => {
  useEffect(() => {
    EStyleSheet.build();
  }, []);
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export {App};
