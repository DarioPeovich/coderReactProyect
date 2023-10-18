import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnE8dviQ1C8-wnvWp-ZdrL0cvNT52JQUk",
  authDomain: "react-arduino-ff743.firebaseapp.com",
  projectId: "react-arduino-ff743",
  storageBucket: "react-arduino-ff743.appspot.com",
  messagingSenderId: "794421413470",
  appId: "1:794421413470:web:76b4bdae878e7d706396cf"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
