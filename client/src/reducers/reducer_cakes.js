import _ from 'lodash';
import { FETCH_CAKES, FETCH_CAKE } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_CAKE:
    // const cake = action.payload.data.cake;
    // const newState = { ...state};
    // newState[post.id] = post;
    // return newState;
    return {...state [action.payload.data.cake._id]: action.payload.data.cake };
    case FETCH_CAKES:
    return _.mapKeys(action.payload.data.cakes, '_id');
    default:
    return state;
  }
}