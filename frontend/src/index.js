import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Page1 from "./App";
import Page2 from "./SignIn";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from "./navbar/navbar";
import Search from "./search/search";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);

reportWebVitals();
