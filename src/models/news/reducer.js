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
      const {news} = action.payload;
      const {category} = action.category;
      switch (category) {
        case GENERAL: {
          return {...state, general_news};
        }

        case BUSINESS: {
          return {...state, business_news};
        }

        case ENTERTAINMENT: {
          return {...state, entertainment_news};
        }

        case HEALTH: {
          return {...state, health_news};
        }

        case SCIENCE: {
          return {...state, science_news};
        }

        case SPORTS: {
          return {...state, sports_news};
        }

        case TECHNOLOGY: {
          return {...state, technology_news};
        }
        default:
          return [];
      }
    }
    case GET_NEWS_REQUEST_FAILURE: {
      const {err} = action.err;
      return err;
    }
    default:
      return state;
  }
};

export {reducer};
