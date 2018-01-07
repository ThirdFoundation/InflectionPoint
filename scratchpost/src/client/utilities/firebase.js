import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCSXWXLV9GeEZrnAiDrDek7j3dwTZMOn_o",
  authDomain: "i-scratchpost.firebaseapp.com",
  databaseURL: "https://i-scratchpost.firebaseio.com",
  projectId: "i-scratchpost",
  storageBucket: "",
  messagingSenderId: "510555846164"
};

firebase.initializeApp(config);

export default firebase;