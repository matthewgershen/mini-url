import { RECEIVE_TOP } from './../actions/top_actions';


const topReducer = (state = {},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOP:
      return action.top;
    default:
      return state;
  }
};

export default topReducer;
