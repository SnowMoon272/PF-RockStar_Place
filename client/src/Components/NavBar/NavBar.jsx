import React from "react";
import styled from "styled-components";
import Logo from "../../Assets/img/guitar-logo-icon.png";
import Colors from "../../Utils/colors";
import BGImg from "../../Assets/img/Metal.jpg";
import BTNLogin from "../../Assets/svg/Ingresar.svg";
import BTNSearch from "../../Assets/svg/Buscar.svg";
import BTNFiltro from "../../Assets/svg/filtro.svg";
//import BTNHome from "../../Assets/svg/Home.svg";
import BTNHelp from "../../Assets/svg/Ayuda.svg";

const NavBarStyle = styled.div`
  background-image: url(${BGImg});
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
    border: solid blue 3px;
    font-family: "RocknRoll One", sans-serif;
    background-color: #132e2e91;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .ContainButons {
      box-sizing: border-box;
      border: solid red 3px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      margin: 30px 0px;

      .buttonLink {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        text-decoration: none;
        cursor: pointer;
        img {
          width: 65px;
          height: 65px;
          background-color: white;
          border-radius: 50%;
          border: solid 3px ${Colors.Erie_Black};
        }
      }

      .ButonsEdits {
        border: solid green 3px;

        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 50%;

        .Butons {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          border: solid black 3px;
        }
      }
      .BTNHelp {
        img {
          width: 65px;
          height: 65px;
          background-color: white;
        }
        color: white;
        font-size: 180%;
        font-family: "Montserrat", Arial, Helvetica, Geneva, sans-serif;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
`;

function NavBar() {
  return (
    <NavBarStyle>
      <div className="FondoVerde">
        <img src={Logo} alt="Logo" className="Logo" />
        <div className="ContainButons">
          <a className="buttonLink" href="/login">
            <img src={BTNLogin} alt="ico-login" />
            Ingresar
          </a>
          <div className="ButonsEdits">
            <button type="button" className="Butons">
              <img src={BTNSearch} alt="ico-search" />
            </button>
            Buscar
            <button type="button" className="Butons">
              <img src={BTNFiltro} alt="ico-filtro" />
            </button>
            Ciudad
            <button type="button" className="Butons">
              <img src={BTNFiltro} alt="ico-filtro" />
            </button>
            Status
          </div>
          <a className="buttonLink" href="/help">
            <img src={BTNHelp} alt="Help" />
            Ayuda
          </a>
        </div>
      </div>
    </NavBarStyle>
  );
}

export default NavBar;
