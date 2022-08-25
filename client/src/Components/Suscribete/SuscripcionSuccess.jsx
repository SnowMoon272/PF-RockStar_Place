import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";
import BGHome from "../../Assets/img/HomeConcert.jpg";
import hombreFeliz from "../../Assets/img/hombrefeliz.png";

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

  .btnSuscribete {
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

const SuscripcionDetailCont = styled.div`
  box-sizing: border-box;
  width: 40%;
  height: 30%;
  background-color: ${Colors.Oxford_Blue};
  display: flex;
  margin: 2.5% 10%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${BGHome};

  text-align: center;

  img {
    height: 100%;
    width: 100%;
  }
  .btnCont {
    margin-top: -9%;
  }
`;

export default function suscripcionError() {
  return (
    <SuscripcionStyleCont>
      <NavBar Home />

      <SuscripcionDetailCont>
        <img src={hombreFeliz} alt="img not found" />
      </SuscripcionDetailCont>
      <Link to="/">
        <button className="btnSuscribete" type="submit">
          Home
        </button>
      </Link>
    </SuscripcionStyleCont>
  );
}
