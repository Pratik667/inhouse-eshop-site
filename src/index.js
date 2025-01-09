import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";  // Import the Provider
import { store } from "./app/store"; // Your Redux store
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>  {/* Wrap the App in Provider */}
    <App />
  </Provider>
);
