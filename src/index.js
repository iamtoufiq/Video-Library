import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Contexst from "./contxt/Contexst";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Contexst>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Contexst>
  </React.StrictMode>
);

reportWebVitals();
