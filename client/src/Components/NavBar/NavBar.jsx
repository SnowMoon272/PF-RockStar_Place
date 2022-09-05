/* eslint-disable no-confusing-arrow */
/* eslint-disable indent */
/* eslint-disable no-var */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* React stuff */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/* Modules */
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getNotifications, removeNotifications } from "../../Redux/actions";

/* Components & Actions */
import { getUserInfo, isAuthenticated, isMusicband } from "../../Utils/auth.controller";
import SearchBarYFilters from "./SearchBar_Filters/SearchBar_y_Filters";
import Colors from "../../Utils/colors";
import Card from "../Home/Elements/Card";

/* Form Img & SVG */
import Logo from "../../Assets/img/guitar-logo-icon.png";
import BGImg from "../../Assets/img/Metal.jpg";
import BTNLogin from "../../Assets/svg/Ingresar.svg";
import BTNSearch from "../../Assets/svg/Buscar.svg";
import BTNFiltro from "../../Assets/svg/filtro.svg";
import BTNHome from "../../Assets/svg/Home.svg";
import BTNHelp from "../../Assets/svg/Ayuda.svg";
import BTNEvent from "../../Assets/svg/Eventos.svg";
import BTNLogOut from "../../Assets/svg/Salir.svg";
import BTNUser from "../../Assets/svg/User.svg";
import BTNRefresh from "../../Assets/svg/Retroceder.svg";
import SVGNoti from "../../Assets/svg/Notificacion.svg";

/* * * * * * * * * * * Styled Components CSS  * * * * * * * * * * */

const NavBarStyle = styled.nav`
  position: relative;
  z-index: 2000;
  background-image: url(${({ FondoImg }) => FondoImg && BGImg});
  background-color: ${({ FondoImg }) => !FondoImg && Colors.Oxford_Blue};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  position: fixed;
  left: 0px;
  top: 0px;
  max-width: 80px;
  height: 100vh;
  box-shadow: 0px -4px 20px rgb(217, 217, 217);
  letter-spacing: 1px;

  & .NotioficationContLogo {
    /* border: solid #ff00fb 3px; */

    width: 100px;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 15px;
    left: 94vw;

    & button {
      border-radius: 100%;
      background-color: ${Colors.Blue_life};

      border: none;
      cursor: pointer;
      position: relative;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease;

      :hover {
        transform: scale(1.2);
        cursor: pointer;
      }

      & .ImgCapana {
        width: 30px;
      }

      & .FondoNumero {
        position: absolute;
        border-radius: 100%;
        background-color: #ff0000;
        top: 5px;
        right: 7px;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        & p {
          color: ${Colors.Platinum};
          font-size: 1.5rem;
          /* color: black; */
        }
      }
    }
  }

  .Search_Filter {
    position: absolute;
    left: 90px;
    top: 280px;
  }

  .Logo {
    position: relative;
    top: 0px;
    margin: 0px;
    padding: 30px 0px 0px 0px;
    width: 70px;
    height: 80px;
  }

  .FondoVerde {
    box-sizing: border-box;
    font-family: "RocknRoll One", sans-serif;
    background-color: ${({ FondoImg }) => (FondoImg ? "#132e2e91" : Colors.Oxford_Blue)};
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .ContainButons {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      margin: 30px 0px;
      .H3 {
        margin: 4px;
        font-weight: 400;
      }

      .buttonLinkLogOut {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        text-decoration: none;
        font-size: 1.2rem;

        .Ancord {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 4px solid black;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          background-color: white;
          transition: all 0.5s ease;
          :hover {
            cursor: pointer;
            transform: scale(1.2);
          }

          img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
          }
        }
      }

      .buttonLink {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        text-decoration: none;
        font-size: 1.2rem;

        & img:hover {
          transform: scale(1.2);
        }

        .Ancord {
          cursor: pointer;
          img {
            transition: all 0.5s ease;
            width: 52px;
            height: 52px;
            border-radius: 50%;
          }
        }
        .H3 {
          margin: 4px;
          color: white;
        }

        .FoundIMG {
          background-color: white;
        }
      }

      .ButonsEdits {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 70%;

        .ButonSwitch {
          margin-bottom: 15px;
          width: 60px;
          font-family: "RocknRoll One", sans-serif;
          background-color: ${({ FondoImg }) => (FondoImg ? Colors.Green_Light : Colors.Blue_life)};
          color: ${({ FondoImg }) => (FondoImg ? Colors.Erie_Black : Colors.Platinum)};
          border-radius: 7px;
          font-size: 1.4rem;
          font-weight: bold;
          border: ${({ FondoImg }) => (FondoImg ? "solid white 1px" : "none")};
          transition: all 0.5s ease;
          display: flex;
          align-items: center;
          justify-content: center;

          :hover {
            cursor: pointer;
            transform: scale(1.2);
          }

          & img {
            margin: 2px;
          }
        }
        .Pag {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .FiltrosCont {
          display: flex;
          flex-direction: column;
          align-items: center;

          .FiltersVew {
            display: ${({ filterSwitch }) => (filterSwitch ? "flex" : "none")};
            flex-direction: column;
            align-items: center;
          }
        }

        .H3 {
          margin: 4px;
          color: white;
          margin-bottom: 15px;
        }

        .Butons {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: solid black 4.5px;
          transition: all 0.5s ease;
          :hover {
            transform: scale(1.2);
            cursor: pointer;
          }
        }

        .Butons img {
          width: 27px;
          height: 27px;
          padding: 6px;
        }

        .Perfil img {
          width: 50px;
          height: 50px;
        }

        .Link {
          width: 45px;
          height: 45px;
          background-color: white;
        }
      }
    }
  }
`;

