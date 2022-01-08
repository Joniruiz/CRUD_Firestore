// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQxfhE3r7aQSqD0j1yUNqGrRnm5heN0lg",
  authDomain: "crud-udemy-react-1a065.firebaseapp.com",
  projectId: "crud-udemy-react-1a065",
  storageBucket: "crud-udemy-react-1a065.appspot.com",
  messagingSenderId: "778657073649",
  appId: "1:778657073649:web:6d1a548914867a65d89c50"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export {firebase};