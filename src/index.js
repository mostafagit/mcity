import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "./Resources/css/app.css"
import App from './App';
import { firebaseApp} from "./firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(firebaseApp);

const FireApp =(props)=>{
  return(
    <App {...props} />
  )
}

onAuthStateChanged(auth, (user)=>{
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <FireApp user={user} />
    </BrowserRouter>
    // </React.StrictMode>
  );
})