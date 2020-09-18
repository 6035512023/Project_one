import firebase from 'firebase'


var firebaseConfig = {


    apiKey: "AIzaSyA5eGER9vM_JQkM_VCpPQ5kXSN1mOiHCDY",
    authDomain: "login-cga.firebaseapp.com",
    databaseURL: "https://login-cga.firebaseio.com",
    projectId: "login-cga",
    storageBucket: "login-cga.appspot.com",
    messagingSenderId: "191736939700",
    appId: "1:191736939700:web:90bf37ad7b3b3bb705c3e1",
    measurementId: "G-RN17ZJ43BR"

  
  };
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;