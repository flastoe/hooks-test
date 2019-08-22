import { ActionTypes } from './actions';

export default (state, action) => {
  switch(action.type) {
    case ActionTypes.SET_USER:
      return { ...action.user };
    default:
      return state;
  }
}