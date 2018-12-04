import { RECEIVE_URL_ERRORS, CLEAR_ERRORS } from './../actions/url_actions';

const errorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_URL_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default errorsReducer;
