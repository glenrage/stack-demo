import { FETCH_PRODUCTDATA } from '../actions/types';

const DEFAULT_STATE = {};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTDATA:
      return action.payload;
    default:
      return state;
  }
};
