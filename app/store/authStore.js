import { takeLatest } from 'redux-saga/effects';
import authSaga from '../saga/authSaga';
import actionPayload from '../services/action-payload-service';

const init = 'init';
const signIn = 'signIn';
const signUp = 'signUp';
const initialState = {
  currentUser: {
    firstName: '',
    lastName: '',
    phone: '',
    id: '',
    email: '',
  },
};

// Actions
export const authActionCreator = {
  init: () => actionPayload(init),
  signIn: state => actionPayload(signIn, state),
  signUp: state => actionPayload(signUp, state),
};

// Action Watchers
export const authActionWatchers = [
  takeLatest(init, authSaga.init),
  takeLatest(signIn, authSaga.signIn),
  takeLatest(signUp, authSaga.signUp),
];

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {

    case signIn:
      return Object.assign({}, state, {
        currentUser: action.state,
      });

    default:
      return state;
  }
};
