/* eslint-disable indent */
/* eslint-disable no-confusing-arrow */
/* React stuff */
import React, { useEffect, useState } from "react";

/* Modules */
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/* Components & Actions */
import Pagination from "../Pagination/Pagination";
import CardsPlaces from "../Cards/CardsPlaces";
import Colors from "../../Utils/colors";
import { getUserInfo } from "../../Utils/auth.controller";
import NavBar from "../NavBar/NavBar";
import LoaderComponent from "../Loader/Loading";
import { getPlaces, updateFilters, popularitySort, getDetailMusicBand, resetDetails, getDetailPlaceEvent } from "../../Redux/actions";
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

      & .SinEvento {
        font-family: "RocknRoll One", sans-serif;
        text-align: center;
      }

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
        }

        & p {
          margin-top: 20px;
          font-size: 1.6rem;
          line-height: 27px;
          max-width: 420px;

          & span {
            color: ${Colors.Blue_Vivid};
            font-size: 2.4rem;
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

const CarsStyleCont = styled.section`
  width: 75%;
  height: fit-content;
  margin-bottom: 100px;
  background-color: ${Colors.Oxford_Blue_transparent};
  margin-top: 160px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    margin-bottom: 30px;
    color: ${Colors.Platinum};
    font-family: "New Rocker", cursive;
    font-size: 7rem;
  }

  .Paginado {
    width: 900px;
    height: fit-content;
    margin-bottom: 20px;
  }

  .BotonesExtra {
    position: absolute;
    z-index: 10;
    top: 445px;
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      font-family: "RocknRoll One", sans-serif;
      width: 190px;
      height: 55px;
      padding: 0px 15px;
      background-color: ${Colors.Blue_life};
      color: ${Colors.Platinum};
      border-radius: 10px;
      border: none;
      font-size: 1.8rem;
      transition: all 0.5s ease;
      :hover {
        transform: scale(1.2);
        cursor: pointer;
      }
    }

    .Filtros {
      text-align: center;
      /* border-bottom: solid 3px ${Colors.Platinum}; */
      h6 {
        margin: 0px;
        color: ${Colors.Platinum};
        font-size: 3rem;
      }

      .FiltrosData {
        display: flex;
        justify-content: space-between;

        p {
          margin: 0px 15px;
          color: ${Colors.Platinum};
          font-size: 1.5rem;
        }
      }
    }

    .SwitchCont {
      display: flex;
      align-items: center;

      label {
        display: inline-block;
        width: 65px;
        height: 33px;
        background-color: ${Colors.Platinum};
        border-radius: 100px;
        position: relative;
        transition: 0.2s;
        margin: 0px 10px 0px 0px;
        cursor: pointer;
        ::after {
          content: "";
          display: block;
          width: 25px;
          height: 25px;
          background-color: ${Colors.Green_Nigth};
          border-radius: 100px;
          position: absolute;
          top: 4px;
          left: 4px;
          transition: 0.2s;
        }
      }

      #switch:checked + label::after {
        left: 36px;
      }

      #switch:checked + label {
        background-color: ${Colors.Green_Light};
      }

      #switch {
        display: none;
      }

      .title {
        font-family: "RocknRoll One", sans-serif;
        font-size: 20px;
        color: ${Colors.Platinum};
      }
    }
  }
  .ContainerCards {
    position: relative;
    z-index: 9;
    box-sizing: border-box;
    width: 100%;
    margin: 50px;
    padding: 0px 50px;

    .NotFound {
      margin-top: 50px;
      color: ${Colors.Platinum};
      font-size: 4rem;
      text-align: center;
    }
  }
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
  z-index: 25;
`;
/* * * * * * * * * * * React Component Function  * * * * * * * * * * */
function HomeBL() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let allPlaces = useSelector((state) => state.places);
  allPlaces = allPlaces.filter((place) => {
    return place.name !== "" && place.banned !== true && place.disabled !== true;
  });

  const filters = useSelector((state) => state.filters);

  const musicBand = useSelector((state) => state.detail_music_band);
  const placeEvent = useSelector((state) => state.detail_event);
  const [user, setuser] = useState({});
  const [loading, setLoading] = useState(false);
  /* * * * * * * * * * * React Hooks  * * * * * * * * * * */
  const confirmedDates = musicBand.dates ? musicBand.dates.sort((a, b) => new Date(a.date.substring(0, 10)) - new Date(b.date.substring(0, 10))) : [];

  if (musicBand._id && !placeEvent._id) {
    if (confirmedDates.length > 0) dispatch(getDetailPlaceEvent(confirmedDates[0].email));
  }

  function disabledValidate() {
    if (musicBand.disabled === true) {
      navigate("/reactivarCuenta");
    }
  }

  function validate() {
    if (musicBand && musicBand.name === "") {
      alert("Debe cargar los datos de la banda");
      dispatch(resetDetails([]));
      navigate("/actualizarbanda");
    }
  }

  useEffect(async () => {
    setLoading(true);
    dispatch(getPlaces());
    const user = await getUserInfo();
    setuser(user);
    dispatch(getDetailMusicBand(user._id));

    return () => {
      dispatch(
        updateFilters({
          Ciudad: false,
          Sonido: false,
          Evento: false,
        }),
      );
    };
  }, []);

  useEffect(() => {
    disabledValidate();
    validate();
    return () => {
      dispatch(
        updateFilters({
          Ciudad: false,
          Sonido: false,
          Evento: false,
        }),
      );
    };
  }, [musicBand]);

  const [reRender, setreRender] = useState(false);

  // Pagination
  const [pageNumber, setPageNumber] = useState(1);
  const [cardsPerPage] = useState(10);
  const ultimaCard = pageNumber * cardsPerPage;
  const primeraCard = ultimaCard - cardsPerPage;
  const currentCards = allPlaces.slice(primeraCard, ultimaCard);
  const paginado = (num) => {
    setPageNumber(num);
  };

  const [filter, setFilter] = useState({
    FilterCities: "",
    FilterSounds: "",
    FilterEvents: "",
  });

  /* * * * * * * * * * * Handle´s * * * * * * * * * * */
  const handlerClickReset = () => {
    dispatch(getPlaces());
    dispatch(
      updateFilters({
        Ciudad: false,
        Sonido: false,
        Evento: false,
      }),
    );
    setFilter({
      FilterCities: "",
      FilterSounds: "",
      FilterEvents: "",
    });
    paginado(1);
  };

  const handleClickSort = async () => {
    await dispatch(popularitySort(allPlaces));
    paginado(1);
    setreRender(!reRender);
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
        <div>
          <HomeStyleCont>
            <NavBar Buscar FiltroA FiltroB FiltroC Eventos Perfil UserLog paginado={paginado} setFilter={setFilter} filter={filter} />

            <FirtVewStyleCont>
              <div className="ImgContainer">
                <img src={BGHome} alt="Background" />
              </div>
              <div className="Heder">
                <img className="Logo" src={IMGLogoA} alt="" />
                <h1 className="Title">{musicBand.name}</h1>
                <button type="button" className="Notificacion">
                  <img src="" alt="" />
                </button>
              </div>
              <div className="CardUnicaCont">
                <div className="ImgBanda">
                  <img src={musicBand.profilePicture} alt="Banda" />
                </div>
                {confirmedDates.length > 0 ? (
                  <div className="ProximoInfCont">
                    <div className="ProximoInf">
                      <h4>Proximo Evento</h4>
                      <p>
                        <span>Local: </span>
                        {placeEvent.name} <br />
                        <span>Fecha: </span>
                        {confirmedDates.length > 0
                          ? `${confirmedDates[0].date.substring(8, 10)} de ${getMonth(
                              confirmedDates[0].date.substring(5, 7),
                            )} de ${confirmedDates[0].date.substring(0, 4)}`
                          : null}
                        <br />
                        <span>Contacto: </span>
                        {placeEvent.personInCharge}
                        <br />
                        <span>Telefono: </span>
                        {placeEvent.phoneNumber}
                        <br />
                        <span>Direccion: </span>
                        {placeEvent.adress}
                      </p>
                    </div>
                    <div className="ProximoIMGyBtn">
                      <img src={placeEvent.profilePicture} alt="Local" />
                      <Link className="Lynk_Btn" to={`/musicband/events/${user._id}`}>
                        <button type="button">Detalle</button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="SinEvento">
                    <h4>Aquí podrás ver tu próximo evento confirmado.</h4>
                  </div>
                )}
              </div>
            </FirtVewStyleCont>
            <SecondVewStyleCont UserLog id="SecondVewStyleCont">
              <div className="ContenidoPrevio">
                <img src={Logo} alt="Logo" />
              </div>
              <CarsStyleCont>
                <h4 id="Ancla_Titulo">Conoce Nuestros Locales</h4>
                <div className="Paginado">
                  <Pagination UserLog cardsPerPage={cardsPerPage} allPlaces={allPlaces.length} paginado={paginado} pageNumber={pageNumber} />
                </div>
                <div className="BotonesExtra">
                  <button
                    onClick={(e) => {
                      handlerClickReset(e);
                    }}
                    type="button"
                  >
                    Resetear Filtros
                  </button>
                  <div className="Filtros">
                    <div className="FiltrosData">
                      <p>Filtro Ciudad: {filters.Ciudad ? "Aplicado ✔️" : "No Aplicado ❌"} </p>
                      <p>Filtro Sonido: {filters.Sonido ? "Aplicado ✔️" : "No Aplicado ❌"} </p>
                      <p>Filtro Evento: {filters.Evento ? "Aplicado ✔️" : "No Aplicado ❌"} </p>
                    </div>
                  </div>
                  <button type="button" onClick={(e) => handleClickSort(e)}>
                    ⭐ Populares ⭐
                  </button>
                </div>
                <div className="ContainerCards">
                  {currentCards.length ? (
                    <CardsPlaces UserLog currentPlaces={currentCards} />
                  ) : (
                    <div className="NotFound"> ¡No se encontraron resultados! </div>
                  )}
                </div>
                <Pagination UserLog cardsPerPage={cardsPerPage} allPlaces={allPlaces.length} paginado={paginado} pageNumber={pageNumber} />
              </CarsStyleCont>
            </SecondVewStyleCont>
            <FooterStyledCont>
              <Footer />
            </FooterStyledCont>
          </HomeStyleCont>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}

export default HomeBL;
