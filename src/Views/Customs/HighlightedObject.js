import React from 'react';
import {View, Text, Image} from 'react-native';

const HighlightedObject = props => {
  const obj = props.obj;
  return (
    <View style={{height: 240, width: 200, margin: 10}}>
      <Image
        source={{uri: `${obj.image}`}}
        style={{height: 200, width: 200, borderRadius: 10}}
      />
      <Text style={{fontSize: 12, width: '100%', textAlign: 'justify'}}>
        {obj.title}
      </Text>
    </View>
  );
};

export {HighlightedObject};
