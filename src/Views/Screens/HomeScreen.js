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
  getNews: category => {
    dispatch({
      type: GET_NEWS_REQUEST,
      category: category,
      payload: {},
    });
  },
});

const HomeScreen = ({
  general_news,
  business_news,
  entertainment_news,
  health_news,
  science_news,
  sports_news,
  technology_news,
}) => {
  useEffect(() => {
    getNews(GENERAL);
  }, [getNews]);
  return <View>{console.log('general_news', general_news)}</View>;
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
export {Home};
