import React from "react";
import ReactDOM from "react-dom";
import App from "./App/index";
import * as serviceWorker from "./serviceWorker";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
