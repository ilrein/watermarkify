import {
  INITIALIZE_APPLICATION,
} from '../constants';

const initializeApplication = token => ({
  type: INITIALIZE_APPLICATION,
  payload: token,
});

export default initializeApplication;
