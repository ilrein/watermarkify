import {
  INITIALIZE_APPLICATION,
  RECEIVED_ACCESS_TOKEN,
} from '../constants';

export default (state = {
  shopifyToken: {},
  accessToken: null,
}, action) => {
  switch (action.type) {
    case INITIALIZE_APPLICATION:
      return {
        ...state,
        shopifyToken: action.payload,
      }
    case RECEIVED_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      }
    default:
      return state;
  }
}
