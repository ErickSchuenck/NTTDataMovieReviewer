import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.sass";
import { ThemeProvider } from "@ui5/webcomponents-react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { movieReducer } from "./store/Store";

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <ThemeProvider store={store}>
      <App />
    </ThemeProvider>
  </Provider>
);
