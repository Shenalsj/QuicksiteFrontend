import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/app/App";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/styles/font-awesome/css/font-awesome.css';

//rendering react application in to root div
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById("root")
);



