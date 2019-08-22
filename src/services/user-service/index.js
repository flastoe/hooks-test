import reducer from './reducer';
import { actions, ActionTypes } from './actions';
import UserContext from './context';
import initialState from './initial-state';

export { UserContext, actions, ActionTypes };
export default {
  Context: UserContext,
  reducer,
  initialState
}
