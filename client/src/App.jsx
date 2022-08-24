import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HomeUNL from "./Components/Home/HomeUNL";
import HomeBL from "./Components/Home/HomeBL";
import Help from "./Components/Help/Help";
import HelpLogeado from "./Components/Help/HelpLogeado";
import InciarSesion from "./Components/InciarSesion/InciarSesion";
import DetailPlace from "./Components/DetailPlace/DetailPlace";
import Registro from "./Components/Registro/Registro";
import PerfilMusico from "./Components/PerfilMusico/PerfilMusico";

const AppStyle = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <AppStyle>
      <Routes>
        <Route exact path="/" element={<HomeUNL />} />
        <Route exact path="/home/band" element={<HomeBL />} />
        <Route exact path="/help" element={<Help />} />
        <Route exact path="/help/logeado" element={<HelpLogeado />} />
        <Route exact path="/iniciarsesion" element={<InciarSesion />} />
        <Route path="/place/:email" element={<DetailPlace />} />
        <Route path="/musicbandprofile/:id" element={<PerfilMusico />} />
        <Route exact path="/registro" element={<Registro />} />
      </Routes>
    </AppStyle>
  );
}

export default App;
