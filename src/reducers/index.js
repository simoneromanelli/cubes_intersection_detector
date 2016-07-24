import { combineReducers } from 'redux';
import IntersectionReducer from './intersection_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  intersection: IntersectionReducer,
  form: formReducer
});

export default rootReducer;
