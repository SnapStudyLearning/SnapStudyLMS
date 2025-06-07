
const firebaseConfig = {
  apiKey: "AIzaSyAhV4oQ41qfd_WT5-hY1OyecV3nM_oXDU8",
  authDomain: "snap-study-b4927.firebaseapp.com",
  projectId: "snap-study-b4927",
  storageBucket: "snap-study-b4927.appspot.com",
  messagingSenderId: "1087420945958",
  appId: "1:1087420945958:web:115be8f6e92c35a226b8e7",
  measurementId: "G-5DE8KMJF6F"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
