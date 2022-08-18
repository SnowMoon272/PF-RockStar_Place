import React from "react";
import styled from "styled-components";
import Logo from "../../Assets/img/guitar-logo-icon.png";
import BTNLogin from "../../Assets/svg/Ingresar.svg";
import BTNSearch from "../../Assets/svg/Buscar.svg";
import BTNFiltro from "../../Assets/svg/filtro.svg";
//import BTNHome from "../../Assets/svg/Home.svg";
import BTNHelp from "../../Assets/svg/Ayuda.svg";

const NavBarStyle = styled.div`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 100%;
  font-family: Arial, Helvetica, sans-serif, white;

  .NavBarCont {
    width: 76px;
    height: 1080px;
    left: 0px;
    top: 0px;
    filter: drop-shadow(0px -4px 20px rgba(217, 217, 217, 0.21));
    background-image: url("https://thumbs.dreamstime.com/b/fondo-azul-de-la-textura-del-metal-48200907.jpg");
  }

  .Logo{
    position: absolute;
    width: 64px;
    height: 70px;
    left: 6px;
    top: 22px;
  }

  .ButtonLogin{
    position: absolute;
    left: 3px;
    top: 114px;
    img {
      width: 65px;
      height: 65px;
      background-color: white;
    }
    color: white;
    font-size: 180%;
    font-family: "Montserrat",Arial,Helvetica,Geneva,sans-serif;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
  }

  .ButtonSearch{
    position: absolute;
    width: 65px;
    height: 65px;
    left: 5px;
    top: 327px; 
  }

  .ButtonCiudad{
    position: absolute;
    width: 65px;
    height: 65px;
    left: 5px;
    top: 416px;
  }

  .ButtonStatus{
    position: absolute;
    width: 65px;
    height: 65px;
    left: 5px;
    top: 505px;
  }

  /* .BTNHome{
    position: absolute;
    left: 5px;
    top: 416px;
    img {
      width: 65px;
      height: 65px;
    }
  } */

  .BTNHelp{
    position: absolute;
    left: 5px;
    top: 780px;
    img {
      width: 65px;
      height: 65px;
      background-color: white;
    }
    color: white;
    font-size: 180%;
    font-family: "Montserrat",Arial,Helvetica,Geneva,sans-serif;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
  }
`;

function NavBar() {
  return (
    <NavBarStyle>
      <div className="NavBarCont">
        <img src={Logo} alt="Logo" className="Logo" />
        <a className="ButtonLogin" href="/login">
          <img src={BTNLogin} alt="ico-login" />
          Ingresar
        </a>
        <button type="button" className="ButtonSearch">
          <img src={BTNSearch} alt="ico-search" />
          Buscar
        </button>
        <button type="button" className="ButtonCiudad">
          <img src={BTNFiltro} alt="ico-filtro" />
          Ciudad
        </button>
        <button type="button" className="ButtonStatus">
          <img src={BTNFiltro} alt="ico-filtro" />
          Status
        </button>
        {/* <a className="BTNHome" href="/">
          <img src={BTNHome} alt="Home" />
          Home
        </a> */}
        <a className="BTNHelp" href="/ayuda">
          <img src={BTNHelp} alt="Help" />
          Ayuda
        </a>
      </div>
    </NavBarStyle>
  );
}

export default NavBar;
