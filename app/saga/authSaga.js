import { call, put } from 'redux-saga/effects';
import { Alert, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import authService from '../services/auth-service';

class AuthSaga {
  * init() {
    const userId = yield call(AsyncStorage.getItem, '@CentralGas:userId');

    console.log(`userId: ${userId}`);

    if (userId) {
      console.log('navigate to home');
      yield put(NavigationActions.navigate({ routeName: 'Home' }));
    }
  }

  * signIn() {
    yield call(console.log, 'sign in');
  }

  * signUp() {
    try {
      yield call(console.log, 'sign up');
      const result = yield call(authService.signUp, 'visuvo@visuvo.com', 'password');
      if (result.code) {
        Alert.alert('Error', result.message);
      }
      else {
        yield call(AsyncStorage.setItem, '@CentralGas:userId', result.uid);
      }
    }
    catch (e) {
      Alert.alert('Error', e.message);
    }
  }
}

export default new AuthSaga();
