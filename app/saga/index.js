import { all } from 'redux-saga/effects';
import { authActionWatchers } from '../store/authStore';

export default function* root() {
  yield all([
    ...authActionWatchers,
  ]);
}
