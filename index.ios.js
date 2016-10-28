/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import {
  createRouter,
  NavigationContext,
  NavigationProvider,
  StackNavigation
} from '@exponent/ex-navigation';

import Screen1 from './app/screen1';

import configureStore from './app/store';
const store = configureStore();
const Router = createRouter(() => ({
  screen1: () => Screen1
}));
const navigationContext = new NavigationContext({
  router: Router,
  store: store
});

export default class exnavigator extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation initialRoute={Router.getRoute('screen1')} />
        </NavigationProvider>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('exnavigator', () => exnavigator);
