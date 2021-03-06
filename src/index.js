import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router.jsx";
import { Provider } from "react-redux";
import store from "./Reducer/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
 