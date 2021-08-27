import {
  GET_USER_INFO_REQUEST_SUCCESS,
  GET_USER_INFO_REQUEST_FAILURE,
} from './actions';
const initialState = {
  id: 'id1',
  token: 'token1',
  name: 'name1',
  email: 'email1',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO_REQUEST_SUCCESS: {
      const {id, token, name, email} = action.payload;
      return {id, token, name, email};
    }
    case GET_USER_INFO_REQUEST_FAILURE: {
      const {err} = action.err;
      return err;
    }
    default:
      return state;
  }
};

export {reducer};
