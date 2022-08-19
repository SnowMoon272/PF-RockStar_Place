import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailPlace } from "../../Redux/actions";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";

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
  }
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
  }
];

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
  background-color: ${Colors.Green_Nigth};
  display: flex;

  .FirstCont {
    border: 3px solid red;
    width: 65%;
    display: flex;
    flex-direction: column;

    .name {
      font-family: 'New Rocker';
      font-style: normal;
      font-weight: 400;
      font-size: 75px;
      text-align: center;
      color: ${Colors.Green_Light};
    }

    .rating {
      font-family: 'New Rocker';
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      text-align: center;
      color: ${Colors.Green_Light};
    }

    .title {
      font-family: 'New Rocker';
      font-style: normal;
      font-weight: 400;
      font-size: 45px;
      text-align: center;
      color: ${Colors.Green_Light};
    }

    .description {

    }
  }

  .SecondCont {
    border: 3px solid red;
    width: 35%;
    display: flex;
    flex-direction: column;
  }
`;

export default function DetailPlace() {
  const dispatch = useDispatch();
  const params = useParams();
  const myPlace = useSelector((state) => state.detail_place);

  useEffect(() => dispatch(getDetailPlace(params.email)), [dispatch]);

  return (
    <HomeStyleCont>
      <NavBar LogIn Home FondoImg />
      <DetailStyleCont>
        <div className="FirstCont">
          <span className="name">{myPlace.name}</span>
          <span className="rating">Rating: {myPlace.rating}</span>
          <span className="title">Descripción</span>
          <p className="description">{myPlace.description}</p>
          <hr />
          <span className="title">Próximos eventos</span>
          <p className="dates">Fechas cerradas: </p>
          <p className="dates">Fechas disponibles: </p>
          <hr />
          <span className="title">Ubicación</span>
          <p>Mapa</p>
          <hr />
          <span className="title">Comentarios</span>
          <p>...</p>
          <hr />
        </div>
        <div className="SecondCont">
          <img src={myPlace.profilePicture} alt="Img not found" width="380px" height="250px" />
          <p>Ciudad: {myPlace.city}</p>
          <p>Dirección: {myPlace.adress}</p>
          <p>Capacidad: {myPlace.capacity}</p>
          <p>Sonido Propio: {myPlace.hasSound ? "Si" : "No"}</p>
          <hr />
          <p>Email: {myPlace.email}</p>
        </div>
      </DetailStyleCont>
    </HomeStyleCont>

  );
}
