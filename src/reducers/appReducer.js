import {
  INITIALIZE_APPLICATION,
} from '../constants';

export default (state = {
  shopifyToken: {},
}, action) => {
  switch (action.type) {
    case INITIALIZE_APPLICATION:
      return {
        ...state,
        shopifyToken: action.payload,
      }
    default:
      return state;
  }
}
