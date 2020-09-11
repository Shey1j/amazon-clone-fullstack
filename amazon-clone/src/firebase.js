import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7asUIW37i0q7ifzOd0sxdpp3Tvd_dxUw",
  authDomain: "clone-d8b0e.firebaseapp.com",
  databaseURL: "https://clone-d8b0e.firebaseio.com",
  projectId: "clone-d8b0e",
  storageBucket: "clone-d8b0e.appspot.com",
  messagingSenderId: "871550544802",
  appId: "1:871550544802:web:6c5f588612e4c61001e0fb",
  measurementId: "G-4NDTGVMPBS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };