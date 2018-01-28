import { combineReducers } from 'redux';
import CakesReducer from '.reducer_cakes';

const rootReducer = combineReducers({
  cakes: CakesReducer

});

export default rootReducer;