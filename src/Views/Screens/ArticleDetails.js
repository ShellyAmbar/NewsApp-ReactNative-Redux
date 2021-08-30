import React, {useCallback} from 'react';
import {View, Text, Image, Button, Linking, Alert} from 'react-native';
import dateFormat from 'dateformat';

const ArticleDetails = props => {
  const article = props.route.params.article;
  const convertDateToStringFormat = date => {
    return dateFormat(date, 'mmmm dS, yyyy');
  };
  const onClickGoToWebsite = () => {
    const url = article.url;
  };

  const handlePress = useCallback(async () => {
    const url = article.url;
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [article.url]);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
      }}>
      <Text
        style={{
          margin: 10,
          padding: 10,
          fontSize: 30,
          width: '90%',
          textAlign: 'justify',
          fontWeight: '700',
        }}>
        {article.title}
      </Text>
      <Text
        style={{
          margin: 10,
          padding: 10,
          fontSize: 25,
          width: '90%',
          textAlign: 'justify',
          fontWeight: '700',
        }}>
        {`By : ${article.author}, "${
          article.source
        }". Date:${convertDateToStringFormat(article.published_at)}  `}
      </Text>
      <Image
        source={{uri: `${article.image}`}}
        style={{height: 200, width: '90%', borderRadius: 10}}
      />
      <Text
        style={{
          margin: 10,
          padding: 10,
          fontSize: 20,
          width: '90%',
          textAlign: 'justify',
          fontWeight: '400',
        }}>
        {article.description}
      </Text>
      <Button
        onPress={() => handlePress()}
        title="Go to article"
        style={{
          margin: 10,
          padding: 10,
          fontSize: 20,
          width: '90%',
          textAlign: 'justify',
          fontWeight: '700',
        }}
      />
    </View>
  );
};

export default ArticleDetails;
