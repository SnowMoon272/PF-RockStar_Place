/* eslint-disable no-confusing-arrow */
/* eslint-disable indent */
import React, { useState } from "react";
import styled from "styled-components";
import Colors from "../../../Utils/colors";
import SVGUser from "../../../Assets/svg/Ingresar.svg";
import SVGCerrar from "../../../Assets/svg/Cerrar.svg";
import SVGEye from "../../../Assets/svg/OjoAbierto.svg";
import SVGNEye from "../../../Assets/svg/OjoCerrado.svg";

const CardStyleCont = styled.div`
  border: solid #ffffff 1px;

  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 99.4%;
  height: 200px;
  background-color: ${Colors.Erie_Black_Transparent};
  margin-bottom: 35px;
  border-radius: 10px;
  padding-bottom: 15px;

  & .HeaderCont {
    /* border: solid #ff0000 3px; */

    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 98%;
    margin: 10px;

    & .SesionContainer {
      border: solid #ffffff 3px;
      border-radius: 50px;
      padding: 4px 8px 4px 4px;
      display: flex;
      align-items: center;
      transition: all 0.1s ease;
      color: ${Colors.Platinum};
      text-decoration: none;
      transition: all 0.5s ease;

      :hover {
        transform: scale(1.04);
        cursor: pointer;
        background-color: ${Colors.Platinum};
        color: ${Colors.Erie_Black};
      }

      & img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }

      & h6 {
        font-size: 1.5rem;
        margin: 0px;
        font-weight: 400;
      }
    }

    & .BTNCerrar {
      position: relative;
      top: 5px;
      right: -5px;
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

      :hover {
        transform: scale(1.2);
        cursor: pointer;
      }

      img {
        width: 34px;
        height: 34px;
      }
    }

    & .Eye {
      cursor: pointer;
      position: absolute;
      top: 5px;
      right: 45px;
      width: 40px;
      height: 30px;
      background-color: ${({ eye }) =>
        eye ? Colors.Platinum_Transparent : Colors.Erie_Black_Transparent};
      transition: all 0.5s ease;
      :hover {
        transform: scale(1);
      }

      img {
        width: 34px;
        height: 34px;
      }
    }
  }

  & h3 {
    position: absolute;
    top: 22px;
    left: 330px;
    font-weight: 400;
    font-size: 2rem;
    margin: 0px;
    max-width: fit-content;

    & a {
      color: ${Colors.Blue_Vivid};
      font-weight: 400;
    }
  }

  & .TextContent {
    /* border: solid #ffffff 1px; */

    position: relative;
    width: 85%;
    height: 270px;
    margin-left: 25px;

    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-track {
      background: ${Colors.Oxford_Blue_transparent};
    }
    &::-webkit-scrollbar-thumb {
      background-color: #14213d;
      border-radius: 25px;
      border: 1px solid white;
    }

    & p {
      margin-right: 8px;
      font-size: 1.4rem;
    }
  }

  & button {
    /* border: solid #2fff00 3px; */
    font-family: "New Rocker", cursive;
    position: absolute;
    right: 15px;
    bottom: 15px;
    background-color: ${Colors.Blue_life};
    width: 10%;
    font-size: 1.8rem;
    font-weight: 400;
    border: none;
    border-radius: 8px;
    color: ${Colors.Platinum};
    transition: all 0.5s ease;
    padding: 6px;

    :hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`;

function Card() {
  const [eye, seteye] = useState(false);

  const handlerEye = (e) => {
    seteye(!eye);
  };
  const handlerCloseNotif = (e) => {
    /* Algo va pasar */
  };

  const handlerClickNameCard = (e) => {
    /* Algo va pasar */
  };
  return (
    <CardStyleCont eye={eye}>
      <div className="HeaderCont">
        <a href="/" onClick={(e) => handlerClickNameCard(e)} className="SesionContainer">
          <img src={SVGUser} alt="User" />
          <h6 type="button">CastielAltair0027@outlook.com</h6>
        </a>
        <button onClick={(e) => handlerEye(e)} type="button" className="BTNCerrar Eye">
          <img src={eye ? SVGEye : SVGNEye} alt="ojo" />
        </button>
        <button onClick={(e) => handlerCloseNotif(e)} type="button" className="BTNCerrar">
          <img src={SVGCerrar} alt="cerrar" />
        </button>
      </div>
      <h3>
        Ha reportado al usuario <a href="/"> NombreUserReportado</a>
      </h3>
      <div className="TextContent">
        <p>“El local ha sido muy irrespetuoso con mi banda el día del evento”</p>
      </div>
      <button type="button"> Responder</button>
    </CardStyleCont>
  );
}

export default Card;
