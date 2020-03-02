import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBxAuRZXh_UgbRpWHlzL7eTKBXgUcKmjK4",
  authDomain: "mario-plan-401e0.firebaseapp.com",
  databaseURL: "https://mario-plan-401e0.firebaseio.com",
  projectId: "mario-plan-401e0",
  storageBucket: "mario-plan-401e0.appspot.com",
  messagingSenderId: "583696327766",
  appId: "1:583696327766:web:5256d0bbc833ef4f9447f7",
  measurementId: "G-3JGR0YHJQ6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore.settings({
  timestampsInSnapshots: true
});
firebase.analytics();

export default firebase;
