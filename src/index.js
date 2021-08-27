import React from 'react';
import {Text, View} from 'react-native';
import {MyStack} from './utils/router';

const App = ({}) => (
  <View style={{flex: 1, flexDirection: 'column'}}>{<MyStack />}</View>
);

export {App};
