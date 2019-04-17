import React from "react";
import ReactDOM from "react-dom";
import "./myStyles.scss";
import { App } from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { cartReducer } from "./reducer";

let store = createStore(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
