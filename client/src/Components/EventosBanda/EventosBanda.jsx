import React, { useEffect, useState } from "react";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";
import { getDetailMusicBand, getDetailPlaceByEmail } from "../../Redux/actions";
import BGPerfil from "../../Assets/img/hostile-gae60db101_1920.jpg";
import ImgLogo from "../../Assets/img/logo3.png";
import LoaderComponent from "../Loader/Loading";

const ContainerGralStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;

  & .spancito {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }

  & .buttonCont {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  & .buttonToastAcept {
    font-family: "RocknRoll One", sans-serif;
    color: ${Colors.Erie_Black};
    text-align: center;
    margin: 8px 0px;
    width: 45%;
    height: 35px;
    background-color: #adc178;
    border-radius: 10px;
    cursor: pointer;
    :hover {
      background-color: #64923c;
      color: ${Colors.Platinum};
      transition: 0.3s;
    }
  }
  & .buttonToastCancel {
    font-family: "RocknRoll One", sans-serif;
    color: ${Colors.Erie_Black};
    text-align: center;
    margin: 8px 0px;
    width: 45%;
    height: 35px;
    background-color: #ff9b85;
    border-radius: 10px;
    cursor: pointer;
    :hover {
      background-color: #ee6055;
      color: ${Colors.Platinum};
      transition: 0.3s;
    }
  }

  .IMG {
    position: fixed;
    width: 100%;
    z-index: 10;

    img {
      width: 100%;
    }
  }

  .Container {
    box-sizing: border-box;
    width: 100%;
    padding-left: 4.5%;
    height: 100vh;

    .ContenedorDeArriba {
      text-align: center;
      h2 {
        color: ${Colors.Platinum};
        font-size: 3rem;
        font-family: "RocknRoll One";
      }
      width: 100%;
      box-sizing: border-box;
      position: relative;
      z-index: 20;

      display: flex;
      flex-direction: column;
      align-items: center;

      .divLogo {
        display: flex;
        justify-content: center;
        width: 100%;

        img {
          height: 150px;
          margin: 10px 0px 10px 0px;
        }
      }

      .div1 {
        background-color: ${Colors.Oxford_Blue_transparent};
        padding: 15px 25px;
        width: 70%;

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
            margin: 0px;
          }

          h2 {
            font-family: "New Rocker";
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 79px;
            color: ${Colors.Platinum};
          }
        }

        .div3Columnas {
          display: flex;
          justify-content: space-between;

          .divColumna1 {
            max-width: 35%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            h3 {
              text-align: center;
              font-family: "New Rocker";
              font-weight: 400;
              font-size: 3rem;
              margin: 10px 15px;
              color: ${Colors.Platinum};
            }

            .divsTituloyDesc {
              display: flex;
              flex-direction: row;
              align-items: center;
              margin: 0px;

              .pTitulo {
                font-family: "RocknRoll One";
                letter-spacing: -1px;
                font-weight: 400;
                font-size: 2rem;
                color: ${Colors.Blue_Vivid};
                margin: 0px;
              }

              .pDesc {
                font-family: "RocknRoll One";
                margin: 0px;
                font-weight: 400;
                font-size: 1.5rem;

                color: ${Colors.Platinum};
              }
            }
          }

          .divColumna2 {
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
      position: relative;
      z-index: 20;
      margin-top: 130px;
      box-sizing: border-box;
      width: 100%;
      display: flex;
      justify-content: center;

      .divContainerdeAbajoContainer {
        display: flex;
        width: 73%;
        justify-content: space-between;
        margin-bottom: 150px;

        .divEventosConfirmados {
          width: 45%;

          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: ${Colors.Oxford_Blue_transparent};
          height: auto;
          padding-bottom: 50px;

          #msgNotConfirmedEvents {
            color: ${Colors.Platinum};
            font-size: 18px;
          }

          h1 {
            font-family: "New Rocker";
            font-weight: 400;
            font-size: 4rem;
            color: ${Colors.Platinum};
            margin: 30px;
          }

          .divsSmallConfirmados {
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
              background: ${Colors.Platinum};
              color: ${Colors.Dark_Cornflower_blue};
              border: none;
              margin-right: -5%;
              border-radius: 8px;
              font-size: 1.5rem;
              font-weight: bold;
              cursor: pointer;
              transition: all 0.5s ease;

              :hover {
                cursor: pointer;
                transform: scale(1.2);
              }

              a {
                text-decoration: none;
                color: ${Colors.Dark_Cornflower_blue};
              }
            }

            .BtnDelete {
              align-self: start;
              margin: 0.8% 0%;
              /* border: solid 0.2rem red; */
              border: none;
              cursor: pointer;
              /* border-radius: 20px; */
              /* width: 6%;
              height: 40%; */
              font-size: 1.3rem;
              background: none;
            }
          }
        }

        .divSolicitudesPendientes {
          width: 45%;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: ${Colors.Oxford_Blue_transparent};
          height: auto;
          padding-bottom: 50px;

          #msgNotPendings {
            color: ${Colors.Platinum};
            font-size: 18px;
          }
          h1 {
            font-family: "New Rocker";
            font-weight: 400;
            font-size: 4rem;
            color: ${Colors.Platinum};
            margin: 30px;
          }

          .divsSmallConfirmados {
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

const Blocker = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 40%;
  position: fixed;
  z-index: ${({ block }) => (block ? 2100 : 0)};
`;

function EventosBanda() {
  const dispatch = useDispatch();
  const params = useParams();
  const musicBand = useSelector((state) => state.detail_music_band);
  const placeFirstDate = useSelector((state) => state.detail_place);

  const [dateToRender, setDateToRender] = useState("");
  const [render, setRender] = useState(false);
  const [loading, setLoading] = useState(false);
  const [block, setBlock] = useState(false);

  const orderedConfirmedDates = musicBand.dates
    ? musicBand.dates.sort((a, b) => new Date(a.date.substring(0, 10)) - new Date(b.date.substring(0, 10)))
    : [];

  const orderedPendingDates = musicBand.pendingDates
    ? musicBand.pendingDates.sort((a, b) => new Date(a.date.substring(0, 10)) - new Date(b.date.substring(0, 10)))
    : [];

  useEffect(() => {
    setLoading(true);
    dispatch(getDetailMusicBand(params.id));
  }, [dispatch, render]);

  useEffect(() => {
    return () => {
      toast.remove();
    };
  }, []);

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
    setBlock(true);
    toast.promise(axios.put("/pendingdates", {
      musicEmail: musicBand.email,
      placeEmail: e.target.value.split(",")[1],
      date: e.target.value.split(",")[0],
    }), {
      loading: "Cancelando...",
      success: () => {
        setRender(!render);
        setBlock(false);
        toast.success("Petición cancelada");
      },
      error: "error",
    }, {
      success: {
        style: {
          display: "none",
        },
      },
    });
  }

  const handleDeleteClosedDate = async (e) => {
    e.preventDefault(e);
    setBlock(true);
    toast.remove();
    toast(
      (t) => (
        <span className="spancito">
          <b>¿Estás seguro que quieres eliminar la fecha?</b>
          <p>Ya hay un evento confirmado para este día. De todas formas notificaremos al local sobre la cancelación </p>
          <div className="buttonCont">
            <button
              type="button"
              className="buttonToastAcept"
              onClick={async () => {
                toast.dismiss(t.id);
                toast.promise(axios.put("/dates", {
                  placeEmail: e.target.value.split(",")[1],
                  musicEmail: musicBand.email,
                  date: e.target.value.split(",")[0],
                }), {
                  loading: "Eliminando...",
                  success: () => {
                    axios.get(`/cancelplace/${musicBand.email}/${e.target.value.split(",")[1]}/${e.target.value.split(",")[0]}`);
                    setRender(!render);
                    toast.success("Fecha eliminada");
                    setBlock(false);
                  },
                  error: "error",
                }, {
                  success: {
                    style: {
                      display: "none",
                    },
                  },
                });
              }}
            >
              Sí, estoy seguro
            </button>
            <button
              type="button"
              className="buttonToastCancel"
              onClick={() => {
                toast.dismiss(t.id);
                setBlock(false);
              }}
            >
              Cancelar
            </button>
          </div>
        </span>
      ),
      {
        duration: Infinity,
      },
    );
  };

  if (musicBand.banned === true || musicBand.disabled === true) navigate("/");

  return (
    <div>
      {loading ? (
        <div>
          <ContainerGralStyled>
            <Blocker block={block} />
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{
                className: "",
                style: {
                  fontSize: "1.5rem",
                  fontFamily: "RocknRoll One",
                },
              }}
            />
            <NavBar Home Perfil />
            <div className="IMG">
              <img src={BGPerfil} alt="" />
            </div>
            <div className="Container">
              <div id="Ancla_Titulo" className="ContenedorDeArriba">
                <div className="divLogo">
                  <img src={ImgLogo} alt="" />
                </div>
                <div className="div1">
                  <div className="divTitle">
                    <h1>Proximo Evento / Detalle del Evento</h1>
                  </div>
                  {musicBand._id && musicBand.dates.length === 0 ? (
                    <h2>Aquí podrás ver tu próximo evento confirmado.</h2>
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
                    {orderedConfirmedDates && orderedConfirmedDates.length !== 0 ? (
                      orderedConfirmedDates.map((date) => {
                        const year = date.date.substring(0, 4);
                        const month = date.date.substring(5, 7);
                        const day = date.date.substring(8, 10);
                        return (
                          <div key={date._id} className="divsSmallConfirmados">
                            <p>{`${day}/${month}/${year}`}</p>
                            <p>{date.place}</p>
                            <button value={date.email} name={date.date} onClick={(e) => handleClickDetalles(e)} type="button" className="dateBtn">
                              Detalle
                            </button>
                            <button
                              type="button"
                              className="BtnDelete"
                              onClick={(e) => handleDeleteClosedDate(e)}
                              value={[date.date.substring(0, 10), date.email]}
                            >
                              ❌
                            </button>
                          </div>
                        );
                      })
                    ) : (
                      <h2 id="msgNotConfirmedEvents">Aún no tienes eventos confirmados.</h2>
                    )}
                  </div>
                  <div className="divSolicitudesPendientes">
                    <h1>Solicitudes Pendientes</h1>
                    {orderedPendingDates && orderedPendingDates.length !== 0 ? (
                      orderedPendingDates.map((date) => {
                        const year = date.date.substring(0, 4);
                        const month = date.date.substring(5, 7);
                        const day = date.date.substring(8, 10);
                        return (
                          <div key={date._id} className="divsSmallConfirmados">
                            <p>{`${day}/${month}/${year}`}</p>
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
                      })
                    ) : (
                      <h2 id="msgNotPendings">Aún no tienes solicitudes pendientes.</h2>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ContainerGralStyled>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}

export default EventosBanda;
