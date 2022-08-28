/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";
import { getDetailMusicBand, getDetailPlaceByEmail } from "../../Redux/actions";
import BGPerfil from "../../Assets/img/hostile-gae60db101_1920.jpg";
import ImgLogo from "../../Assets/img/logo3.png";

const ContainerGralStyled = styled.div`
  padding-left: 80px;
  background-image: url(${BGPerfil});
  width: 100vw;
  border: blue solid;

  .divLogo {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    img {
      height: 150px;
      padding-right: 500px;
      margin: 10px 0px 10px 0px;
    }
  }

  .divTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-family: "New Rocker";
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 79px;
      color: ${Colors.Platinum};
      margin: 0px 0px 0px 0px;
    }
  }

  .div3Columnas {
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: blue solid;
  }

  .divColumna1 {
    border: red solid;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 2px 20px 2px 20px;
    h3 {
      font-family: "New Rocker";
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 55px;
      margin: 2px 0px 2px 0px;
      color: ${Colors.Platinum};
    }
  }

  .divColumna2 {
    border: red solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2px 20px 2px 20px;
  }

  .divColumna3 {
    border: red solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2px 20px 2px 20px;
    img {
      width: 20vw;
    }
  }

  .div1 {
    border: yellow solid;
    width: 90vw;
    background-color: rgba(20, 33, 61, 0.75);
  }

  .divContainer1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .divsTituloyDesc {
    display: flex;
    flex-direction: row;
  }

  .pTitulo {
    font-family: "RocknRoll One";
    letter-spacing: -1px;
    font-weight: 400;
    font-size: 1.8rem;
    color: ${Colors.Blue_Vivid};
    margin: 8px 5px 8px 0px;
    height: fit-content;
  }

  .pDesc {
    font-family: "RocknRoll One";
    font-weight: 400;
    font-size: 1.5rem;
    margin: 0px 0px 0px 0px;
    color: ${Colors.Platinum};
    margin-top: 10px;
  }

  .divContainerdeAbajo {
    border: red solid;
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: auto;
  }

  .divEventosConfirmados {
    border: blue solid;
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${Colors.Oxford_Blue_transparent};
    height: auto;
    h1 {
      font-family: "New Rocker";
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 79px;
      color: ${Colors.Platinum};
      margin: 0px 0px 0px 0px;
    }
  }

  .divSolicitudesPendientes {
    border: blue solid;
    width: 30vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${Colors.Oxford_Blue_transparent};
    h1 {
      font-family: "New Rocker";
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 79px;
      color: ${Colors.Platinum};
      margin: 0px 0px 0px 0px;
    }
  }

  .detailBtn {
    font-family: "New Rocker";
    width: 8em;
    height: 2.3em;
    margin: 0.5em;
    background: rgba(35, 71, 150, 0.75);
    color: #e9dcdc;
    border: none;
    border-radius: 0.625em;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    z-index: 1;
    overflow: hidden;
    :hover {
      transition: 0.7s;
      background-color: #918cb9;
    }
  }

  .dateBtn {
    width: 5em;
    height: 1.5em;
    margin: 0.7em;
    background: #c5d8f3;
    color: #2a4ba3;
    border: none;
    border-radius: 0.625em;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  .pendingBtn {
    width: 6em;
    height: 1.5em;
    margin: 0.8em;
    background: #00013f;
    color: #dad5d5;
    border: none;
    border-radius: 0.625em;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  .divsSmallConfirmados {
    display: flex;
    flex-direction: row;
    background-color: #264380;
    margin: 8px 8px 8px 8px;
    p {
      font-family: "RocknRoll One";
      font-weight: 400;
      font-size: 1.5rem;
      color: ${Colors.Platinum};
      margin: 12px 8px 12px 8px;
    }
  }
`;

