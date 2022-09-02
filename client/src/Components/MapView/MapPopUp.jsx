import React, { useState } from "react";
import styled from "styled-components";
import Colors from "../../Utils/colors";
import MapView from "./MapView";

const PopContainer = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    width: 40%;
    height: 60%;
    margin: auto;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: ${({ zIndex }) => (zIndex ? 0 : 100)};
`;

const EditStyledCont = styled.div`
  box-sizing: border-box;
  border: 3px solid red;
  border-radius: 15px;
  background-color: ${Colors.Oxford_Blue};
  position: relative;
  width: 100%;
  height: 100%;

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

export default function MapPopUp({ setzIndex, zIndex }) {

  const handlerClose = (e) => {
    e.preventDefault();
    setzIndex(!zIndex);
  };

  return (
    <PopContainer zIndex={zIndex}>
      <EditStyledCont>
        <button
          onClick={(e) => handlerClose(e)}
          type="button"
          className="BTNCerrar"
        >
          X
        </button>
        <span className="title">Selecciona la ubicación de tu local</span>
        <span className="desc">Arrastra el marcador hasta la ubicación de tu local</span>
        <MapView />
      </EditStyledCont>
    </PopContainer>
  );
}
