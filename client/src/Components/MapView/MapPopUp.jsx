import React, { useState } from "react";
import styled from "styled-components";
import Colors from "../../Utils/colors";
import MapView from "./MapView";

const EditStyledCont = styled.div`
  border: 3px solid #ff0000;
  box-sizing: border-box;
  border-radius: 15px;
  background-color: ${Colors.Oxford_Blue};
  width: 100%;
  height: 100%;
  /* position: ; */

  .title {
    font-family: "New Rocker";
    font-weight: 400;
    font-size: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colors.Platinum};
    margin: 5px 0px 5px 0px;
    width: 100%;
  }

  .desc {
    font-family: "RocknRoll One";
    font-weight: 400;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colors.Platinum};
    margin: 0px 0px 0px 0px;
    width: 100%;
  }
`;

export default function MapPopUp({ POPSwitch, setPOPSwitch }) {
  const handlerClose = (e) => {
    e.preventDefault();
    setPOPSwitch(!POPSwitch);
  };

  return (
    <EditStyledCont>
      <button onClick={(e) => handlerClose(e)} type="button" className="BTNCerrar">
        ❌
      </button>
      <span className="title">Selecciona la ubicación de tu local</span>
      <span className="desc">Arrastra el marcador hasta la ubicación de tu local</span>
      <MapView />
    </EditStyledCont>
  );
}
