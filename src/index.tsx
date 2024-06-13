/**
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-06-11 22:48:23
 * @Last Modified by:   Ramiro Luiz Nunes
 * @Last Modified time: 2024-06-11 23:12:25
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';
import './assets/css/tailwind.css';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
