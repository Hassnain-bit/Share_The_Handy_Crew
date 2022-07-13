import firebase from 'firebase'; 
const firebaseConfig = {
    apiKey: "AIzaSyAU-vPgFbyDjyOv8rQ2PNHIQRIeI0DYp2U",
    authDomain: "thehandycrew-3fc91.firebaseapp.com",
    projectId: "thehandycrew-3fc91",
    storageBucket: "thehandycrew-3fc91.appspot.com",
    messagingSenderId: "316938907172",
    appId: "1:316938907172:web:e0d96b6f8c4c21b0c2f2b1",
    measurementId: "G-SR50Q10G3L"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebase;