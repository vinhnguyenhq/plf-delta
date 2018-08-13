import firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyAUvC8haNqLpOTZ3sQZhtFZmzdZRGa4KP4",
  authDomain: "lex-dop-staging.firebaseapp.com",
  databaseURL: "https://lex-dop-staging.firebaseio.com",
  projectId: "lex-dop-staging",
  storageBucket: "lex-dop-staging.appspot.com",
  messagingSenderId: "349474525025"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
