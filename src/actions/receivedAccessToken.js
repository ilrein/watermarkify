import {
  RECEIVED_ACCESS_TOKEN,
} from '../constants';

const receivedAccessToken = token => ({
  type: RECEIVED_ACCESS_TOKEN,
  payload: token,
});

export default receivedAccessToken;
