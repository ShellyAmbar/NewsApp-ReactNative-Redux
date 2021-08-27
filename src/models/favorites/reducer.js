import {
  GET_FAVORITE_NEWS_REQUEST_SUCCESS,
  GET_FAVORITE_NEWS_REQUEST_FAILURE,
} from './actions';
const initialState = {
  news: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITE_NEWS_REQUEST_SUCCESS: {
      const {news} = action.payload;
      return {news};
    }
    case GET_FAVORITE_NEWS_REQUEST_FAILURE: {
      const {err} = action.err;
      return err;
    }
    default:
      return state;
  }
};

export {reducer};
