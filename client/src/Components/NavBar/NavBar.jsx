/* eslint-disable no-fallthrough */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../Assets/img/guitar-logo-icon.png";
import Colors from "../../Utils/colors";
import BGImg from "../../Assets/img/Metal.jpg";
import BTNLogin from "../../Assets/svg/Ingresar.svg";
import BTNSearch from "../../Assets/svg/Buscar.svg";
import BTNFiltro from "../../Assets/svg/filtro.svg";
import BTNHome from "../../Assets/svg/Home.svg";
import BTNHelp from "../../Assets/svg/Ayuda.svg";
import BTNEdit from "../../Assets/svg/Editar.svg";
import BTNEvent from "../../Assets/svg/Eventos.svg";
import BTNLogOut from "../../Assets/svg/Salir.svg";
import SearchBarYFilters from "./SearchBar_Filters/SearchBar_y_Filters";

const NavBarStyle = styled.nav`
  position: relative;
  z-index: 90;
  background-image: url(${(props) => props.FondoImg && BGImg});
  background-color: ${(props) => !props.FondoImg && Colors.Oxford_Blue};
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
    background-color: ${(props) => (props.FondoImg ? "#132e2e91" : Colors.Oxford_Blue)};
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
            transform: scale(1.1);
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
          transform: scale(1.1);
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
        height: 70%;

        .H3 {
          margin: 4px;
          color: white;
          margin-bottom: 25px;
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
            transform: scale(1.1);
            cursor: pointer;
          }
        }

        .Butons img {
          width: 24px;
          height: 24px;
          padding: 6px;
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

function NavBar(props) {
  const [navState, setNavState] = useState({
    Active: false,
    Search: false,
    FilterCities: false,
    FilterSounds: false,
  });

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

  return (
    <NavBarStyle FondoImg={props.FondoImg}>
      <div className="Search_Filter">
        <SearchBarYFilters
          paginado={props.paginado}
          Search={navState.Search}
          FilterCities={navState.FilterCities}
          FilterSounds={navState.FilterSounds}
          Active={navState.Active}
          setNavState={setNavState}
          navState={navState}
          setFilter={props.setFilter}
          filter={props.filter}
        />
      </div>
      <div className="FondoVerde">
        <img src={Logo} alt="Logo" className="Logo" />
        <div className="ContainButons">
          {props.LogIn ? (
            <div className="buttonLink">
              <a className="Ancord" href="/iniciarsesion">
                <img src={BTNLogin} alt="ico-login" />
              </a>
              <h3 className="H3">Ingresar</h3>
            </div>
          ) : (
            <div className="buttonLinkLogOut">
              <a className="Ancord" href="/iniciarsesion">
                <img src={BTNLogOut} alt="ico-login" />
              </a>
              <h3 className="H3">Salir</h3>
            </div>
          )}
          <div className="ButonsEdits">
            {props.Home && (
              <>
                <Link to="/" className="Butons Link">
                  <img src={BTNHome} alt="ico-filtro" />
                </Link>
                <h3 className="H3">Home</h3>
              </>
            )}
            {props.Buscar && (
              <>
                <button
                  type="button"
                  disabled={navState.FilterCities || navState.FilterSounds}
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
            {props.FiltroA && (
              <>
                <button
                  disabled={navState.Search || navState.FilterSounds}
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
            {props.FiltroB && (
              <>
                <button
                  disabled={navState.Search || navState.FilterCities}
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
            {props.Eventos && (
              <>
                <button type="button" className="Butons">
                  <img src={BTNEvent} alt="ico-filtro" />
                </button>
                <h3 className="H3">Eventos</h3>
              </>
            )}
            {props.Edit && (
              <>
                <button type="button" className="Butons">
                  <img src={BTNEdit} alt="ico-filtro" />
                </button>
                <h3 className="H3">Editar</h3>
              </>
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
