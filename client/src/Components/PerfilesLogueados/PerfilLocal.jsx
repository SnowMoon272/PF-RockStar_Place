/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-multi-spaces */
import React, { useEffect } from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetailPlace, resetDetails } from "../../Redux/actions";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";
import BGPerfil from "../../Assets/img/hostile-gae60db101_1920.jpg";
import LogoInstagram from "../../Assets/svg/Instagram.svg";
import Editar from "../../Assets/svg/Editar.svg";
import LoaderComponent from "../Loader/Loading";

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

export default function DetailPlace() {
  const dispatch = useDispatch();
  const params = useParams();
  const place = useSelector((state) => state.detail_place);

  const confirmedDates = place.dates ? place.dates.map((date) => date) : [];

  const availableDates = place.availableDates ? place.availableDates.map((date) => date) : [];

  const allDates = [...confirmedDates, ...availableDates];
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(getDetailPlace(params.id));
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

  return (
    <div>
      {loading ? (
        <div>
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
                            </div>
                          );
                        })}
                    </Carousel>
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
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}
