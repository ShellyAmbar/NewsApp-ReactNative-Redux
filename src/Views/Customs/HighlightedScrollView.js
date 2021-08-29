import React from 'react';
import {View, Text, ScrollView, ActivityIndicator, Image} from 'react-native';
import {HighlightedObject} from './HighlightedObject';

const HighlightedScrollView = props => {
  const scrollView = () => {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.dataList.map((data, index) => (
          <View key={index}>
            {data.image ? <HighlightedObject obj={data} /> : null}
          </View>
        ))}
      </ScrollView>
    );
  };

  return (
    <View>
      {props.dataList.length === 0 ? (
        <ActivityIndicator color="black" size="large" />
      ) : (
        scrollView()
      )}
    </View>
  );
};

export default HighlightedScrollView;
