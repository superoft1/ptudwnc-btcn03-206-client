/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// core components
import classroom from "./layouts/class.js";

//import "assets/css/material-dashboard-react.css?v=1.10.0";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={classroom} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

