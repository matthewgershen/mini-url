import { RECEIVE_URL } from './../actions/url_actions';


const urlReducer = (state = {},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_URL:
      return action.url;
    default:
      return state;
  }
};

export default urlReducer;
