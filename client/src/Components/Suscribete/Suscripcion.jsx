import React from "react";
import styled from "styled-components";
import BotonSuscribete from "./BotonSuscripcion";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";
import BGHome from "../../Assets/img/HomeConcert.jpg";

const SuscripcionStyleCont = styled.div`
  background-color: ${Colors.Erie_Black};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SuscripcionDetailCont = styled.div`
  box-sizing: border-box;
  width: 40%;
  height: 450px;
  background-color: ${Colors.Oxford_Blue};
  display: flex;
  margin: 2.5% 10%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${BGHome};
  justify-content: space-around;
  text-align: center;

  h2 {
    font-family: "RocknRoll One";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: ${Colors.Platinum};
    margin-top: 3%;
  }
  h1 {
    font-family: "New Rocker";
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    color: ${Colors.Platinum};
    margin-top: 3%;
  }
  p {
    font-family: "RocknRoll One";
    width: 50%;
    color: ${Colors.Platinum};
    font-size: 12px;
  }
`;

export default function suscripcion() {
  return (
    <SuscripcionStyleCont>
      <NavBar Home />

      <SuscripcionDetailCont>
        <h2>Registrate ahora en</h2>
        <h1>Rock Star place</h1>
        <p>
          No esperes más para acceder a los beneficios de Rock Star place. Uniendote, podrás empezar
          a ofrecer tu lugar para que los miles de músicos registrados en nuestra plataforma
          apliquen para tocar en tus fechas disponibles. Registrarte es muy fácil. Hace click en el
          boton de abajo, realizá un único pago de $500 ARS y ya podrás empezar tu experiencia Rock
          Star place.
        </p>
      </SuscripcionDetailCont>
      <BotonSuscribete />
    </SuscripcionStyleCont>
  );
}
