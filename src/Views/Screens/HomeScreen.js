import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {GET_NEWS_REQUEST} from '../../models/news/actions';
import {GENERAL} from '../../models/news/categories';
import {GET_USER_INFO_REQUEST} from '../../models/user/actions';

const mapStateToProps = (state, props) => {
  const {
    general_news,
    business_news,
    entertainment_news,
    health_news,
    science_news,
    sports_news,
    technology_news,
  } = state.news;
  return {
    general_news,
    business_news,
    entertainment_news,
    health_news,
    science_news,
    sports_news,
    technology_news,
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  getNews: () => {
    dispatch({
      type: GET_NEWS_REQUEST,
      payload: {},
    });
  },
});

const Home = ({
  general_news,
  business_news,
  entertainment_news,
  health_news,
  science_news,
  sports_news,
  technology_news,
  getNews,
}) => {
  // useEffect(() => {
  //   getNews();
  // }, [getNews]);
  return (
    <View>
      <Text>Home</Text>

      {science_news && <Text>{science_news.length}</Text>}
      {business_news && <Text>{business_news.length}</Text>}
      {sports_news && <Text>{sports_news.length}</Text>}
      {technology_news && <Text>{technology_news.length}</Text>}
    </View>
  );
};

const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeScreen;
