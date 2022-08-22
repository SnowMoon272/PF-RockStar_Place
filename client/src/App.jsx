import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HomeUNL from "./Components/Home/HomeUNL";
import Help from "./Components/Help/Help";
import InciarSesion from "./Components/InciarSesion/InciarSesion";
import DetailPlace from "./Components/DetailPlace/DetailPlace";
import Registro from "./Components/Registro/Registro";

const AppStyle = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <AppStyle>
      <Routes>
        <Route exact path="/" element={<HomeUNL />} />
        <Route exact path="/help" element={<Help />} />
        <Route exact path="/iniciarsesion" element={<InciarSesion />} />
        <Route path="/place/:email" element={<DetailPlace />} />
        <Route exact path="/registro" element={<Registro />} />
      </Routes>
    </AppStyle>
  );
}

export default App;
