/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
//import OwlCarousel from "react-owl-carousel";
//import "owl.carousel/dist/assets/owl.carousel.css";
//import "owl.carousel/dist/assets/owl.theme.default.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailPlace, postComment, resetDetails } from "../../Redux/actions";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";
import validate from "./validationsComment";

const HomeStyleCont = styled.div`
  box-sizing: border-box;
  background-color: ${Colors.Erie_Black};
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
  background-color: ${Colors.Green_Nigth};
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
        color: ${Colors.Green_Light};
      }

      .rating {
        font-family: "New Rocker";
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        text-align: center;
        color: ${Colors.Green_Light};
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
        color: ${Colors.Green_Light};
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
        /* .DateCard {
            .date {

            }
          }
        } */
      }
      // carrousel
      .owl-theme {
        width: 270px;
        display: flex;
        flex-direction: column;
        font-size: 10px;
      }
      .itemDate {
        background-color: #d4005fb3;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        height: 75px;
        width: 75px;
        border: solid white;
        margin: 3px;
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
const datesCerradas = [
  {
    date: "01-09-2022",
    musicBand: "The Rolling Stones",
  },
  {
    date: "07-10-2022",
    musicBand: "Roger Waters",
  },
  {
    date: "19-10-2022",
    musicBand: "Damas Gratis",
  },
  {
    date: "25-10-2022",
    musicBand: "Roberto G. Bolaños",
  },
  {
    date: "02-11-2022",
    musicBand: "Abel Pintos",
  },
];

//fechas disponibles
const datesAvaible = [
  {
    date: "20-09-2022",
    available: true,
  },
  {
    date: "27-09-2022",
    available: true,
  },
  {
    date: "09-10-2022",
    available: true,
  },
];

export default function DetailPlace() {
  const dispatch = useDispatch();
  const params = useParams();
  const place = useSelector((state) => state.detail_place);
  const [input, setInput] = useState({
    comment: "",
    rating: 0,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (place.length === 0) dispatch(getDetailPlace(params.email));
    if (input.rating === "") dispatch(getDetailPlace(params.email));
  }, [input]);

  useEffect(() => {
    return () => {
      dispatch(resetDetails([]));
    };
  }, []);

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
      setInput({ rating: "", comment: "" });
      setTimeout(() => {
        setInput({ rating: "", comment: "" });
      }, 1000);
    }
  };

  return (
    <HomeStyleCont>
      <NavBar LogIn Home FondoImg />
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
            <div className="DatesCont">
              {/* {datesCerradas &&
                datesCerradas.map((date) => {
                  return (
                    <div key={date.date} className="DateCard">
                      <span className="date">{date.date}</span>
                      <span className="band">{date.musicBand}</span>
                    </div>
                  );
                })} */}
              {datesAvaible &&
                datesAvaible.map((date) => {
                  return (
                    <div key={date.date} className="DateCard">
                      <span className="date">{date.date}</span>
                      <span className="available">{date.available ? "Disponible" : "Cerrada"}</span>
                    </div>
                  );
                })}
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
