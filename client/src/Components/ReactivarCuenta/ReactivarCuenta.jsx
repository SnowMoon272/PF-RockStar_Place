import React from "react";
import styled from "styled-components";
//import BotonSuscribete from "./BotonSuscripcion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";
import BGHome from "../../Assets/img/hostile-gae60db101_1920.jpg";
import { getUserInfo } from "../../Utils/auth.controller";

const ActivarCuentaStyleCont = styled.div`
  background-image: url(${BGHome});
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;

  .btnActivar {
    font-family: "RocknRoll One", sans-serif;
    width: 190px;
    height: 55px;
    padding: 0px 15px;
    background-color: ${Colors.Green_Light};
    color: ${Colors.Erie_Black};
    border-radius: 10px;
    font-size: 1.8rem;
    transition: all 0.5s ease;
    :hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

const ActivarCuentaDetailCont = styled.div`
  box-sizing: border-box;
  background-color: rgba(20, 33, 61, 0.75);
  width: 40%;
  height: 450px;
  display: flex;
  margin: 2.5% 10%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  text-align: center;
  box-sizing: border-box;

  h2 {
    font-family: "RocknRoll One";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: ${Colors.Platinum};
    margin-top: 3%;
    height: fit-content;
    width: fit-content;
  }
  h1 {
    font-family: "New Rocker";
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    color: ${Colors.Platinum};
    margin-top: 3%;
    height: fit-content;
    width: fit-content;
  }
  p {
    font-family: "RocknRoll One";
    width: 50%;
    color: ${Colors.Platinum};
    font-size: 20px;
    height: fit-content;
    width: fit-content;
  }
`;

export default function activarCuenta() {
  const navigate = useNavigate();

  async function handleClick(e) {
    e.preventDefault();
    const user = await getUserInfo();
    if (user.role === "musicband") {
      await axios.put("/bandDisabled", {
        email: user.email,
        disabled: "false",
      });
    } else {
      await axios.put("/placeDisabled", {
        email: user.email,
        disabled: "false",
      });
    }
    navigate("/");
  }

  return (
    <ActivarCuentaStyleCont>
      <NavBar />

      <ActivarCuentaDetailCont>
        <h2>Su cuenta se encuentra desactivada en</h2>
        <h1>Rock Star place</h1>
        <p>
          Si quieres volver a acceder a los beneficios de Rock Star place, puedes comunicarte con nosotros a rockstar_place@gmail.com o bien haciendo
          click en el boton.
        </p>
      </ActivarCuentaDetailCont>
      <button type="button" className="btnActivar" onClick={(e) => handleClick(e)}>
        Activar cuenta
      </button>
    </ActivarCuentaStyleCont>
  );
}
