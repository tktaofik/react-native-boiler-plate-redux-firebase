import * as firebase from 'firebase';

/* Fill in your firebase config to start*/
const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
};

firebase.initializeApp(config);

class Api {
  firebase = () => firebase;

  auth = () => firebase.auth();

  rootRef = () => firebase.database().ref();

  usersRef = () => firebase.database().ref('users');

  userRef = id => firebase.database().ref('users').child(id);

}

export default new Api()
