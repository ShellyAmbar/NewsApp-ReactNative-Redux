import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {GET_NEWS_REQUEST} from '../../models/news/actions';
import {
  BUSINESS,
  CATEGORIES,
  ENTERTAINMENT,
  GENERAL,
  HEALTH,
  SCIENCE,
  SPORTS,
  TECHNOLOGY,
} from '../../models/news/categories';
import {GET_USER_INFO_REQUEST} from '../../models/user/actions';
import HighlightedScrollView from '../Customs/HighlightedScrollView';
import OptionsScrollView from '../Customs/OptionsScrollView';

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
  useEffect(() => {
    getNews();
  }, [getNews]);

  const navigation = useNavigation();

  const getListOfCategory = category => {
    switch (category) {
      case BUSINESS:
        return business_news;
      case ENTERTAINMENT:
        return entertainment_news;
      case SPORTS:
        return sports_news;
      case HEALTH:
        return health_news;
      case SCIENCE:
        return science_news;
      case TECHNOLOGY:
        return technology_news;
      case GENERAL:
        return general_news;
      default:
        return general_news;
    }
  };

  const onClickCategory = category => {
    console.log(category);
    const list = getListOfCategory(category);
    navigation.navigate('CategoryList', {category, list});
  };
  return (
    <View>
      <OptionsScrollView
        dataList={CATEGORIES}
        onClickOption={onClickCategory}
      />
      <HighlightedScrollView dataList={general_news} />
    </View>
  );
};

const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeScreen;
