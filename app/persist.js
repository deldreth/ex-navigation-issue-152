import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';

const updateReducers = (store) => {
  const reducerVersion = '1';
  const config = {
    storage: AsyncStorage
  };
  const startup = () => store.dispatch({ type: 'APP_LOADED' });

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion').then((localVersion) => {
    if (localVersion !== reducerVersion) {
      // Purge store and refresh
      persistStore(store, config, startup).purge();
      AsyncStorage.setItem('reducerVersion', reducerVersion);
    } else {
      persistStore(store, config, startup);
    }
  }).catch(() => {
    persistStore(store, config, startup);
    AsyncStorage.setItem('reducerVersion', reducerVersion);
  });
};

export default {updateReducers};
