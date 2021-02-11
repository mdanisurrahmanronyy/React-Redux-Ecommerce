import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCps_xn8zrXyHnLPOEyl-bfwGlIzxb9Dvs",
    authDomain: "reactreduxecommerce-85333.firebaseapp.com",
    projectId: "reactreduxecommerce-85333",
    storageBucket: "reactreduxecommerce-85333.appspot.com",
    messagingSenderId: "1025552629873",
    appId: "1:1025552629873:web:81faa9d5cbdc44e4b0dbd0"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //export
  export const auth = firebase.auth();

  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();