import React, { useState } from "react";
import styled from "styled-components";
import Colors from "../../Utils/colors";
import MapPopUp from "./MapPopUp";

const HomeCont = styled.div`
  position: absolute;
  background-color: black;
  height: 100vh;
  width: 100vw;
  z-index: 50;
`;

export default function MapPrueba() {
  const [zIndex, setzIndex] = useState(true);

  const handleShowPop = (e) => {
    e.preventDefault();
    setzIndex(!zIndex);
  };

  return (
    <HomeCont zIndex={zIndex}>
      <button type="button" onClick={(e) => handleShowPop(e)}>Mostrar</button>
      <MapPopUp setzIndex={setzIndex} zIndex={zIndex} />
    </HomeCont>
  );
};
