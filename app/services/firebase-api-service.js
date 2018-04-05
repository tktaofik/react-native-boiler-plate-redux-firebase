import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDaJWAwoY5vaP-xqSQbN8pH5zr25PEX6Pg',
  authDomain: 'central-gas.firebaseapp.com',
  databaseURL: 'https://central-gas.firebaseio.com',
  projectId: 'central-gas',
  storageBucket: 'central-gas.appspot.com',
  messagingSenderId: '1071538046772',
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
