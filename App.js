import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './app/index';

export const appStore = store;

export default () => (
  <Provider store={store}>
    <App/>
  </Provider>
);
