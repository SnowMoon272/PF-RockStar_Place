import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
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
import Footer from "../Footer/Footer";
import MapLocalDetail from "../MapView/MapLocalDetail";
import MapaVacio from "../../Assets/img/MapaLocalSinUbicacion.png";
import Reportar from "../Home/Elements/Reportar";

const HomeStyleCont = styled.div`
  box-sizing: border-box;
  background-image: url(${BGPerfil});
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 70px;

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
`;

const Blocker = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 40%;
  position: fixed;
  z-index: ${({ block }) => (block ? 2100 : -1)};
`;

const DetailStyleCont = styled.div`
  box-sizing: border-box;
  width: 80%;
  height: fit-content;
  background-color: rgba(20, 33, 61, 0.75);
  display: flex;
  margin: 2.5% 2.5% 2.5% 5%;

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

      #msgh1 {
        color: ${Colors.Platinum};
        width: 100%;
        text-align: center;
        font-size: 15px;
      }

      .TitleyButoon {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }

      .title {
        font-family: "New Rocker";
        font-style: normal;
        font-weight: 400;
        font-size: 45px;
        text-align: center;
        color: ${Colors.Blue_Vivid};
        margin: 0px;
      }

      .ButtonReport {
        font-family: "RocknRoll One";

        width: 150px;
        height: 35px;
        bottom: 0px;
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
        /* border: solid yellow 1.5px; */

        background: ${Colors.Erie_Black_Transparent};
        width: 100%;
        height: 150px;
        margin-top: 3%;
        display: flex;
        flex-direction: column;
        padding: 2%;
        box-sizing: border-box;
        border-radius: 15px;

        input {
          box-sizing: border-box;
          border: solid white 1px;
          border-radius: 10px;
          padding-left: 15px;
          width: 100%;
          height: 80%;
          background-color: transparent;
          /* border: none; */
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
                transition: all 0.5s ease;

                :hover {
                  transform: scale(1.2);
                  cursor: pointer;
                }
              }
            }
          }

          .spanError {
            font-size: 10px;
            color: ${Colors.Platinum};
          }

          .ButtonsComentar {
            font-family: "RocknRoll One", sans-serif;

            background-color: ${Colors.Blue_life};
            color: white;
            font-size: 2rem;
            border: none;
            border-radius: 10px;
            width: 170px;
            transition: all 0.5s ease;
            margin-top: 10px;
            height: 45px;

            :hover {
              transform: scale(1.1);
              cursor: pointer;
            }
          }

          button {
            width: 30%;
          }
        }
      }

      .comentarios {
        background: ${Colors.Erie_Black_Transparent};
        border-radius: 15px;
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
    .Report {
      padding: 15px;
      border-radius: 25px;
      background-color: ${Colors.Erie_Black_Transparent};
    }

    .hr {
      width: 100%;
      margin-top: 3%;
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
  color: wheat;
  font-size: 3rem;
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
  const [block, setBlock] = useState(false);

  const confirmedDates = place.dates ? place.dates.sort((a, b) => new Date(a.date.substring(0, 10)) - new Date(b.date.substring(0, 10))) : [];

  const availableDates = place.availableDates
    ? place.availableDates.sort((a, b) => new Date(a.date.substring(0, 10)) - new Date(b.date.substring(0, 10)))
    : [];

  const allDates = [...confirmedDates, ...availableDates];

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setLoading(true);
    dispatch(getDetailPlace(params.id));
  }, [dispatch, render]);

  useEffect(() => {
    return () => {
      dispatch(resetDetails([]));
      toast.remove();
    };
  }, []);

  useEffect(() => {
    dispatch(getDetailMusicBandByEmail(user.email));
  }, [render2]);

  const checkAplied = (date, email) => {
    if (musicBand.pendingDates.find((d) => d.date.substring(0, 10) === date && d.email === email) !== undefined) {
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
    if (input.comment === "" && input.rating === 0) toast.error("No puede realizar un comentario vacío");
    else if (Object.keys(errors).length) toast.error("Revisa la información y vuelve a intentar");
    else {
      setBlock(true);
      toast.promise(
        axios({
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
        }),
        {
          loading: "Enviando...",
          success: () => {
            setInput({
              comment: "",
              rating: 0,
            });
            setRender(!render);
            setBlock(false);
            toast.success("Comentario enviado");
          },
          error: "error",
        },
        {
          success: {
            style: {
              display: "none",
            },
          },
        },
      );
    }
  };

  const handleAplica = async (e) => {
    setBlock(true);
    if (checkAplied(e.target.value, place.email) === false) {
      toast.promise(
        axios.post("/pendingdates", {
          musicEmail: user.email,
          placeEmail: place.email,
          date: e.target.value,
        }),
        {
          loading: "Enviando...",
          success: () => {
            axios.post("/places/notification/add", {
              email: place.email,
              notification: {
                type: user.role,
                title: `El usuario ${user.name} se postuló a una fecha.`,
                message: "Para más información visita tu perfil.",
                before: undefined,
                from: user.email,
              },
            });
            setRender2(!render2);
            setBlock(false);
            toast.success("Tu petición a este local ha sido recibida, consulta el estado en tu pestaña de eventos", {
              duration: 4000,
            });
          },
          error: "error",
        },
        {
          success: {
            style: {
              display: "none",
            },
          },
        },
      );
    } else {
      setBlock(false);
      toast.error("Ya aplicaste a esta fecha, espera una respuesta del local");
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
            <Blocker block={block} />
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{
                className: "",
                style: {
                  fontSize: "1.5rem",
                  fontFamily: "RocknRoll One",
                  textAlign: "center",
                },
              }}
            />
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
                  <hr className="hr" />
                </div>
                <div className="DataCont">
                  <span className="title">Próximas fechas</span>
                  {allDates && allDates.length !== 0 ? (
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
                  ) : (
                    <h1 id="msgh1">El local aún no tiene fechas publicadas a las cuales puedas aplicar.</h1>
                  )}
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
                {SwitchNotif ? (
                  <div className="DataCont">
                    <div className="TitleyButoon">
                      <p className="title">Reseñas</p>
                      <button
                        onClick={(e) => {
                          handlerSwitchNotif(e);
                        }}
                        className="ButtonReport"
                        type="button"
                      >
                        {SwitchNotif ? "Reportar" : "Cancelar"}
                      </button>
                    </div>
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
                        {errors.comment && <span className="spanError">{errors.comment}</span>}
                        {errors.rating && <span className="spanError">{errors.rating}</span>}
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
                  <div className="DataCont Report">
                    <div className="TitleyButoon">
                      <p className="title">{SwitchNotif ? "Comentarios" : "Reportar"}</p>
                      {place && place.email && (
                        <button
                          onClick={(e) => {
                            handlerSwitchNotif(e);
                          }}
                          className="ButtonReport"
                          type="button"
                        >
                          {SwitchNotif ? "Reportar" : "Cancelar"}
                        </button>
                      )}
                    </div>
                    <Reportar info={place.email} setSwitchNotif={setSwitchNotif} SwitchNotif={SwitchNotif} />
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
