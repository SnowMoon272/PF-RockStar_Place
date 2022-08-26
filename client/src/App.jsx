import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HomeUNL from "./Components/Home/HomeUNL";
import HomeBL from "./Components/Home/HomeBL";
import HomeLL from "./Components/Home/HomeLL";
import Home from "./Components/Home/Home";
import Help from "./Components/Help/HelpNoLogeado";
import HelpLogeado from "./Components/Help/HelpLogeado";
import InciarSesion from "./Components/InciarSesion/InciarSesion";
import DetailPlace from "./Components/DetailPlace/DetailPlace";
import Registro from "./Components/Registro/Registro";
import PerfilMusico from "./Components/PerfilesLogueados/PerfilMusico";
import Suscripcion from "./Components/Suscribete/Suscripcion";
import SuscripcionError from "./Components/Suscribete/SuscripcionError";
import SuscripcionSucces from "./Components/Suscribete/SuscripcionSuccess";
import PerfilLocal from "./Components/PerfilesLogueados/PerfilLocal";
import Actualizar from "./Components/ActualizarDatos/ActuailzarDatos";
import DetailPlaceBL from "./Components/DetailPlace/DetailPlaceBL";

const AppStyle = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <AppStyle>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/help" element={<Help />} />
        <Route exact path="/help/logeado" element={<HelpLogeado />} />

        <Route exact path="/iniciarsesion" element={<InciarSesion />} />
        <Route exact path="/registro" element={<Registro />} />

        <Route exact path="/placeLL/:email" element={<DetailPlaceBL />} />
        <Route exact path="/place/:email" element={<DetailPlace />} />
        <Route exact path="/musicbandprofile/:id" element={<PerfilMusico />} />

        <Route exact path="/placeprofile/:id" element={<PerfilLocal />} />
        <Route exact path="/actualizar" element={<Actualizar />} />
        <Route exact path="/suscribete" element={<Suscripcion />} />
        <Route exact path="/suscripcionerror" element={<SuscripcionError />} />
        <Route exact path="/suscripcionsuccess" element={<SuscripcionSucces />} />
      </Routes>
    </AppStyle>
  );
}

export default App;