function EventosBanda() {
  const dispatch = useDispatch();
  const params = useParams();
  const musicBand = useSelector((state) => state.detail_music_band);
  const placeFirstDate = useSelector((state) => state.detail_place);

  const orderedConfirmedDates = musicBand.dates
    ? musicBand.dates.sort(
        (a, b) => new Date(a.date.substring(0, 10)) - new Date(b.date.substring(0, 10)),
      )
    : [];

  useEffect(() => {
    dispatch(getDetailMusicBand(params.id));
  }, []);

  if (musicBand._id && !placeFirstDate._id) {
    if (orderedConfirmedDates.length > 0) {
      dispatch(getDetailPlaceByEmail(orderedConfirmedDates[0].email));
    }
  }

  //console.log("fecha confirmada:", orderedConfirmedDates[0]);
  //console.log("lugar en donde van a tocar:", placeFirstDate);

  return (
    <ContainerGralStyled>
      <NavBar Home Eventos Perfil />
      <div className="divLogo">
        <img src={ImgLogo} alt="" />
      </div>
      <div className="divContainer1">
        <div className="div1">
          <div className="divTitle">
            <h1>Proximo Evento / Detalle del Evento</h1>
          </div>
          <div className="div3Columnas">
            <div className="divColumna1">
              <h3>{placeFirstDate.name}</h3>
              <div className="divsTituloyDesc">
                <p className="pTitulo">Fecha:</p>
                <p className="pDesc">
                  {orderedConfirmedDates.length > 0
                    ? orderedConfirmedDates[0].date.substring(0, 10)
                    : "Cargando..."}
                </p>
              </div>
              <div className="divsTituloyDesc">
                <p className="pTitulo">Persona a cargo:</p>
                <p className="pDesc">{placeFirstDate.personInCharge}</p>
              </div>
              <div className="divsTituloyDesc">
                <p className="pTitulo">Telefono:</p>
                <p className="pDesc">{placeFirstDate.phoneNumber}</p>
              </div>
              <div className="divsTituloyDesc">
                <p className="pTitulo">Ciudad:</p>
                <p className="pDesc">{placeFirstDate.city}</p>
              </div>
              <div className="divsTituloyDesc">
                <p className="pTitulo">Direccion:</p>
                <p className="pDesc">{placeFirstDate.adress}</p>
              </div>
              <div className="divsTituloyDesc">
                <p className="pTitulo">Capacidad:</p>
                <p className="pDesc">{placeFirstDate.capacity}</p>
              </div>
              <div className="divsTituloyDesc">
                <p className="pTitulo">Sonido propio:</p>
                <p className="pDesc">{placeFirstDate.hasSound === false ? "No" : "Si"}</p>
              </div>
            </div>
            <div className="divColumna2">
              <p className="pTitulo">Descripción:</p>
              <p className="pDesc">{placeFirstDate.description}</p>
              <div className="divsTituloyDesc">
                <p className="pTitulo">Rating:</p>
                <p className="pDesc">{placeFirstDate.rating}</p>
              </div>
            </div>
            <div className="divColumna3">
              <img src={placeFirstDate.profilePicture} alt="Img not found" />
              <button type="button" className="detailBtn">
                Detalle del Local
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="divContainerdeAbajo">
        <div className="divEventosConfirmados">
          <h1>Eventos Confirmados</h1>
          {musicBand.dates?.map((date) => {
            return (
              <div className="divsSmallConfirmados">
                <p>{date.date.substring(0, 10)}</p>
                <p>{date.place}</p>
                <button type="button" className="dateBtn">
                  Detalle
                </button>
              </div>
            );
          })}
        </div>
        <div className="divSolicitudesPendientes">
          <h1>Solicitudes Pendientes</h1>
          {musicBand.pendingDates?.map((date) => {
            return (
              <div className="divsSmallConfirmados">
                <p>{date.date.substring(0, 10)}</p>
                <p>{date.place}</p>
                <button type="button" className="pendingBtn">
                  Cancelar
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </ContainerGralStyled>
  );
}

export default EventosBanda;
