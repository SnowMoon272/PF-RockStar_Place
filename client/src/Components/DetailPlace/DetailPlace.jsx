import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailPlace } from "../../Redux/actions";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";

const HomeStyleCont = styled.div`
  box-sizing: border-box;
  background-color: ${Colors.Erie_Black};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailStyleCont = styled.div`
  box-sizing: border-box;
  width: 1500px;
  height: 3000px;
  background-color: ${Colors.Platinum};
  display: flex;

  .FirstCont {
    border: 3px solid red;
    width: 65%;
    height: fit-content;
    display: flex;
    flex-direction: column;

    .NameAndRating {
      display: flex;
      align-items: center;
      justify-content: space-around;

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
      margin-top: 30px;

      .title {
      font-family: "New Rocker";
      font-style: normal;
      font-weight: 400;
      font-size: 45px;
      text-align: center;
      color: ${Colors.Green_Light};
      }

    .description {
      }
    }

    
  }

  .SecondCont {
    border: 3px solid red;
    width: 35%;
    display: flex;
    flex-direction: column;
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

  useEffect(() => dispatch(getDetailPlace(params.email)), [dispatch]);

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
            <p className="description">{place.description}</p>
          </div>
          <div className="DataCont">
            <span className="title">Próximos eventos</span>
            <div className="DatesCont">
              {
                datesCerradas && datesCerradas.map((date) => {
                  return (
                    <div className="datecont">
                      <span className="date">{date.date}</span>
                      <span className="band">{date.musicBand}</span>
                    </div>
                  );
                })
              }
              {
                datesAvaible && datesAvaible.map((date) => {
                  return (
                    <div className="datecont">
                      <span className="date">{date.date}</span>
                      <span className="available">{date.available ? "Disponible" : "Cerrada"}</span>
                    </div>
                  );
                })
              }
            </div>
          </div>
          {/* <hr />
          <span className="title">Ubicación</span>
          <p>Mapa</p> */}
          <div className="DataCont">
            <span className="title">Comentarios</span>
            <div className="comentar">
              <input placeholder="Ingresa tu comentario" />
              <button type="submit">Comentar</button>
            </div>
            <div className="comentarios">
              {
                place.reviews && place.reviews.map((p) => {
                  return (
                    <div className="coment">
                      <span className="autor">{p.author}</span>
                      <p className="contenidocoment">{p.comment}</p>
                      <span className="ratingcoment">Rating: {p.rating}</span>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
        <div className="SecondCont">
          <img src={place.profilePicture} alt="Img not found" width="380px" height="250px" />
          <p>Ciudad: {place.city}</p>
          <p>Dirección: {place.adress}</p>
          <p>Capacidad: {place.capacity}</p>
          <p>Sonido Propio: {place.hasSound ? "Si" : "No"}</p>
          <hr />
          <p>Email: {place.email}</p>
        </div>
      </DetailStyleCont>
    </HomeStyleCont>
  );
}
