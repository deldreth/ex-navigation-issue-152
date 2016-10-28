import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';

const reducer = combineReducers({
  navigation: NavigationReducer
});

export default rootReducer = (state, action) => {
  return reducer(state, action);
};
