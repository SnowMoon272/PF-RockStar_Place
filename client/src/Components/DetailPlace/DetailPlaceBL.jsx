/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getDetailMusicBandByEmail, getDetailPlace, resetDetails } from "../../Redux/actions";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";
import validate from "./validationsComment";
import BGPerfil from "../../Assets/img/hostile-gae60db101_1920.jpg";
import { getUserInfo } from "../../Utils/auth.controller";
import LogoInstagram from "../../Assets/svg/Instagram.svg";
import LoaderComponent from "../Loader/Loading";
import Notificar from "../Home/Elements/Notificar";
// import Editar from "../../Assets/svg/Editar.svg";

const HomeStyleCont = styled.div`
  box-sizing: border-box;
  background-image: url(${BGPerfil});
  width: 100%;
  min-height: 100%;
  padding-left: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailStyleCont = styled.div`
  box-sizing: border-box;
  width: 80%;
  height: fit-content;
  background-color: rgba(20, 33, 61, 0.75);
  display: flex;
  margin: 2.5% 0px;

  .FirstCont {
    width: 61.4%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 2%;

    .NameAndRating {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .PlaceName {
        font-family: "New Rocker";
        font-style: normal;
        font-weight: 400;
        font-size: 75px;
        text-align: center;
        color: ${Colors.Platinum};
      }

      .rating {
        font-family: "New Rocker";
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        text-align: center;
        color: ${Colors.Platinum};
      }
    }

    .DataCont {
      /* border: solid #ff0000 3px; */
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 1.5%;

      .title {
        font-family: "New Rocker";
        font-style: normal;
        font-weight: 400;
        font-size: 45px;
        text-align: center;
        color: ${Colors.Blue_Vivid};
      }

      .description {
        font-family: "RocknRoll One";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        text-align: justify;
        color: ${Colors.Platinum};
      }

      .DatesCont {
        color: ${Colors.Platinum};

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
                transform: scale(1.2);
                cursor: pointer;
              }
            }
          }
        }
      }

      .comentar {
        background: ${Colors.Erie_Black_Transparent};
        width: 100%;
        height: 150px;
        margin-top: 3%;
        display: flex;
        flex-direction: column;
        padding: 2%;
        box-sizing: border-box;
        border-radius: 10px;

        input {
          width: 95%;
          height: 80%;
          background-color: transparent;
          border: none;
          color: ${Colors.Platinum};
          font-family: "RocknRoll One";
          font-size: 16px;
        }
        input::placeholder {
          color: ${Colors.Platinum};
        }

        .RateComentCont {
          display: flex;
          justify-content: space-between;

          .RateCont {
            /* display: flex; */

            .rate {
              font-family: "RocknRoll One";
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              text-align: justify;
              color: ${Colors.Platinum};
            }

            .buttons {
              display: flex;
              margin-top: 5%;

              button {
                margin-right: 4%;
              }
            }
          }

          .ButtonsComentar {
            font-family: "RocknRoll One", sans-serif;

            background-color: ${Colors.Oxford_Blue};
            color: white;
            font-size: 2rem;
            border: none;
            border-radius: 10px;
            width: 170px;
          }

          button {
            width: 30%;
          }
        }
      }

      .comentarios {
        background: rgba(229, 229, 229, 0.5);
        width: 100%;
        margin-top: 3%;

        .coment {
          font-family: "RocknRoll One";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          color: ${Colors.Platinum};
          margin: 4% 0%;
          padding: 0% 3%;
          .NameRating {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      }
    }
  }

  .SecondCont {
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 2%;

    .ImglogosRedes {
      width: 40px;
      height: 40px;
      padding: 4px;
      border-radius: 50px;
      background-color: white;
      cursor: pointer;
      margin: 25px 0px 0px 0px;
      transition: all 0.5s ease;

      :hover {
        transform: scale(1.2);
        cursor: pointer;
      }
    }

    .profile {
      width: 100%;
    }
    .stats {
      font-family: "RocknRoll One";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      color: ${Colors.Platinum};
      margin-top: 3%;
    }

    .hr {
      width: 100%;
      margin-top: 3%;
    }

    .ButtonReport {
      font-family: "RocknRoll One";

      position: absolute;
      width: 150px;
      height: 35px;
      bottom: 210px;
      right: 220px;
      font-size: 1.5rem;
      color: white;
      font-weight: bold;
      letter-spacing: 1px;
      background-color: black;
      border-radius: 8px;
      transition: all 0.5s ease;

      :hover {
        transform: scale(1.2);
        cursor: pointer;
      }
    }
  }
