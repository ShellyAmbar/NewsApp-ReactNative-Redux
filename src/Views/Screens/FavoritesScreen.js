import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {
  ADD_TO_FAVORITE_NEWS_REQUEST,
  GET_FAVORITE_NEWS_REQUEST,
  REMOVE_FROM_FAVORITE_NEWS_REQUEST,
} from '../../models/favorites/actions';
import ListViewColumn from '../Customs/ListViewColumn';

const mapStateToProps = (state, props) => {
  const {news} = state.favorites;
  console.log('mapState', news.length);
  return {news};
};

const mapDispatchToProps = (dispatch, props) => ({
  getFavoritesNews: () => {
    dispatch({
      type: GET_FAVORITE_NEWS_REQUEST,
      payload: {},
    });
  },
  removeFromFavoritesNews: favorite => {
    dispatch({
      type: REMOVE_FROM_FAVORITE_NEWS_REQUEST,
      payload: favorite,
    });
  },
});

const Favorites = ({news, getFavoritesNews, removeFromFavoritesNews}) => {
  const navigation = useNavigation();
  //const [list, setList] = useState([]);
  const onClickItem = article => {
    navigation.navigate('ArticleDetails', {article});
  };
  const removeFromFavorites = favorite => {
    removeFromFavoritesNews(favorite);
  };

  useEffect(() => {
    getFavoritesNews();
  }, []);

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
      <Text style={{margin: 20, fontSize: 20, fontWeight: '700'}}>
        Favorites
      </Text>
      {console.log('NEWWWS', news)}
      <Text>{news && news.length}</Text>
      {news && news.length > 0 && (
        <ListViewColumn
          onClickStar={removeFromFavorites}
          onClickItem={onClickItem}
          dataList={news}
        />
      )}
    </View>
  );
};
const FavoritesScreen = connect(mapStateToProps, mapDispatchToProps)(Favorites);
export default FavoritesScreen;
