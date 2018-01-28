import _ from 'lodash';
import { FETCH_CAKES } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_CAKES:
    return _.mapKeys(action.payload.data.cakes, '_id');
    default:
    return state;
  }
}