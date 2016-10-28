import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import { createNavigationEnabledStore } from '@exponent/ex-navigation';
import createLogger from 'redux-logger';

import Persist from './persist';

import rootReducer from './reducer';
let middleware = [];
const logger = createLogger();

middleware.push(logger);

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

  store = createStoreWithNavigation(
    rootReducer,
    enhancers
  );

  Persist.updateReducers(store);

  return store;
};
