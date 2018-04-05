// @flow

import api from './firebase-api-service'

class AuthService {
  addUser = async () => {
    try {
      await api.userRef('xxx').set({
        name: 'tk',
        password: 'xxx',
      });
      const userSnapshot = await api.userRef('xxx').once('value');
      return { id: userSnapshot.key, ...userSnapshot.val() };
    }
    catch (e) {
      return e;
    }
  };

  signUp = async (email: string, password: string) => {
    try {
      email = email.toLowerCase();
      return await api.auth().createUserWithEmailAndPassword(email, password);
    }
    catch (e) {
      return e;
    }
  };
}

export default new AuthService();
