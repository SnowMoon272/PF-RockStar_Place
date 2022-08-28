/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailPlace, postComment, resetDetails } from "../../Redux/actions";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";
import validate from "./validationsComment";
import BGPerfil from "../../Assets/img/hostile-gae60db101_1920.jpg";
import { getUserInfo } from "../../Utils/auth.controller";
// import LogoInstagram from "../../Assets/svg/Instagram.svg";
// import Editar from "../../Assets/svg/Editar.svg";

const HomeStyleCont = styled.div`
  box-sizing: border-box;
  background-image: url(${BGPerfil});
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailStyleCont = styled.div`
  box-sizing: border-box;
  width: 1500px;
  height: fit-content;
  background-color: rgba(20, 33, 61, 0.75);
  display: flex;
  margin: 2.5% 10%;

  .FirstCont {
    width: 65%;
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
            width: 90%;
            height: 250px;
            background-color: ${Colors.Blue_life};
            text-align: center;
            margin: 0px 6px;
            font-family: "RocknRoll One";
            display: flex;
            flex-direction: column;
            & .BtnDelete {
              position: absolute;
              right: 7%;
            }
            & .day {
              font-size: 50px;
            }
            & .month {
              font-size: 25px;
            }
            & .year {
              font-size: 25px;
            }
            & .dateStatus {
              width: 100%;
              background-color: ${Colors.Oxford_Blue};
              font-size: 20px;
            }
            & .BtnVerMas {
              position: absolute;
              top: 88%;
              right: 38%;
            }
          }
        }
      }

      .comentar {
        background: rgba(229, 229, 229, 0.5);
        width: 100%;
        height: 150px;
        margin-top: 3%;
        display: flex;
        flex-direction: column;
        padding: 2%;
        box-sizing: border-box;
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
    width: 35%;
    display: flex;
    flex-direction: column;
    padding: 2%;

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
  }
`;

export default function DetailPlace() {
  const dispatch = useDispatch();
  const params = useParams();
  const place = useSelector((state) => state.detail_place);
  const band = getUserInfo();
  const [input, setInput] = useState({
    comment: "",
    rating: 0,
  });
  const confirmedDates = place.dates ? place.dates.map((date) => date) : [];

  const availableDates = place.availableDates ? place.availableDates.map((date) => date) : [];

  const allDates = [...confirmedDates, ...availableDates];

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (place.length === 0) dispatch(getDetailPlace(params.id));
    if (input.rating === "") dispatch(getDetailPlace(params.id));
  }, [input]);

  useEffect(() => {
    return () => {
      dispatch(resetDetails([]));
    };
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.comment === "" && input.rating === 0) alert("No puede realizar un comentario vacío");
    else if (Object.keys(errors).length) alert("Check for errors and try again");
    else {
      dispatch(
        postComment({
          review: {
            author: "Usuario Anónimo",
            comment: input.comment,
            rating: Number(input.rating),
          },
          email: place.email,
        }),
      );
      setInput({ rating: 0, comment: "" });
      setTimeout(() => {
        setInput({ rating: 0, comment: "" });
      }, 1000);
    }
  };

  const handleAplica = async (e) => {
    await axios.post("/pendingdates", {
      musicEmail: band.email,
      placeEmail: place.email,
      date: e.target.value,
    });
  };

  return (
    <HomeStyleCont>
      <NavBar Home Eventos Perfil />
      <DetailStyleCont>
        <div className="FirstCont">
          <div className="NameAndRating">
            <span className="PlaceName">{place.name}</span>
            <span className="rating">Rating: {place.rating}</span>
          </div>
          <div className="DataCont">
            <span className="title">Descripción</span>
            <span className="description">{place.description}</span>
          </div>
          <div className="DataCont">
            <span className="title">Próximas fechas</span>
            <div className="DatesCont">
              <Carousel
                className="carousel"
                responsive={responsive}
                showDots={true}
                minimumTouchDrag={80}
                slidesToSlide={1}
              >
                {allDates &&
                  allDates.map((date) => {
                    return (
                      <div className="item" key={date._id}>
                        <span className="day">{date.date.substring(8, 10)}</span>
                        <span className="month">{getMonth(date.date.substring(5, 7))}</span>
                        <span className="year">{date.date.substring(0, 4)}</span>
                        <div className="dateStatus">
                          {date.isAvailable ? "Fecha Disponible" : "Fecha Cerrada"}
                        </div>
                        {!date.isAvailable ? null : (
                          <button
                            className="BtnVerMas"
                            type="button"
                            value={date.date.substring(0, 10)}
                            onClick={(e) => handleAplica(e)}
                          >
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
          <div className="DataCont">
            <span className="title">Comentarios</span>
            <form className="comentar" onSubmit={(e) => handleSubmit(e)}>
              <input
                placeholder="Ingresa tu comentario"
                className="input"
                value={input.comment}
                onChange={(e) => handleChange(e)}
              />
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
                <button type="submit">Comentar</button>
              </div>
            </form>
            <div className="comentarios">
              {place.reviews &&
                place.reviews.map((p) => {
                  return (
                    <div key={p._id} className="coment">
                      <div className="NameRating">
                        <span className="autor">{p.author}</span>
                        <span className="ratingcoment">Rating: {p.rating}</span>
                      </div>
                      <p className="contenidocoment">{p.comment}</p>
                      <hr />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="SecondCont">
          <img src={place.profilePicture} alt="Img not found" />
          <span className="stats">Ciudad: {place.city}</span>
          <span className="stats">Dirección: {place.adress}</span>
          <span className="stats">Capacidad: {place.capacity}</span>
          <span className="stats">Sonido Propio: {place.hasSound ? "Si" : "No"}</span>
          <hr className="hr" />
          <p className="stats">Email: {place.email}</p>
        </div>
      </DetailStyleCont>
    </HomeStyleCont>
  );
}
