/* eslint-disable no-prototype-builtins */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable indent */
/* eslint-disable no-confusing-arrow */
/* React stuff */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/* Modules */
import axios from "axios";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

/* Components & Actions */
import LoaderComponent from "../Loader/Loading";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";
import { getDetailMusicBandByEmail, getDetailEvent, getDetailPlace, resetDetails } from "../../Redux/actions";
import { getUserInfo } from "../../Utils/auth.controller";
import DetalleMusicoPOP from "../DetalleMusico/DetalleMusicoPOP";
import Footer from "../Footer/Footer";

/* Form Img & SVG */
import BGHome from "../../Assets/img/hostile-gae60db101_1920.jpg";
import IMGLogoA from "../../Assets/img/logo3.png";
import Logo from "../../Assets/img/LogoCircular.png";

/* * * * * * * * * * * Styled Components CSS  * * * * * * * * * * */
const HomeStyleCont = styled.div`
  box-sizing: border-box;
  background-color: ${Colors.Erie_Black};
  width: 100%;
  height: fit-content;
  position: absolute;

  .POPContainer {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 70px;
    right: 0px;
    width: 85%;
    height: 85%;
    margin: auto;
    z-index: ${({ zIndex }) => (zIndex ? 0 : 100)};
  }
`;

const FirtVewStyleCont = styled.div`
  position: relative;
  z-index: 25;
  box-sizing: border-box;
  background-color: ${Colors.Erie_Black};
  width: 100%;
  height: fit-content;
  padding-left: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .ImgContainer {
    position: fixed;
    z-index: 24;
    box-sizing: border-box;
    width: auto;
    height: 100vh;
    width: 100%;

    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .Heder {
    box-sizing: border-box;
    position: relative;
    z-index: 27;
    display: flex;
    height: fit-content;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 50px 385px 20px 100px;

    .Logo {
      width: 350px;
      height: 150px;
    }

    .Title {
      font-family: "New Rocker", cursive;
      font-weight: 400;
      margin: 0px;
      color: ${Colors.Platinum};
      font-size: 8rem;
    }
    .Notificacion {
      background-color: transparent;
      border: none;
    }
  }

  .CardUnicaCont {
    background-color: ${Colors.Oxford_Blue_transparent};
    position: relative;
    z-index: 27;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    color: ${Colors.Platinum};
    font-weight: 400;
    padding: 40px;

    & .SinEvento {
      display: flex;
      font-size: 2rem;
    }

    & .ImgBanda {
      width: auto;

      & img {
        border-radius: 15px;
        max-width: 100%;
        height: 300px;
        margin-right: 40px;
      }
    }

    & .ProximoInfCont {
      display: flex;
      border-left: solid white 3px;
      width: fit-content;
      height: 300px;

      & .ProximoInf {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 35px 0px 15px;

        & h4 {
          font-family: "New Rocker", cursive;
          font-size: 3.5rem;
          letter-spacing: 4px;
          margin: 0px;
          font-weight: 400;
        }

        & p {
          margin-top: 20px;
          font-size: 1.6rem;
          line-height: 27px;
          max-width: 420px;
          font-weight: 400;

          & span {
            color: ${Colors.Blue_Vivid};
            font-size: 2.4rem;
            font-weight: 400;
          }
        }
      }

      & .ProximoIMGyBtn {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        & img {
          border-radius: 15px;
          width: 100%;
          height: 250px;
          object-fit: cover;
        }

        & .Lynk_Btn {
          button {
            font-family: "New Rocker", cursive;
            border: none;
            color: ${Colors.Platinum};
            font-weight: 400;
            border-radius: 8px;
            width: 160px;
            height: 45px;
            font-size: 2.4rem;
            background-color: ${Colors.Blue_life};
            letter-spacing: 1.5px;
            margin-top: 25px;
            transition: all 0.5s ease;

            :hover {
              transform: scale(1.2);
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;

const SecondVewStyleCont = styled.section`
  box-sizing: border-box;
  position: relative;
  z-index: 27;
  margin-left: 75px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .ContenidoPrevio {
    position: absolute;
    top: 42px;
    width: 86%;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  img {
    width: 230px;
    height: 230px;
  }
`;

const SecondStyleCont = styled.section`
  /* border: solid red 3px; */

  box-sizing: border-box;
  width: 75%;
  height: fit-content;
  margin-bottom: 100px;
  background-color: ${Colors.Oxford_Blue_transparent};
  margin-top: 160px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h4 {
    margin-bottom: 30px;
    color: ${Colors.Platinum};
    font-family: "New Rocker", cursive;
    font-size: 7rem;
    font-weight: 400;
  }

  & .FechasCont {
    /* border: solid blue 3px; */

    box-sizing: border-box;
    width: 85%;
    height: fit-content;

    & .TusFechas {
      /* border: solid green 3px; */

      color: ${Colors.Platinum};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      #msgFechas {
        font-size: 18px;
      }

      & h5 {
        /* border: solid yellow 3px; */

        font-family: "New Rocker", cursive;
        font-size: 4rem;
        font-weight: 400;
        margin: 0px;
        padding-bottom: 10px;
        width: 100%;
      }
      & .Carusel {
        width: 100%;
        height: 300px;
        font-weight: 400;
        display: flex;
        justify-content: center;
        align-items: center;
        & .carousel {
          /* border: solid yellow 1.5px; */
          width: 100%;
          height: 100%;

          & .item {
            /* border: solid yellow 1.5px; */

            position: relative;
            width: 90%;
            height: 250px;
            background-color: ${Colors.Blue_life};
            text-align: center;
            margin: 0px 6px;
            font-family: "RocknRoll One";
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;

            & .BtnDelete {
              position: absolute;
              top: 5px;
              right: 5px;
            }

            & .BTNCerrar {
              /* background-color: ${Colors.Erie_Black}; */
              background-color: transparent;
              border: none;
              width: 25px;
              height: 25px;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              border: solid red 2px;
              transition: all 0.5s ease;

              :hover {
                background-color: ${Colors.Erie_Black};
                transform: scale(1.2);
                cursor: pointer;
              }
            }

            & .day {
              font-size: 50px;
            }
            & .month {
              font-size: 25px;
              margin-bottom: 6px;
            }
            & .year {
              font-size: 25px;
              margin-bottom: 10px;
            }
            & .BtnVerMas {
              position: relative;
              top: 15px;
              width: 130px;
              height: 30px;
              border: none;
              background-color: ${Colors.Oxford_Blue};
              border-radius: 4px;
              font-size: 1.8rem;
              color: ${Colors.Platinum};
              font-family: "RocknRoll One", sans-serif;

              transition: all 0.5s ease;

              :hover {
                transform: scale(1.1);
                cursor: pointer;
              }
            }
          }
        }
      }

      & .AddFecha {
        border-bottom: solid white 3px;

        box-sizing: border-box;
        width: 100%;
        padding: 15px 10px 35px 10px;
        display: flex;
        align-items: center;

        & label {
          font-size: 2rem;
          font-weight: 400;

          & input {
            margin-left: 10px;
            font-size: 2rem;
            color: ${Colors.Platinum};
            background-color: ${Colors.Blue_life};
            /* border: 1px solid white; */
            outline: none;
            padding: 4px 8px;
            cursor: pointer;
            border-radius: 5px;
          }
        }

        .BTNAddFecha {
          font-family: "RocknRoll One", sans-serif;
          width: 140px;
          height: 35px;
          border: none;
          border-radius: 8px;
          font-size: 1.8rem;
          background-color: ${Colors.Blue_life};
          color: white;
          margin-left: 20px;
          transition: all 0.5s ease;

          :hover {
            transform: scale(1.2);
            cursor: pointer;
          }
        }
      }
    }
  }

  & .SolicitudesCont {
    /* border: solid red 3px; */
    box-sizing: border-box;
    margin-bottom: 70px;

    color: ${Colors.Platinum};
    & h5 {
      /* border: solid yellow 3px; */
      box-sizing: border-box;

      font-family: "New Rocker", cursive;
      font-size: 4rem;
      font-weight: 400;
      margin: 55px 0px 10px 0px;
      padding-bottom: 10px;
      width: 100%;
    }

    #msgFechas {
      font-size: 18px;
      text-align: center;
    }

    & .SolicitudesContJr {
      /* border: solid green 3px; */

      box-sizing: border-box;
      display: flex;
      flex-direction: column;

      & .Solicitud {
        /* border: solid blue 3px; */

        display: flex;
        justify-content: space-between;
        margin: 10px 0px;
        width: 100%;
        background-color: ${Colors.Blue_life};

        & .Left {
          /* border: solid orange 3px; */

          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 70%;
          & p {
            font-size: 1.6rem;
            font-weight: 400;
          }
          & button {
            font-family: "RocknRoll One", sans-serif;

            width: 100px;
            height: 35px;
            font-size: 1.5rem;
            border: none;
            color: ${Colors.Platinum};
            border-radius: 8px;
            background-color: ${Colors.Oxford_Blue};
            letter-spacing: 1px;
            transition: all 0.5s ease;

            :hover {
              transform: scale(1.2);
              cursor: pointer;
            }
          }
        }

        & .Rigth {
          /* border: solid purple 3px; */

          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 30%;
          margin-left: 150px;

          & button {
            font-family: "RocknRoll One", sans-serif;

            width: 100px;
            height: 35px;
            font-size: 1.5rem;
            font-weight: bold;
            border: none;
            color: ${Colors.Oxford_Blue};
            border-radius: 8px;
            background-color: ${Colors.Platinum};
            letter-spacing: 1px;
            transition: all 0.5s ease;
            margin: 0px 10px;

            :hover {
              transform: scale(1.2);
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;

const DateStatusStyled = styled.div`
  width: 100%;
  background-color: ${Colors.Oxford_Blue};
  background-color: ${({ dateStatus }) => (dateStatus ? "#6a994e" : "#bc4749")};
  font-size: 20px;
`;

const FooterStyledCont = styled.footer`
  position: relative;
  background-color: ${Colors.Oxford_Blue};
  box-sizing: border-box;
  height: fit-content;
  margin-left: 70px;
  padding-left: 25px;
  font-size: 3rem;
  z-index: 50;
`;

/* * * * * * * * * * * React Component Function  * * * * * * * * * * */
function HomeLL() {
  const dispatch = useDispatch();
  const place = useSelector((state) => state.detail_place);
  const musicBandEvent = useSelector((state) => state.detail_event);
  const musicBandDetail = useSelector((state) => state.detail_music_band);
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({});
  const [render, setRender] = useState(false);
  const [zIndex, setzIndex] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const confirmedDates = place.dates ? place.dates.sort((a, b) => new Date(a.date.substring(0, 10)) - new Date(b.date.substring(0, 10))) : [];

  const availableDates = place.availableDates
    ? place.availableDates.sort((a, b) => new Date(a.date.substring(0, 10)) - new Date(b.date.substring(0, 10)))
    : [];

  const allDates = [...confirmedDates, ...availableDates];

  const orderedPendingDates = place.pendingDates
    ? place.pendingDates.sort((a, b) => new Date(a.date.substring(0, 10)) - new Date(b.date.substring(0, 10)))
    : [];

  const getCurrentDate = () => {
    const currentDate = new Date();
    const date = currentDate.toISOString();
    return `${date.substring(0, 4)}-${date.substring(5, 7)}-${date.substring(8, 10)}`;
  };

  function validate(input) {
    const errors = {};
    if (allDates.find((d) => d.date.substring(0, 10) === input) !== undefined) {
      errors.repeated = "La fecha ya se encuentra cargada";
    }
    if (getCurrentDate().split("-")[0] >= input.split("-")[0]) {
      if (getCurrentDate().split("-")[1] >= input.split("-")[1]) {
        if (getCurrentDate().split("-")[2] > input.split("-")[2]) {
          errors.menor = "La fecha a ingresar debe ser mayor a la fecha actual";
        }
      }
    }
    return errors;
  }

  function validateData() {
    if (place && place.name === "") {
      alert("Debe cargar los datos del local");
      dispatch(resetDetails([]));
      navigate("/actualizarlocal");
    } else if (place && place.suscription?.isSuscribed === false) {
      alert("Debes suscribirte para obtener los beneficios de Rock Star place");
      dispatch(resetDetails([]));
      navigate("/suscribete");
    }
  }

  const checkConfirmed = (date) => {
    if (place.dates.find((d) => d.date.substring(0, 10) === date) !== undefined) return true;
    return false;
  };

  const checkExists = (date) => {
    if (allDates.find((d) => d.date.substring(0, 10) === date) !== undefined) return true;
    return false;
  };

  /* * * * * * * * * * * React Hooks  * * * * * * * * * * */
  useEffect(() => {
    validateData();
  }, [place]);

  useEffect(async () => {
    setLoading(true);
    const User = await getUserInfo();
    dispatch(getDetailPlace(User._id));
  }, [dispatch, render]);

  if (place._id && !musicBandEvent._id) {
    if (confirmedDates.length > 0) dispatch(getDetailEvent(confirmedDates[0].email));
  }

  /* * * * * * * * * * * Handle´s * * * * * * * * * * */
  const handleDateChange = (e) => {
    setDate(e.target.value);
    setErrors(validate(e.target.value));
  };

  const handleSubmitDate = async (e) => {
    e.preventDefault(e);
    if (errors.repeated) alert("La fecha ya se encuentra cargada");
    if (errors.menor) alert("La fecha a ingresar debe ser mayor a la fecha actual");
    else if (date !== "") {
      await axios.post("/placesdates", {
        email: place.email,
        date,
      });
      setDate("");
      setRender(!render);
    } else alert("Ingrese una fecha");
  };

  const handleDeleteAvailableDate = async (e) => {
    e.preventDefault(e);
    await axios.put("/placesdates", {
      email: place.email,
      date: e.target.value.split(",")[0],
    });
    setRender(!render);
  };

  const handleDeleteClosedDate = async (e) => {
    e.preventDefault(e);
    await axios.put("/dates", {
      placeEmail: place.email,
      musicEmail: e.target.value.split(",")[1],
      date: e.target.value.split(",")[0],
    });
    axios.get(`/cancelmatch/${e.target.value.split(",")[1]}/${place.email}/${e.target.value.split(",")[0]}`);
    setRender(!render);
  };

  const handleConfirmDate = async (e) => {
    e.preventDefault(e);
    if (checkExists(e.target.value.split(",")[0]) === true) {
      if (checkConfirmed(e.target.value.split(",")[0]) === false) {
        await axios.put("/matchdate", {
          placeEmail: place.email,
          musicEmail: e.target.value.split(",")[1],
          date: e.target.value.split(",")[0],
        });
        axios.get(`/matchmails/${e.target.value.split(",")[1]}/${place.email}/${e.target.value.split(",")[0]}`);
        setRender(!render);
        const user = getUserInfo();
        const notification = {
          type: "info",
          title: `${user.email} ha aceptado tu solicitud`,
          message: "Para más información por favor revisa tus fechas",
          before: undefined,
          from: place.email,
        };
        const value = e.target.value.split(",");
        await axios({
          method: "post",
          url: "/musicbands/notification/add",
          data: {
            email: value[1],
            notification,
          },
        });
      } else alert("Ya hay un usuario confirmado en esa fecha");
    } else alert("La fecha ya no existe, debe ingresarla denuevo para poder aceptar la petición");
  };

  const handleRejectDate = async (e) => {
    e.preventDefault(e);
    await axios.put("/pendingdates", {
      placeEmail: place.email,
      musicEmail: e.target.value.split(",")[1],
      date: e.target.value.split(",")[0],
    });
    setRender(!render);
  };

  const handleShowDetail = async (e) => {
    e.preventDefault();
    await dispatch(getDetailMusicBandByEmail(e.target.value));
    setzIndex(!zIndex);
  };

  /* * * * * * * * * * * Extra function´s * * * * * * * * * * */
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const getMonth = (mes) => {
    if (mes === "01") return "Enero";
    if (mes === "02") return "Febrero";
    if (mes === "03") return "Marzo";
    if (mes === "04") return "Abril";
    if (mes === "05") return "Mayo";
    if (mes === "06") return "Junio";
    if (mes === "07") return "Julio";
    if (mes === "08") return "Agosto";
    if (mes === "09") return "Septiembre";
    if (mes === "10") return "Octubre";
    if (mes === "11") return "Noviembre";
    if (mes === "12") return "Diciembre";
    return mes;
  };
  /* * * * * * * * * * * React JSX * * * * * * * * * * */
  return (
    <div>
      {loading ? (
        <HomeStyleCont zIndex={zIndex}>
          <NavBar Perfil HelpLog />
          <div className="POPContainer">
            {musicBandDetail._id ? <DetalleMusicoPOP setzIndex={setzIndex} zIndex={zIndex} musicBand={musicBandDetail} /> : null}
          </div>
          <FirtVewStyleCont>
            <div className="ImgContainer">
              <img src={BGHome} alt="Background" />
            </div>
            <div className="Heder">
              <img className="Logo" src={IMGLogoA} alt="" />
              <h1 className="Title">{place.name}</h1>
              <button type="button" className="Notificacion">
                <img src="" alt="" />
              </button>
            </div>
            <div className="CardUnicaCont">
              <div className="ImgBanda">
                <img src={place.profilePicture} alt="Banda" />
              </div>
              {confirmedDates.length > 0 ? (
                <div className="ProximoInfCont">
                  <div className="ProximoInf">
                    <h4>Próximo Evento</h4>
                    <p>
                      <span>Banda: </span>
                      {musicBandEvent.name} <br />
                      <span>Fecha: </span>
                      {confirmedDates.length > 0
                        ? `${confirmedDates[0].date.substring(8, 10)} de ${getMonth(
                          confirmedDates[0].date.substring(5, 7),
                        )} de ${confirmedDates[0].date.substring(0, 4)}`
                        : null}
                      <br />
                      <span>Contacto: </span>
                      {musicBandEvent.personInCharge} <br />
                      <span>Telefono: </span>
                      {musicBandEvent.phoneNumber} <br />
                      <span>Direccion: </span>
                      {place.adress}
                    </p>
                  </div>
                  <div className="ProximoIMGyBtn">
                    <img src={musicBandEvent.profilePicture} alt="Band" />
                    <Link className="Lynk_Btn" to="/">
                      <button type="button" onClick={(e) => handleShowDetail(e)} value={musicBandEvent.email}>
                        Detalle
                      </button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="SinEvento">
                  <h4>En esta solapa podrás ver tu próximo evento confirmado.</h4>
                </div>
              )}
            </div>
          </FirtVewStyleCont>
          <SecondVewStyleCont UserLog id="SecondVewStyleCont">
            <div className="ContenidoPrevio">
              <img src={Logo} alt="Logo" />
            </div>

            <SecondStyleCont>
              <h4 id="Eventos">Gestiona tus Eventos</h4>
              <section className="FechasCont">
                <div className="TusFechas">
                  <h5>Tus Fechas</h5>
                  {allDates && allDates.length !== 0 ? (
                    <div className="Carusel">
                      <Carousel className="carousel" responsive={responsive} minimumTouchDrag={80} slidesToSlide={1}>
                        {allDates &&
                          allDates.map((date) => {
                            return (
                              <div className="item" key={date._id}>
                                <button
                                  type="button"
                                  className="BtnDelete BTNCerrar"
                                  onClick={date.isAvailable ? (e) => handleDeleteAvailableDate(e) : (e) => handleDeleteClosedDate(e)}
                                  value={[date.date.substring(0, 10), date.email]}
                                >
                                  ❌
                                </button>
                                <span className="day">{date.date.substring(8, 10)}</span>
                                <span className="month">{getMonth(date.date.substring(5, 7))}</span>
                                <span className="year">{date.date.substring(0, 4)}</span>
                                <DateStatusStyled dateStatus={date.isAvailable}>
                                  {date.isAvailable ? "Fecha Disponible" : "Fecha Cerrada"}
                                </DateStatusStyled>
                                {date.isAvailable ? null : (
                                  <button className="BtnVerMas" type="button" onClick={(e) => handleShowDetail(e)} value={date.email}>
                                    Ver artista
                                  </button>
                                )}
                              </div>
                            );
                          })}
                      </Carousel>
                    </div>
                  ) : (
                    <h1 id="msgFechas">Añade una o varias fechas para que los artistas puedan postularse.</h1>
                  )}

                  <div className="AddFecha">
                    <label htmlFor="start">
                      Añadir Fecha:
                      <input type="date" id="start" value={date} min={getCurrentDate()} onChange={(e) => handleDateChange(e)} />
                      <button className="BTNAddFecha" type="button" onClick={(e) => handleSubmitDate(e)}>
                        Añadir
                      </button>
                    </label>
                  </div>
                </div>
                <div className="SolicitudesCont">
                  <h5>Solicitudes</h5>

                  {orderedPendingDates && orderedPendingDates.length !== 0 ? (
                    <div className="SolicitudesContJr">
                      {orderedPendingDates.map((date) => {
                        const year = date.date.substring(0, 4);
                        const month = date.date.substring(5, 7);
                        const day = date.date.substring(8, 10);
                        return (
                          <div className="Solicitud" key={date._id}>
                            <div className="Left">
                              <p>{`${day}/${month}/${year}`}</p>
                              <p>{date.musicBand}</p>
                              <button type="button" onClick={(e) => handleShowDetail(e)} value={date.email}>
                                Detalle
                              </button>
                            </div>
                            <div className="Rigth">
                              <button type="button" onClick={(e) => handleConfirmDate(e)} value={[date.date.substring(0, 10), date.email]}>
                                Aceptar
                              </button>
                              <button type="button" onClick={(e) => handleRejectDate(e)} value={[date.date.substring(0, 10), date.email]}>
                                Rechazar
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <h1 id="msgFechas">En este apartado verás las solicitudes de los artistas para aceptarlas o rechazarlas.</h1>
                  )}
                </div>
              </section>
            </SecondStyleCont>
          </SecondVewStyleCont>
          <FooterStyledCont>
            <Footer />
          </FooterStyledCont>
        </HomeStyleCont>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}

export default HomeLL;
