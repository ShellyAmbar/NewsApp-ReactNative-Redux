import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import ListViewColumn from '../Customs/ListViewColumn';

const CategoryListScreen = props => {
  const category = props.route.params.category;
  const list = props.route.params.list;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: category,
    });
  }, []);

  return (
    <View>
      {console.log(category)}
      <Text>{category}</Text>
      <ListViewColumn dataList={list} />
    </View>
  );
};

export default CategoryListScreen;
