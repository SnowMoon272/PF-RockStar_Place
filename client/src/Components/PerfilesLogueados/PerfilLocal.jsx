import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { getDetailPlace, resetDetails } from "../../Redux/actions";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";
import BGPerfil from "../../Assets/img/hostile-gae60db101_1920.jpg";
import LogoInstagram from "../../Assets/svg/Instagram.svg";
import Editar from "../../Assets/svg/Editar.svg";
import LoaderComponent from "../Loader/Loading";
import Footer from "../Footer/Footer";
import MapLocalDetail from "../MapView/MapLocalDetail";
import MapaVacio from "../../Assets/img/MapaPerfilSinUbicacion.png";
import { getUserInfo } from "../../Utils/auth.controller";

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
  width: 80%;
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

      #h1msg {
        color: ${Colors.Platinum};
        width: 100%;
        text-align: center;
        font-size: 15px;
      }

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

      .mapa {
        width: 100%;
        height: 500px;
        margin-bottom: 2.5%;

        & img {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          margin-top: 2.5%;
        }
      }

      .bttLink {
        align-self: self-end;
        margin: -1% 2%;
      }

      .bttGestionar {
        font-family: "RocknRoll One", sans-serif;
        width: 115px;
        height: 32px;
        border: none;
        border-radius: 8px;
        font-size: 1.6rem;
        background-color: ${Colors.Blue_life};
        color: ${Colors.Platinum};
        transition: all 0.5s ease;

        :hover {
          transform: scale(1.1);
          cursor: pointer;
        }
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
              margin-top: 8%;
            }
            & .month {
              font-size: 25px;
            }
            & .year {
              font-size: 25px;
              margin-bottom: 9%;
            }
            & .dateStatus {
              width: 100%;
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
    }

    .comentarios {
      background: ${Colors.Erie_Black_Transparent};
      border-radius: 15px;
      width: 100%;
      margin-top: 3%;
      height: 50vh;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 12px;
      }
      &::-webkit-scrollbar-track {
        background: ${Colors.Oxford_Blue_transparent};
      }
      &::-webkit-scrollbar-thumb {
        background-color: #14213d;
        border-radius: 25px;
        border: 1px solid white;
      }

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

  .SecondCont {
    width: 35%;
    display: flex;
    flex-direction: column;
    padding: 2%;

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
      height: 35px;
      padding: 4px;

      width: 35px;
      border-radius: 50%;
      border: 4px solid black;
      transition: all 0.5s ease;

      :hover {
        transform: scale(1.2);
        cursor: pointer;
      }

      img {
        height: 30px;
        width: 30px;
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

const DateStatusStyled = styled.div`
  width: 100%;
  background-color: ${Colors.Oxford_Blue};
  background-color: ${({ dateStatus }) => (dateStatus ? "#6a994e" : "#bc4749")};
  font-size: 20px;
`;

const FooterStyledCont = styled.footer`
  background-color: ${Colors.Oxford_Blue};
  position: relative;
  box-sizing: border-box;
  height: fit-content;
  margin-left: 70px;
  padding-left: 25px;
  color: wheat;
  font-size: 3rem;
`;

const Blocker = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 40%;
  position: fixed;
  z-index: ${({ block }) => (block ? 2100 : 0)};
`;

export default function DetailPlace() {
  const dispatch = useDispatch();
  const user = getUserInfo();
  const navigate = useNavigate();
  const [block, setBlock] = useState(false);

  const place = useSelector((state) => state.detail_place);

  const confirmedDates = place.dates ? place.dates.sort((a, b) => new Date(a.date.substring(0, 10)) - new Date(b.date.substring(0, 10))) : [];

  const availableDates = place.availableDates
    ? place.availableDates.sort((a, b) => new Date(a.date.substring(0, 10)) - new Date(b.date.substring(0, 10)))
    : [];

  const allDates = [...confirmedDates, ...availableDates];

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(getDetailPlace(user._id));
  }, [dispatch]);

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

  if (place.banned === true || place.disabled === true) navigate("/");

  return (
    <div>
      {loading ? (
        <div>
          <Blocker block={block} />
          <HomeStyleCont>
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
            <NavBar Home block={block} setBlock={setBlock} />
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
                <hr className="hr" />
                <div className="DataCont">
                  <span className="title">Próximos eventos</span>
                  {allDates && allDates.length !== 0 ? (
                    <div className="DatesCont">
                      <Carousel className="carousel" responsive={responsive} showDots={true} minimumTouchDrag={80} slidesToSlide={1}>
                        {allDates.map((date) => {
                          return (
                            <div className="item" key={date._id}>
                              <span className="day">{date.date.substring(8, 10)}</span>
                              <span className="month">{getMonth(date.date.substring(5, 7))}</span>
                              <span className="year">{date.date.substring(0, 4)}</span>
                              <DateStatusStyled dateStatus={date.isAvailable}>
                                {date.isAvailable ? "Fecha Disponible" : "Fecha Cerrada"}
                              </DateStatusStyled>
                            </div>
                          );
                        })}
                      </Carousel>
                    </div>
                  ) : (
                    <h1 id="h1msg">Aún no tienes fechas publicadas. Clickea en -Gestionar- para agendar tu próxima fecha.</h1>
                  )}

                  <a href="/#Eventos" className="bttLink">
                    <button type="button" className="bttGestionar">
                      Gestionar
                    </button>
                  </a>
                  <hr className="hr" />
                </div>
                <div className="DataCont">
                  <span className="title">Ubicación</span>
                  <div className="mapa">
                    {place.coords ? (
                      place.coords.lat !== "" ? (
                        <MapLocalDetail placePosition={place.coords} placeName={place.name} />
                      ) : (
                        <img src={MapaVacio} alt="not found" />
                      )
                    ) : null}
                  </div>
                  <hr className="hr" />
                </div>
                <div className="DataCont">
                  <span className="title">Reseñas</span>
                  {place.reviews && place.reviews.length !== 0 ? (
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
                  ) : (
                    <h1 id="h1msg">Aún no tienes reseñas. Comienza a publicar fechas para que los artistas puedan puntuarte.</h1>
                  )}
                </div>
              </div>
              <div className="SecondCont">
                <img src={place.profilePicture} className="profile" alt="Img not found" />
                <div className="divsUnderImage">
                  <span className="statsUnderImage">Ciudad:</span>
                  <span className="descriptionSmall"> {place.city}</span>
                </div>
                <div className="divsUnderImage">
                  <span className="statsUnderImage">Dirección:</span>
                  <span className="descriptionSmall"> {place.adress}</span>
                </div>
                <div className="divsUnderImage">
                  <span className="statsUnderImage">Persona a cargo:</span>
                  <span className="descriptionSmall"> {place.personInCharge}</span>
                </div>
                <div className="divsUnderImage">
                  <span className="statsUnderImage">Teléfono:</span>
                  <span className="descriptionSmall"> {place.phoneNumber}</span>
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
                  <span className="statsUnderImage">Email:</span>
                  <span className="descriptionSmall"> {place.email}</span>
                </div>
                <div className="divsUnderImage">
                  {place.socialMedia && place.socialMedia.instagram !== "" ? (
                    <a target="_blank" href={place.socialMedia.instagram} rel="noreferrer">
                      <img className="ImglogosRedes" src={LogoInstagram} alt="" />
                    </a>
                  ) : null}
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
          <FooterStyledCont>
            <Footer />
          </FooterStyledCont>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}
