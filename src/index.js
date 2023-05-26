import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const port = process.env.PORT || 3524; // Set the default port to 3524 if PORT is not defined in .env

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

