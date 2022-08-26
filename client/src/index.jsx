/* eslint-disable comma-dangle */
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import ReactDOM from "react-dom";
import { store } from "./Redux/store";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  /* font-family: 'New Rocker', cursive; */
  font-family: 'RocknRoll One', sans-serif;
  box-sizing: border-box;
  margin: 0; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
  background: #010C0E;
  }      
  &::-webkit-scrollbar-thumb {
  background-color: #14213D;
  border-radius: 25px;
  border: 1px solid white; 
}
}
`;

// axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <GlobalStyle />
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);
