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

  const onClickItem = article => {
    navigation.navigate('ArticleDetails', {article});
  };
  const addToFavorites = () => {};

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
      }}>
      {console.log(category)}
      <Text style={{margin: 20, fontSize: 20, fontWeight: '700'}}>
        {category}
      </Text>
      <ListViewColumn
        onClickStar={addToFavorites}
        onClickItem={onClickItem}
        dataList={list}
      />
    </View>
  );
};

export default CategoryListScreen;
