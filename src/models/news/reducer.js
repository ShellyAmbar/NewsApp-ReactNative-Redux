import {GET_NEWS_REQUEST_SUCCESS, GET_NEWS_REQUEST_FAILURE} from './actions';
import {
  GENERAL,
  BUSINESS,
  ENTERTAINMENT,
  HEALTH,
  SCIENCE,
  SPORTS,
  TECHNOLOGY,
} from './categories';
const initialState = {
  general_news: [],
  business_news: [],
  entertainment_news: [],
  health_news: [],
  science_news: [],
  sports_news: [],
  technology_news: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_REQUEST_SUCCESS: {
      const news = action.payload;
      const category = action.category;
      // console.log('category', category);
      // console.log('news', news);

      switch (category) {
        case GENERAL: {
          state.general_news = news;
          return {...state};
        }

        case BUSINESS: {
          state.business_news = news;
          return {...state};
        }

        case ENTERTAINMENT: {
          state.entertainment_news = news;
          return {...state};
        }

        case HEALTH: {
          state.health_news = news;
          return {...state};
        }

        case SCIENCE: {
          console.log('science');
          state.science_news = news;
          return {...state};
        }

        case SPORTS: {
          state.sports_news = news;
          return {...state};
        }

        case TECHNOLOGY: {
          state.technology_news = news;
          return {...state};
        }
        default:
          return state;
      }
    }
    case GET_NEWS_REQUEST_FAILURE: {
      const {err} = action.err;
      return state;
    }
    default:
      return state;
  }
};

export {reducer};
