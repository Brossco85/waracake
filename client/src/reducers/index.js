import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import CakesReducer from './reducerCakes';

const rootReducer = combineReducers({
  cakes: CakesReducer,
  form: formReducer
});



export default rootReducer;