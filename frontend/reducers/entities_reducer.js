import { combineReducers } from 'redux';
import topReducer from './top_reducer';
import urlReducer from './url_reducer';


const entitiesReducer = combineReducers({
  url: urlReducer,
  top: topReducer
});

export default entitiesReducer;
