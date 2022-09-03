import React from "react";
import styled from "styled-components";
import Colors from "../../Utils/colors";
import MapView from "./MapView";
import SVGCerrar from "../../Assets/svg/Cerrar.svg";

const EditStyledCont = styled.div`
  box-sizing: border-box;
  border-radius: 15px;
  background-color: ${Colors.Oxford_Blue};
  width: 100%;
  height: 100%;

  & .BTNCerrar {
    background-color: ${Colors.Erie_Black};
    border: none;
    width: 29px;
    height: 29px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease;
    position: absolute;
    cursor: pointer;
    right: 1%;
    top: 1%;

    :hover {
      transform: scale(1.2);
      cursor: pointer;
    }

    img {
      width: 34px;
      height: 34px;
    }
  }

  .title {
    font-family: "New Rocker";
    font-weight: 400;
    font-size: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colors.Platinum};
    margin: 13px 0px 5px 0px;
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

export default function MapPopUp({ POPSwitch, setPOPSwitch, coords }) {
  const handlerClose = (e) => {
    e.preventDefault();
    setPOPSwitch(!POPSwitch);
  };

  return (
    <EditStyledCont>
      <button onClick={(e) => handlerClose(e)} type="button" className="BTNCerrar">
        <img src={SVGCerrar} alt="cerrar" />
      </button>
      <span className="title">Selecciona la ubicación de tu local</span>
      <span className="desc">Arrastra el marcador hasta la ubicación de tu local</span>
      <MapView setPOPSwitch={setPOPSwitch} POPSwitch={POPSwitch} coords={coords} />
    </EditStyledCont>
  );
}
