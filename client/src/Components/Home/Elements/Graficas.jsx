import React from "react";
import styled from "styled-components";
import GraficaFechas from "./GraficaFechas";
import GraficaRegistrados from "./GraficaRegistrados";

function Graficas() {
  const GraficasStyleCont = styled.div`
    height: 75%;
    width: 80%;
    display: flex;
    background-color: #ffffffae;
    align-items: center;
    margin-left: 10%;
    margin-top: 7%;
    justify-content: space-around;
  `;

  return (
    <GraficasStyleCont>
      <GraficaFechas />
      <GraficaRegistrados />
    </GraficasStyleCont>
  );
}

export default Graficas;
