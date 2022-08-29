/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-multi-spaces */
import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetailPlace, resetDetails } from "../../Redux/actions";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";
import BGPerfil from "../../Assets/img/hostile-gae60db101_1920.jpg";
import LogoInstagram from "../../Assets/svg/Instagram.svg";
import Editar from "../../Assets/svg/Editar.svg";

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
        color: white;
      }

      .rating {
        font-family: "New Rocker";
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        text-align: center;
        color: white;
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
        font-size: 30px;
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
        /* .DateCard {
            .date {

            }
          }
        } */
      }

      .comentarios {
        background: rgba(229, 229, 229, 0.5);
        width: 100%;
        margin-top: 3%;
        height: 50vh;
        overflow-y: scroll;

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
  }

  .hr {
    width: 100%;
    margin-top: 3%;
  }

  .statsUnderImage {
    font-family: "RocknRoll One";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: ${Colors.Blue_Vivid};
    margin-top: 3%;
  }

  .descriptionSmall {
    font-family: "RocknRoll One";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: justify;
    color: ${Colors.Platinum};
  }
  .divsUnderImage {
    margin: 5px 0px 5px 0px;
  }
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

  .divEditar {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .divEditaryTexto {
    position: relative;
    top: -70px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .imgEditar {
      display: flex;
      justify-content: center;
      background-color: white;
      align-items: center;
      height: 45px;
      padding: 4px;

      width: 45px;
      border-radius: 50%;
      border: 4px solid black;
      transition: all 0.5s ease;

      :hover {
        transform: scale(1.2);
        cursor: pointer;
      }

      img {
        height: 40px;
        width: 40px;
      }
    }
    h4 {
      font-family: "RocknRoll One";
      font-style: normal;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 14px;
      margin: 10px 0px 10px 0px;
      color: white;
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

  useEffect(() => {
    dispatch(getDetailPlace(params.id));
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetDetails([]));
    };
  }, []);

  return (
    <HomeStyleCont>
      <NavBar Home />
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
          <hr className="hr" />
          <div className="DataCont">
            <span className="title">Próximos eventos</span>
            <div className="DatesCont">
              {datesCerradas &&
                datesCerradas.map((date) => {
                  return (
                    <div key={date.date} className="DateCard">
                      <span className="date">{date.date}</span>
                      <span className="band">{date.musicBand}</span>
                    </div>
                  );
                })}
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
            <hr className="hr" />
          </div>
          <div className="DataCont">
            <span className="title">Reseñas</span>

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
          <div className="divsUnderImage">
            <span className="statsUnderImage">Ciudad:</span>
            <span className="descriptionSmall"> {place.city}</span>
          </div>
          <div className="divsUnderImage">
            <span className="statsUnderImage">Dirección:</span>
            <span className="descriptionSmall"> {place.adress}</span>
          </div>
          <div className="divsUnderImage">
            <span className="statsUnderImage">Capacidad:</span>
            <span className="descriptionSmall"> {place.capacity}</span>
          </div>
          <div className="divsUnderImage">
            <span className="statsUnderImage">Sonido Propio:</span>
            <span className="descriptionSmall">{place.hasSound ? "Si" : "No"}</span>
          </div>
          <hr className="hr" />
          <div className="divsUnderImage">
            <span className="statsUnderImage">Persona a cargo:</span>
            <span className="descriptionSmall"> {place.personInCharge}</span>
          </div>
          <div className="divsUnderImage">
            <span className="statsUnderImage">Telefono:</span>
            <span className="descriptionSmall">{place.phoneNumber}</span>
          </div>
          <div className="divsUnderImage">
            <span className="statsUnderImage">Email:</span>
            <span className="descriptionSmall"> {place.email}</span>
          </div>
          <div className="divsUnderImage">
            {/* {musicBand.socialMedia && musicBand.socialMedia.instagram !== "" ? ( */}
            <a target="_blank" /* href={musicBand.socialMedia.instagram} */ rel="noreferrer">
              <img className="ImglogosRedes" src={LogoInstagram} alt="" />
            </a>
            {/* ) : null} */}
          </div>
          <div className="divEditar">
            <div className="divEditaryTexto">
              <Link to="/actualizarlocal" className="imgEditar">
                <img src={Editar} alt="Edit" />
              </Link>
              <h4>Editar</h4>
            </div>
          </div>
        </div>
      </DetailStyleCont>
    </HomeStyleCont>
  );
}
