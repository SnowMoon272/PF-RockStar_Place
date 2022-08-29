/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";
import { getDetailMusicBand, getDetailPlaceByEmail } from "../../Redux/actions";
import BGPerfil from "../../Assets/img/hostile-gae60db101_1920.jpg";
import ImgLogo from "../../Assets/img/logo3.png";

const ContainerGralStyled = styled.div`
  /* border: red solid 3px; */

  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  padding-left: 67px;

  .IMG {
    position: fixed;
    width: 100%;
    z-index: 10;

    img {
      width: 100%;
    }
  }

  .Container {
    /* border: red solid 3px; */

    box-sizing: border-box;
    width: 100%;
    height: 100vh;

    .ContenedorDeArriba {
      /* border: 3px green solid; */

      width: 100%;
      box-sizing: border-box;
      position: relative;
      z-index: 20;

      display: flex;
      flex-direction: column;
      align-items: center;

      .divLogo {
        /* border: 3px purple solid; */

        display: flex;
        justify-content: center;
        width: 100%;

        img {
          height: 150px;
          margin: 10px 0px 10px 0px;
        }
      }

      .div1 {
        /* border: 3px purple solid; */

        background-color: ${Colors.Oxford_Blue_transparent};
        padding: 15px 25px;
        width: 70%;

        .divTitle {
          /* border: yellow solid; */

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
          /* border: blue solid 3px; */
          display: flex;
          justify-content: space-between;

          .divColumna1 {
            /* border: red solid; */

            max-width: 35%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            h3 {
              /* border: greenyellow solid 3px; */

              text-align: center;
              font-family: "New Rocker";
              font-weight: 400;
              font-size: 3rem;
              margin: 10px 15px;
              color: ${Colors.Platinum};
            }

            .divsTituloyDesc {
              /* border: white solid 3px; */

              display: flex;
              flex-direction: row;
              align-items: center;
              margin: 0px;

              .pTitulo {
                /* border: black solid 3px; */

                font-family: "RocknRoll One";
                letter-spacing: -1px;
                font-weight: 400;
                font-size: 2rem;
                color: ${Colors.Blue_Vivid};
                margin: 0px;
              }

              .pDesc {
                /* border: black solid 3px; */

                font-family: "RocknRoll One";
                margin: 0px;
                font-weight: 400;
                font-size: 1.5rem;

                color: ${Colors.Platinum};
              }
            }
          }

          .divColumna2 {
            /* border: red solid; */
            max-width: 35%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            margin: 2px 20px 2px 20px;

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

            .divsTituloyDesc {
              display: flex;
              align-items: center;
              justify-content: flex-start;

              .pTitulo {
                font-family: "RocknRoll One";
                letter-spacing: -1px;
                font-weight: 400;
                font-size: 2rem;
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
            }
          }

          .divColumna3 {
            /* border: red solid; */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            img {
              width: 350px;
              height: 250px;
              object-fit: cover;
              border: solid white 3px;
              margin-bottom: 15px;
            }
            .detailBtn {
              font-family: "New Rocker";
              width: 175px;
              font-size: 2rem;
              height: 2.3em;
              background: ${Colors.Blue_life};
              color: #e9dcdc;
              border: none;
              letter-spacing: 1px;
              border-radius: 7px;
              cursor: pointer;
              transition: all 0.5s ease;

              :hover {
                cursor: pointer;
                transform: scale(1.2);
              }
            }
          }
        }
      }
    }

    .divContainerdeAbajo {
      /* border: 3px red solid; */

      position: relative;
      z-index: 20;
      margin-top: 130px;
      box-sizing: border-box;
      width: 100%;
      display: flex;
      justify-content: center;
      /* height: auto; */

      .divContainerdeAbajoContainer {
        /* border: 3px green solid; */
        display: flex;
        width: 73%;
        justify-content: space-between;
        margin-bottom: 150px;

        .divEventosConfirmados {
          /* border: blue solid; */
          width: 45%;

          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: ${Colors.Oxford_Blue_transparent};
          height: auto;
          padding-bottom: 50px;

          h1 {
            /* border: red solid; */

            font-family: "New Rocker";
            font-weight: 400;
            font-size: 4rem;
            color: ${Colors.Platinum};
            margin: 30px;
          }

          .divsSmallConfirmados {
            /* border: red solid; */

            display: flex;
            background-color: #264380;
            justify-content: space-between;
            margin: 10px;
            align-items: center;
            width: 80%;

            p {
              font-family: "RocknRoll One";
              font-weight: 400;
              font-size: 1.5rem;
              color: ${Colors.Platinum};
              padding: 5px 15px;
            }

            .dateBtn {
              width: 70px;
              height: 3rem;
              margin-right: 15px;
              background: ${Colors.Platinum};
              color: ${Colors.Dark_Cornflower_blue};
              border: none;
              border-radius: 8px;
              font-size: 1.5rem;
              font-weight: bold;
              cursor: pointer;
              transition: all 0.5s ease;

              :hover {
                cursor: pointer;
                transform: scale(1.2);
              }
            }
          }
        }

        .divSolicitudesPendientes {
          /* border: red solid; */

          width: 45%;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: ${Colors.Oxford_Blue_transparent};
          height: auto;
          padding-bottom: 50px;

          h1 {
            /* border: red solid; */

            font-family: "New Rocker";
            font-weight: 400;
            font-size: 4rem;
            color: ${Colors.Platinum};
            margin: 30px;
          }

          .divsSmallConfirmados {
            /* border: red solid; */

            display: flex;
            background-color: #264380;
            justify-content: space-between;
            margin: 10px;
            align-items: center;
            width: 80%;
            padding: 5px 15px;

            p {
              font-family: "RocknRoll One";
              font-weight: 400;
              font-size: 1.5rem;
              color: ${Colors.Platinum};
              /* padding: 5px 15px; */
            }

            .pendingBtn {
              font-family: "New Rocker";
              width: 80px;
              font-size: 1.5rem;
              height: 2.3em;
              background: ${Colors.Oxford_Blue};
              color: #e9dcdc;
              border: none;
              letter-spacing: 1px;
              border-radius: 7px;
              cursor: pointer;
              transition: all 0.5s ease;

              :hover {
                cursor: pointer;
                transform: scale(1.2);
              }
            }
          }
        }
      }
    }
  }
`;

