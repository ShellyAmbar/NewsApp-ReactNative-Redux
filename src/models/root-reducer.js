import {reducer as favoritesReducer} from './favorites/reducer';
import {reducer as newsReducer} from './news/reducer';
import {reducer as userReducer} from './user/reducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({
  user: userReducer,
  news: newsReducer,
  favorites: favoritesReducer,
});

export {reducer};
