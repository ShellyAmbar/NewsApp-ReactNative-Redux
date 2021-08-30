import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ListViewItem from './ListViewItem';

const ListViewColumn = props => {
  const dataList = props.dataList;

  const ListView = () => {
    return (
      <ScrollView style={{padding: 10, marginBottom: 20}} horizontal="false">
        {dataList.map((data, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => props.onClickItem(data)}>
              <ListViewItem onClickStar={props.onClickStar} obj={data} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };
  return (
    <View>
      {dataList.length === 0 ? (
        <ActivityIndicator color="black" size="large" />
      ) : (
        ListView()
      )}
    </View>
  );
};

export default ListViewColumn;
