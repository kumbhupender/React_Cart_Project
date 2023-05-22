import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as firebase from 'firebase'; 
// import 'firebase/firestore';
import firebase from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjZGTFo5z7gXf38hmaAMhhg9cA05hWrWo",
  authDomain: "cart-c4b55.firebaseapp.com",
  projectId: "cart-c4b55",
  storageBucket: "cart-c4b55.appspot.com",
  messagingSenderId: "977469476313",
  appId: "1:977469476313:web:c62f2fc13dd9457e1eddc8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