function EventosBanda() {
  const dispatch = useDispatch();
  const params = useParams();
  const musicBand = useSelector((state) => state.detail_music_band);
  const placeFirstDate = useSelector((state) => state.detail_place);

  const [dateToRender, setDateToRender] = useState("");
  const [render, setRender] = useState(false);

  const orderedConfirmedDates = musicBand.dates
    ? musicBand.dates.sort(
        (a, b) => new Date(a.date.substring(0, 10)) - new Date(b.date.substring(0, 10)),
      )
    : [];

  useEffect(() => {
    dispatch(getDetailMusicBand(params.id));
  }, [dispatch, render]);

  if (musicBand._id && !placeFirstDate._id) {
    if (orderedConfirmedDates.length > 0) {
      dispatch(getDetailPlaceByEmail(orderedConfirmedDates[0].email));
    }
  }

  function handleClickDetalles(e) {
    e.preventDefault();
    dispatch(getDetailPlaceByEmail(e.target.value));
    setDateToRender(e.target.name);
  }

  async function handleClickCancelar(e) {
    e.preventDefault();
    //console.log(e.target.value);
    await axios.put("/pendingdates", {
      musicEmail: musicBand.email,
      placeEmail: e.target.value.split(",")[1],
      date: e.target.value.split(",")[0],
    });
    setRender(!render);
  }

  return (
    <ContainerGralStyled>
      <NavBar Home Perfil />
      <div className="IMG">
        <img src={BGPerfil} alt="" />
      </div>
      <div className="Container">
        <div className="ContenedorDeArriba">
          <div className="divLogo">
            <img src={ImgLogo} alt="" />
          </div>
          <div className="div1">
            <div className="divTitle">
              <h1>Proximo Evento / Detalle del Evento</h1>
            </div>
            {musicBand._id && musicBand.dates.length === 0 ? (
              <h1>No tenes fechas flaco</h1>
            ) : (
              <div className="div3Columnas">
                <div className="divColumna1">
                  <h3>{placeFirstDate.name}</h3>
                  <div className="divsTituloyDesc">
                    <p className="pTitulo">Fecha:⠀</p>
                    <p className="pDesc">
                      {dateToRender === ""
                        ? orderedConfirmedDates.length > 0
                          ? orderedConfirmedDates[0].date.substring(0, 10)
                          : "Cargando..."
                        : dateToRender.substring(0, 10)}
                    </p>
                  </div>
                  <div className="divsTituloyDesc">
                    <p className="pTitulo">Persona a cargo:⠀</p>
                    <p className="pDesc">{placeFirstDate.personInCharge}</p>
                  </div>
                  <div className="divsTituloyDesc">
                    <p className="pTitulo">Telefono:⠀</p>
                    <p className="pDesc">{placeFirstDate.phoneNumber}</p>
                  </div>
                  <div className="divsTituloyDesc">
                    <p className="pTitulo">Ciudad:⠀</p>
                    <p className="pDesc">{placeFirstDate.city}</p>
                  </div>
                  <div className="divsTituloyDesc">
                    <p className="pTitulo">Direccion:⠀</p>
                    <p className="pDesc">{placeFirstDate.adress}</p>
                  </div>
                  <div className="divsTituloyDesc">
                    <p className="pTitulo">Capacidad:⠀</p>
                    <p className="pDesc">{placeFirstDate.capacity}</p>
                  </div>
                  <div className="divsTituloyDesc">
                    <p className="pTitulo">Sonido propio:⠀</p>
                    <p className="pDesc">{placeFirstDate.hasSound === false ? "No" : "Si"}</p>
                  </div>
                </div>
                <div className="divColumna2">
                  <p className="pDesc">
                    <p className="pTitulo">Descripción:</p>
                    {placeFirstDate.description}
                  </p>
                  <div className="divsTituloyDesc">
                    <p className="pTitulo">Rating:</p>
                    <p className="pDesc">⭐{placeFirstDate.rating}</p>
                  </div>
                </div>
                <div className="divColumna3">
                  <img src={placeFirstDate.profilePicture} alt="Img not found" />
                  <Link to={`/place/${placeFirstDate._id}`}>
                    <button type="button" className="detailBtn">
                      Detalle del Local
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="divContainerdeAbajo">
          <div className="divContainerdeAbajoContainer">
            <div className="divEventosConfirmados">
              <h1>Eventos Confirmados</h1>
              {musicBand.dates?.map((date) => {
                return (
                  <div key={date._id} className="divsSmallConfirmados">
                    <p>{date.date.substring(0, 10)}</p>
                    <p>{date.place}</p>
                    <button
                      value={date.email}
                      name={date.date}
                      onClick={(e) => handleClickDetalles(e)}
                      type="button"
                      className="dateBtn"
                    >
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
                  <div key={date._id} className="divsSmallConfirmados">
                    <p>{date.date.substring(0, 10)}</p>
                    <p>{date.place}</p>
                    <button
                      onClick={(e) => handleClickCancelar(e)}
                      value={[date.date.substring(0, 10), date.email]}
                      type="button"
                      className="pendingBtn"
                    >
                      Cancelar
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ContainerGralStyled>
  );
}

export default EventosBanda;
