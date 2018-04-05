import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import auth from './authStore';
import sagas from '../saga'
import navReducer from './navStore'

const reducers = combineReducers({
  auth,
  nav: navReducer,
});

const createAppStore = () => {
  const reduxNavMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav);
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware, reduxNavMiddleware),
  );
  sagaMiddleware.run(sagas);
  return store;
};

export default createAppStore();
