import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import { createNavigationEnabledStore } from '@exponent/ex-navigation';

import Persist from './persist';

import rootReducer from './reducer';
let middleware = [];

const errorHandler = store => next => action => {
  try {
    console.log(action);
    return next(action);
  } catch (err) {
    throw err;
  }
};

middleware.push(errorHandler);

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation'
});

export default () => {
  let store = {};
  const enhancers = compose(
    applyMiddleware(...middleware),
    autoRehydrate()
  );
  console.log(rootReducer);
  store = createStoreWithNavigation(
    rootReducer,
    enhancers
  );

  Persist.updateReducers(store);

  return store;
};
