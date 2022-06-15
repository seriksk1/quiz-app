import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";

import App from "./App";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ToastContainer
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          autoClose={2500}
          limit={3}
        />
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
