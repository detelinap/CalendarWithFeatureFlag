import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as configcat from "configcat-js";

let logger = configcat.createConsoleLogger(3); // Setting log level to 3 (Info)

let configCatClient = configcat.createClient("W6_ZCCKiu0OEHmjAj20Klg/IlLo3lAr20-OmT8oQaw4XQ", { // <-- This is the actual SDK Key for your Production environment
  logger: logger
});

var userObject = {
  identifier: "Detelina"
};

ReactDOM.render(
  <React.StrictMode>
    <App client={configCatClient}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
