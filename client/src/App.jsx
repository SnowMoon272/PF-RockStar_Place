import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./Components/Home/Home";
import Help from "./Components/Help/Help";
import InciarSesion from "./Components/InciarSesion/InciarSesion";
import DetailPlace from "./Components/DetailPlace/DetailPlace";
import Registro from "./Components/Registro/Registro";
import PerfilMusico from "./Components/PerfilesLogueados/PerfilMusico";
import Suscripcion from "./Components/Suscribete/Suscripcion";
import SuscripcionError from "./Components/Suscribete/SuscripcionError";
import SuscripcionSucces from "./Components/Suscribete/SuscripcionSuccess";
import PerfilLocal from "./Components/PerfilesLogueados/PerfilLocal";
import ActualizarLocal from "./Components/ActualizarDatos/ActualizarLocal";
import ActualizarBanda from "./Components/ActualizarDatos/ActuailzarDatos";
import EventosBanda from "./Components/EventosBanda/EventosBanda";
import ReactivarCuenta from "./Components/ReactivarCuenta/ReactivarCuenta";

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

        <Route exact path="/iniciarsesion" element={<InciarSesion />} />
        <Route exact path="/registro" element={<Registro />} />

        <Route exact path="/place/:id" element={<DetailPlace />} />
        <Route exact path="/musicbandprofile/:id" element={<PerfilMusico />} />
        <Route exact path="/placeprofile/:id" element={<PerfilLocal />} />

        <Route exact path="/actualizarlocal" element={<ActualizarLocal />} />
        <Route exact path="/actualizarbanda" element={<ActualizarBanda />} />

        <Route exact path="/suscribete" element={<Suscripcion />} />
        <Route exact path="/suscripcionerror" element={<SuscripcionError />} />
        <Route exact path="/suscripcionsuccess" element={<SuscripcionSucces />} />

        <Route exact path="/musicband/events/:id" element={<EventosBanda />} />

        <Route exact path="/reactivarCuenta" element={<ReactivarCuenta />} />
      </Routes>
    </AppStyle>
  );
}

export default App;
