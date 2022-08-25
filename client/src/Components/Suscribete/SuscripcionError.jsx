import React from "react";
import styled from "styled-components";
import BotonSuscribete from "./BotonSuscripcion";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";
import BGHome from "../../Assets/img/HomeConcert.jpg";
import hombrePerdido from "../../Assets/img/hombreperdido.png";

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

  text-align: center;

  .divText {
    width: 150px;
    position: relative;
    z-index: 0;
  }
  h2 {
    height: 2px;
    width: 300px;
    font-family: "RocknRoll One";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: ${Colors.Platinum};
    margin-top: 3%;
    margin-left: 95%;
  }
  img {
    height: 100%;
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
        <img src={hombrePerdido} alt="img not found" />
        <div className="btnCont">
          <BotonSuscribete />
        </div>
      </SuscripcionDetailCont>
    </SuscripcionStyleCont>
  );
}
