import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./Components/Home/Home";
import "./App.css";

const AppStyle = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <AppStyle>
      <h1>Hola mundo</h1>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </AppStyle>
  );
}

export default App;