`;

const DateStatusStyled = styled.div`
  width: 100%;
  background-color: ${Colors.Oxford_Blue};
  background-color: ${({ dateStatus }) => (dateStatus ? "green" : "red")};
  font-size: 20px;
`;

export default function DetailPlace() {
  const dispatch = useDispatch();
  const params = useParams();
  const place = useSelector((state) => state.detail_place);
  const musicBand = useSelector((state) => state.detail_music_band);
  const user = getUserInfo();
  const [input, setInput] = useState({
    comment: "",
    rating: 0,
  });
  const [render, setRender] = useState(false);
  const [render2, setRender2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [SwitchNotif, setSwitchNotif] = useState(true);

  const confirmedDates = place.dates ? place.dates.map((date) => date) : [];

  const availableDates = place.availableDates ? place.availableDates.map((date) => date) : [];

  const allDates = [...confirmedDates, ...availableDates];

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setLoading(true);
    dispatch(getDetailPlace(params.id));
  }, [dispatch, render]);

  useEffect(() => {
    return () => {
      dispatch(resetDetails([]));
    };
  }, []);

  useEffect(() => {
    dispatch(getDetailMusicBandByEmail(user.email));
  }, [render2]);

  const checkAplied = (date) => {
    if (musicBand.pendingDates.find((d) => d.date.substring(0, 10) === date) !== undefined) {
      return true;
    }
    return false;
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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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

  const handleChange = (e) => {
    setInput({ ...input, comment: e.target.value });
    setErrors(
      validate({
        ...input,
        comment: e.target.value,
      }),
    );
  };

  const handleClick = (e) => {
    setInput({ ...input, rating: e.target.value });
    setErrors(
      validate({
        ...input,
        rating: e.target.value,
      }),
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.comment === "" && input.rating === 0) alert("No puede realizar un comentario vacío");
    else if (Object.keys(errors).length) alert("Check for errors and try again");
    else {
      await axios({
        method: "post",
        url: "/placereviews",
        data: {
          review: {
            author: user.name,
            comment: input.comment,
            rating: Number(input.rating),
          },
          email: place.email,
        },
        headers: {
          Authorization: localStorage.getItem("user-token"),
        },
      });
      setInput({
        comment: "",
        rating: 0,
      });
      setRender(!render);
    }
  };

  const handleAplica = async (e) => {
    if (checkAplied(e.target.value) === false) {
      await axios.post("/pendingdates", {
        musicEmail: user.email,
        placeEmail: place.email,
        date: e.target.value,
      });
      setRender2(!render2);
      alert("Tu petición a este local ha sido recibida, consulta el estado en tu pestaña de eventos");
    } else {
      alert("Ya aplicaste a esta fecha, espera una respuesta del local");
    }
  };

  const handlerSwitchNotif = (e) => {
    e.preventDefault();
    setSwitchNotif(!SwitchNotif);
  };

  return (
    <div>
      {loading ? (
        <div>
          <HomeStyleCont>
            <NavBar Home Eventos Perfil />
            <DetailStyleCont>
              <div className="FirstCont">
                <div className="NameAndRating">
                  <span className="PlaceName">{place.name}</span>
                  <span className="rating">Rating: ⭐{place.rating}</span>
                </div>
                <div className="DataCont">
                  <span className="title">Descripción</span>
                  <span className="description">{place.description}</span>
                </div>
                <div className="DataCont">
                  <span className="title">Próximas fechas</span>
                  <div className="DatesCont">
                    <Carousel className="carousel" responsive={responsive} showDots={true} minimumTouchDrag={80} slidesToSlide={1}>
                      {allDates &&
                        allDates.map((date) => {
                          return (
                            <div className="item" key={date._id}>
                              <span className="day">{date.date.substring(8, 10)}</span>
                              <span className="month">{getMonth(date.date.substring(5, 7))}</span>
                              <span className="year">{date.date.substring(0, 4)}</span>
                              <DateStatusStyled dateStatus={date.isAvailable}>
                                {date.isAvailable ? "Fecha Disponible" : "Fecha Cerrada"}
                              </DateStatusStyled>
                              {!date.isAvailable ? null : (
                                <button className="BtnVerMas" type="button" value={date.date.substring(0, 10)} onClick={(e) => handleAplica(e)}>
                                  Aplica
                                </button>
                              )}
                            </div>
                          );
                        })}
                    </Carousel>
                  </div>
                </div>
                {/* <hr />
          <span className="title">Ubicación</span>
          <p>Mapa</p> */}
                {SwitchNotif ? (
                  <div className="DataCont">
                    <span className="title">Comentarios</span>
                    <form className="comentar" onSubmit={(e) => handleSubmit(e)}>
                      <input placeholder="Ingresa tu comentario" className="input" value={input.comment} onChange={(e) => handleChange(e)} />
                      <div className="RateComentCont">
                        <div className="RateCont">
                          <span className="rate">Puntaje: {input.rating !== 0 ? input.rating : ""}</span>
                          <div className="buttons">
                            <button type="button" value={1} onClick={(e) => handleClick(e)}>
                              1
                            </button>
                            <button type="button" value={2} onClick={(e) => handleClick(e)}>
                              2
                            </button>
                            <button type="button" value={3} onClick={(e) => handleClick(e)}>
                              3
                            </button>
                            <button type="button" value={4} onClick={(e) => handleClick(e)}>
                              4
                            </button>
                            <button type="button" value={5} onClick={(e) => handleClick(e)}>
                              5
                            </button>
                          </div>
                        </div>
                        {errors.comment && <span>{errors.comment}</span>}
                        {errors.rating && <span>{errors.rating}</span>}
                        <button className="ButtonsComentar" type="submit">
                          Comentar
                        </button>
                      </div>
                    </form>
                    <div className="comentarios">
                      {place.reviews &&
                        place.reviews.map((p) => {
                          return (
                            <div key={p._id} className="coment">
                              <div className="NameRating">
                                <span className="autor">{p.author}</span>
                                <span className="ratingcoment">Rating: ⭐{p.rating}</span>
                              </div>
                              <p className="contenidocoment">{p.comment}</p>
                              <hr />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                ) : (
                  <div className="DataCont">
                    <span className="title">Reporte</span>
                    <Notificar Fondo />
                  </div>
                )}
              </div>
              <div className="SecondCont">
                <img src={place.profilePicture} className="profile" alt="Img not found" />
                <span className="stats">Ciudad: {place.city}</span>
                <span className="stats">Dirección: {place.adress}</span>
                <span className="stats">Persona a cargo: {place.personInCharge}</span>
                <span className="stats">Teléfono: {place.phoneNumber}</span>
                <span className="stats">Capacidad: {place.capacity}</span>
                <span className="stats">Sonido Propio: {place.hasSound ? "Si" : "No"}</span>
                <hr className="hr" />
                <p className="stats">Email: {place.email}</p>
                {place.socialMedia && place.socialMedia.instagram !== "" ? (
                  <a target="_blank" href={place.socialMedia.instagram} rel="noreferrer">
                    <img className="ImglogosRedes" src={LogoInstagram} alt="" />
                  </a>
                ) : null}
                <button
                  onClick={(e) => {
                    handlerSwitchNotif(e);
                  }}
                  className="ButtonReport"
                  type="button"
                >
                  {SwitchNotif ? "Reporte" : "Cerrar"}
                </button>
              </div>
            </DetailStyleCont>
          </HomeStyleCont>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}
