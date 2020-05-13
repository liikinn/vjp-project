import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
/* Importing the Bootstrap CSS */
/* eslint-disable-next-line import/no-unassigned-import */
import "bootstrap/dist/css/bootstrap.min.css";

import { App } from "./components/app";
import * as serviceWorker from "./service-worker";
import { configureStore } from "./redux/store";
import { newsItems } from "./utils/constants";

const store = configureStore({ newsItems: newsItems });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
