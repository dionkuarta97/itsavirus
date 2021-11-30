import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "@mui/material";
import { grey } from "@mui/material/colors";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <GlobalStyles
          styles={{
            body: { backgroundColor: grey[200] },
          }}
        />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
