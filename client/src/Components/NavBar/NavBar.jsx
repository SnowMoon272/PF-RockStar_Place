/* eslint-disable react/destructuring-assignment */
/* eslint-disable comma-dangle */
import React from "react";
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
  min-width: 80px;
  height: 100vh;
  box-shadow: 0px -4px 20px rgb(217, 217, 217);

  .Search_Filter {
    position: absolute;
    z-index: 90;
    left: 80px;
    top: 290px;
  }

  .Logo {
    position: relative;
    top: 0px;
    margin: 0px;
    padding: 30px 0px;
    width: 78px;
    height: 84px;
    border-bottom: solid 3px ${Colors.Erie_Black};
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
          width: 54px;
          height: 54px;
          background-color: white;
          transition: all 0.5s ease;
          :hover {
            transform: scale(1.1);
          }

          img {
            width: 45px;
            height: 45px;
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
            width: 62px;
            height: 62px;
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
          width: 62px;
          height: 62px;
          border-radius: 50%;
          border: solid black 4.5px;
          transition: all 0.5s ease;
          :hover {
            transform: scale(1.1);
            cursor: pointer;
          }
        }

        .Butons img {
          width: 34px;
          height: 34px;
          padding: 6px;
        }
      }
    }
  }
`;

function NavBar(props) {
  return (
    <NavBarStyle FondoImg={props.FondoImg}>
      <div className="Search_Filter">
        <SearchBarYFilters Search />
      </div>
      <div className="FondoVerde">
        <img src={Logo} alt="Logo" className="Logo" />
        <div className="ContainButons">
          {props.LogIn ? (
            <div className="buttonLink">
              <a className="Ancord" href="/Login">
                <img src={BTNLogin} alt="ico-login" />
              </a>
              <h3 className="H3">Ingresar</h3>
            </div>
          ) : (
            <div className="buttonLinkLogOut">
              <a className="Ancord" href="/Login">
                <img src={BTNLogOut} alt="ico-login" />
              </a>
              <h3 className="H3">Salir</h3>
            </div>
          )}
          <div className="ButonsEdits">
            {props.Buscar && (
              <>
                <button type="button" className="Butons">
                  <img src={BTNSearch} alt="ico-search" />
                </button>
                <h3 className="H3">Buscar</h3>
              </>
            )}
            {props.FiltroA && (
              <>
                <button type="button" className="Butons">
                  <img src={BTNFiltro} alt="ico-filtro" />
                </button>
                <h3 className="H3">Ciudad</h3>
              </>
            )}
            {props.FiltroB && (
              <>
                <button type="button" className="Butons">
                  <img src={BTNFiltro} alt="ico-filtro" />
                </button>
                <h3 className="H3">Sonido</h3>
              </>
            )}
            {props.Home && (
              <>
                <button type="button" className="Butons">
                  <img src={BTNHome} alt="ico-filtro" />
                </button>
                <h3 className="H3">Home</h3>
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
