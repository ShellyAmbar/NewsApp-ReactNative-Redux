import React from 'react';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import ListViewItem from './ListViewItem';

const ListViewColumn = props => {
  const dataList = props.dataList;

  const ListView = () => {
    return (
      <ScrollView horizontal="false">
        {dataList.map((data, index) => {
          return <ListViewItem key={index} obj={data} />;
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
