import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCLb6XCoyyxmaBcRcGZS95PbPmDv00x-1w",
  authDomain: "hotdog-b8844.firebaseapp.com",
  databaseURL: "https://hotdog-b8844.firebaseio.com/",
  storageBucket: "hotdog-b8844.appspot.com"
};

const firebaseApp  = firebase.initializeApp(config);
export default firebaseApp.database().ref("products")