import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HomeUNL from "./Components/Home/HomeUNL";
import HomeBL from "./Components/Home/HomeBL";
import HomeLL from "./Components/Home/HomeLL";
import Help from "./Components/Help/Help";
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
        <Route exact path="/home/local/:email" element={<HomeLL />} />
        <Route exact path="/help" element={<Help />} />
        <Route exact path="/help/logeado" element={<HelpLogeado />} />
        <Route exact path="/iniciarsesion" element={<InciarSesion />} />
        <Route path="/place/:email" element={<DetailPlace />} />
        <Route path="/musicbandprofile/:id" element={<PerfilMusico />} />
        <Route path="/placeprofile/:id" element={<PerfilLocal />} />
        <Route exact path="/registro" element={<Registro />} />
        <Route exact path="/actualizar" element={<Actualizar />} />
        <Route path="/suscribete" element={<Suscripcion />} />
        <Route path="/suscripcionerror" element={<SuscripcionError />} />
        <Route path="/suscripcionsuccess" element={<SuscripcionSucces />} />
      </Routes>
    </AppStyle>
  );
}

export default App;
