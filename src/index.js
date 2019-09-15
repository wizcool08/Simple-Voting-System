import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { voteForYourHero } from "./reducers";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let store = createStore(voteForYourHero);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