const NotificacionesStyleCont = styled.section`
  border: solid #ffffff 1px;

  position: fixed;
  box-sizing: border-box;
  left: 70px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  margin: auto;
  background-color: ${Colors.Oxford_Blue};
  width: 80%;
  height: fit-content;
  padding: 35px;
  border-radius: 10px;
  z-index: 1000;

  & h2 {
    /* border: solid #ff1100 3px; */

    font-family: "New Rocker";
    text-align: center;
    margin: 0px;
    margin-bottom: 20px;
    width: 100%;
    font-size: 6rem;
    font-weight: 400;
    color: ${Colors.Platinum};
  }

  & .CardsContainer {
    /* border: solid #2fff00 3px; */

    box-sizing: border-box;
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: ${Colors.Platinum};

    & .CardsContainerScroll {
      width: 100%;
      box-sizing: border-box;

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
    }
  }
`;

/* * * * * * * * * * * React Component Function  * * * * * * * * * * */
function NavBar({ Perfil, Eventos, FondoImg, FiltroA, FiltroB, FiltroC, paginado, setFilter, filter, LogIn, Home, Buscar, UserLog }) {
  /* * * * * * * * * * * React Hooks  * * * * * * * * * * */
  const [navState, setNavState] = useState({
    Active: false,
    Search: false,
    FilterCities: false,
    FilterSounds: false,
    FilterEvents: false,
  });
  const dispatch = useDispatch();
  const [infUser, setInfUser] = useState({});
  const [filterSwitch, setfilterSwitch] = useState(false);
  const [notificacion, setnotificacion] = useState(false);
  const notifications = useSelector((state) => state.notifications);

  const news = (notifications) => {
    let number = 0;
    notifications.forEach((notification) => {
      if (notification.new) number++;
    });
    return number;
  };

  useEffect(() => {
    if (isAuthenticated()) {
      const InfUser = getUserInfo();
      setInfUser(InfUser);
      dispatch(getNotifications(InfUser.role, InfUser.email));
    }
  }, []);
  /* * * * * * * * * * * Handle´s * * * * * * * * * * */
  const handlerClickSearch = (e) => {
    setNavState({
      ...navState,
      Search: !navState.Search,
      Active: !navState.Active,
    });
  };

  const handlerClickCiudad = (e) => {
    setNavState({
      ...navState,
      FilterCities: !navState.FilterCities,
      Active: !navState.Active,
    });
  };

  const handlerClickSound = (e) => {
    setNavState({
      ...navState,
      FilterSounds: !navState.FilterSounds,
      Active: !navState.Active,
    });
  };

  const handlerClickEvents = (e) => {
    setNavState({
      ...navState,
      FilterEvents: !navState.FilterEvents,
      Active: !navState.Active,
    });
  };

  const handlerClickExit = (e) => {
    dispatch(removeNotifications());
    localStorage.removeItem("user-token");
  };

  const handlerSwitchFilter = (e) => {
    e.preventDefault();
    setfilterSwitch(!filterSwitch);
  };

  const handlerClickNot = (e) => {
    setnotificacion(!notificacion);
  };

  /* * * * * * * * * * * React JSX * * * * * * * * * * */

  return (
    <NavBarStyle FondoImg={FondoImg} filterSwitch={filterSwitch}>
      {!FondoImg && (
        <div className="NotioficationContLogo">
          <button type="button" onClick={(e) => handlerClickNot(e)}>
            <img className="ImgCapana" src={SVGNoti} alt="Notificacion" />
            <div className="FondoNumero">
              <p>{news(notifications)}</p>
            </div>
          </button>
        </div>
      )}
      {notificacion && (
        <NotificacionesStyleCont>
          <h2>Notificaciones</h2>
          <div className="CardsContainer">
            <div className="CardsContainerScroll">
              {notifications.map((notification) => {
                return <Card info={notification} />;
              })}
            </div>
          </div>
        </NotificacionesStyleCont>
      )}
      <div className="Search_Filter">
        <SearchBarYFilters
          paginado={paginado}
          Search={navState.Search}
          FilterCities={navState.FilterCities}
          FilterSounds={navState.FilterSounds}
          FilterEvents={navState.FilterEvents}
          Active={navState.Active}
          setNavState={setNavState}
          navState={navState}
          setFilter={setFilter}
          filter={filter}
          UserLog={UserLog}
        />
      </div>
      <div className="FondoVerde">
        <img src={Logo} alt="Logo" className="Logo" />
        <div className="ContainButons">
          {LogIn ? (
            <div className="buttonLink">
              <a className="Ancord" href="/iniciarsesion">
                <img src={BTNLogin} alt="ico-login" />
              </a>
              <h3 className="H3">Ingresar</h3>
            </div>
          ) : (
            <div className="buttonLinkLogOut">
              <a className="Ancord" href="/">
                <img onClick={(e) => handlerClickExit(e)} src={BTNLogOut} alt="ico-login" />
              </a>
              <h3 className="H3">Salir</h3>
            </div>
          )}
          <div className="ButonsEdits">
            {Buscar && (
              <button onClick={(e) => handlerSwitchFilter(e)} className="ButonSwitch" type="button">
                {filterSwitch ? <img src={BTNRefresh} alt="ico-login" /> : "Filtros"}
              </button>
            )}
            {filterSwitch ? (
              <div className="FiltrosCont">
                <div className="FiltersVew">
                  {Buscar && (
                    <>
                      <button
                        type="button"
                        disabled={navState.FilterCities || navState.FilterSounds || navState.FilterEvents}
                        onClick={(e) => {
                          handlerClickSearch(e);
                        }}
                        className="Butons"
                      >
                        <img src={BTNSearch} alt="ico-search" />
                      </button>
                      <h3 className="H3">Buscar</h3>
                    </>
                  )}
                  {FiltroA && (
                    <>
                      <button
                        disabled={navState.Search || navState.FilterSounds || navState.FilterEvents}
                        onClick={(e) => {
                          handlerClickCiudad(e);
                        }}
                        type="button"
                        className="Butons"
                      >
                        <img src={BTNFiltro} alt="ico-filtro" />
                      </button>
                      <h3 className="H3">Ciudad</h3>
                    </>
                  )}
                  {FiltroB && (
                    <>
                      <button
                        disabled={navState.Search || navState.FilterCities || navState.FilterEvents}
                        onClick={(e) => {
                          handlerClickSound(e);
                        }}
                        type="button"
                        className="Butons"
                      >
                        <img src={BTNFiltro} alt="ico-filtro" />
                      </button>
                      <h3 className="H3">Sonido</h3>
                    </>
                  )}
                  {FiltroC && (
                    <>
                      <button
                        disabled={navState.Search || navState.FilterCities || navState.FilterSounds}
                        onClick={(e) => {
                          handlerClickEvents(e);
                        }}
                        type="button"
                        className="Butons"
                      >
                        <img src={BTNFiltro} alt="ico-filtro" />
                      </button>
                      <h3 className="H3">Fechas</h3>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div className="Pag">
                {Home && (
                  <>
                    <Link to="/" className="Butons Link">
                      <img src={BTNHome} alt="ico-filtro" />
                    </Link>
                    <h3 className="H3">Home</h3>
                  </>
                )}
                {Eventos && (
                  <>
                    <Link to={`/musicband/events/${infUser._id}`} className="Butons Link">
                      <img src={BTNEvent} alt="ico-filtro" />
                    </Link>
                    <h3 className="H3">Eventos</h3>
                  </>
                )}
                {Perfil && (
                  <>
                    <Link to={isMusicband() ? `/musicbandprofile/${infUser._id}` : `/placeprofile/${infUser._id}`} className="Butons Link Perfil">
                      <img src={BTNUser} alt="ico-filtro" />
                    </Link>
                    <h3 className="H3">Perfil</h3>
                  </>
                )}
              </div>
            )}
          </div>

          <div className="buttonLink">
            <a className="Ancord" href="/help">
              <img className="FoundIMG" src={BTNHelp} alt="Help" />
            </a>
            <h3 className="H3">Ayuda</h3>
          </div>
        </div>
      </div>
    </NavBarStyle>
  );
}

export default NavBar;
