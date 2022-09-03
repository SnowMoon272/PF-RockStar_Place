import React from "react";
import styled from "styled-components";
import LogoGithub from "../../Assets/img/logoGitHub.png";
import Colors from "../../Utils/colors";
import LogosTecnologias from "../../Assets/img/LOGOSTECNOLOGIAS.png";
import Envelope from "../../Assets/img/envelope.png";
import LogoHenry from "../../Assets/img/logoHenry.png";

const HomeStyleCont = styled.div`
  display: flex;
  box-sizing: border-box;
  .colaboradoresCont {
    height: 200px;
    width: 15%;
    .colaboradoresTitle {
      display: flex;
      img {
        width: 25px;
        height: 25px;
        margin-top: 5%;
      }
      h2 {
        color: ${Colors.Platinum};
        font-size: 2rem;
        margin-left: 5%;
      }
    }
    .colaboradoresLi {
      height: auto;
      border-right: solid 1px ${Colors.Platinum};
      width: 100%;
      margin-top: -10%;
      li {
        font-size: 1.5rem;
        color: ${Colors.Platinum};
        line-height: 2.5rem;
      }
    }
  }
  .centralCont {
    padding-right: 15px;
    width: 85%;
    margin-top: 1%;
    justify-content: space-between;
    display: flex;
    text-align: center;
    padding-left: 25px;

    h2 {
      color: ${Colors.Platinum};
      font-size: 2rem;
      margin-left: 5%;
    }

    .contactanos {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      img {
        width: 40px;
      }
      h5 {
        font-size: 2rem;
        color: ${Colors.Platinum};
        margin-top: -2%;
      }
    }
    .tecnologias {
      margin-top: -1%;
    }
    .henry {
      display: flex;
      align-self: flex-end;
      justify-self: flex-end;

      h6 {
        color: ${Colors.Platinum};
        font-size: 1rem;
      }

      img {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

function Footer() {
  return (
    <HomeStyleCont>
      <div className="colaboradoresCont">
        <div className="colaboradoresTitle">
          <img src={LogoGithub} alt="Git Hub" />
          <h2>Colaboradores</h2>
        </div>
        <div className="colaboradoresLi">
          <ul>
            <li>Manuel Serrano Torres</li>
            <li>Matías Gabriel Straface</li>
            <li>Federico Silva Flores</li>
            <li>Facundo Ramirez Forsyth</li>
            <li>Alan Huismann</li>
            <li>Sebastián Pérez Zuluaga</li>
            <li>Carlos Laprida</li>
          </ul>
        </div>
      </div>
      <div className="centralCont">
        <div className="contactanos">
          <img src={Envelope} alt="Contactanos" />
          <h5>Contáctanos</h5>
        </div>
        <div className="tecnologias">
          <h2>Tecnologías utilizadas</h2>
          <img src={LogosTecnologias} alt="tecnologias utilizadas" />
        </div>
        <div className="henry">
          <h6>Este proyecto fue realizado en el bootcamp de soyHenry, durante el año 2022</h6>
          <img src={LogoHenry} alt="soyHenry" />
        </div>
      </div>
    </HomeStyleCont>
  );
}

export default Footer;
