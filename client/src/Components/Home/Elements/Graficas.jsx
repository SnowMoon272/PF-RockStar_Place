import React from "react";
import styled from "styled-components";
import GraficaFechas from "./GraficaFechas";
import GraficaRegistrados from "./GraficaRegistrados";

const GraficasStyleCont = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: #ffffff; */
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

function Graficas() {
  return (
    <GraficasStyleCont>
      <GraficaFechas />
      <GraficaRegistrados />
    </GraficasStyleCont>
  );
}

export default Graficas;
