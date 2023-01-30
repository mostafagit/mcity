import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyD9CHTXyCb94eKE1sQyvx_MsQQSCsCLja4",
    authDomain: "mcity-79fbd.firebaseapp.com",
    projectId: "mcity-79fbd",
    storageBucket: "mcity-79fbd.appspot.com",
    messagingSenderId: "308557241846",
    appId: "1:308557241846:web:1aeaaefcf00fe6c4d93bd7"
  };


  const firebaseApp = initializeApp(firebaseConfig);


  export {
    firebaseApp
  }
