import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import LogoGithub from "../../Assets/img/logoGitHub.png";
import Colors from "../../Utils/colors";
import LogosTecnologias from "../../Assets/img/LOGOSTECNOLOGIAS.png";
import Envelope from "../../Assets/img/envelope.png";
import LogoHenry from "../../Assets/img/logoHenry.png";
import { isAuthenticated } from "../../Utils/auth.controller";
import ContactUs from "../Home/Elements/ContactUs";

const HomeStyleCont = styled.div`
  display: flex;
  box-sizing: border-box;
  .colaboradoresCont {
    height: fit-content;
    width: 17%;
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
        font-weight: 400;
        margin-left: 5%;
      }
    }
    .colaboradoresLi {
      height: auto;
      border-right: solid 1px ${Colors.Platinum};
      width: 100%;
      margin-top: -10%;

      li {
        font-size: 1.2rem;
        font-weight: 400;
        color: ${Colors.Platinum};
      }
      a {
        text-decoration: none;
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
      font-weight: 400;
      margin-left: 5%;
    }

    .contactanos {
      border: solid #fff 1px;

      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      height: fit-content;
      background-color: ${Colors.Platinum_Transparent};
      border-radius: 10px;

      :hover {
        transition: all 0.5s ease;
        transform: scale(1.1);
        transform: rotate(360deg);
        cursor: pointer;
        background-color: ${Colors.Erie_Black_Transparent};
      }

      img {
        /* border: solid #fff 3px; */
        width: 40px;
        margin-top: 8px;
      }

      h5 {
        /* border: solid #fff 3px; */

        font-size: 2rem;
        color: ${Colors.Platinum};
        font-weight: 400;
        margin: 10px 5px;
      }
    }
    .NotifCont {
      width: 80%;
    }

    .tecnologias {
      margin-top: -1%;
    }

    .henry {
      /* border: solid #fff 3px; */
      display: flex;
      align-self: flex-end;
      justify-self: flex-end;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;

      h6 {
        /* border: solid #fff 3px; */

        color: ${Colors.Platinum};
        font-size: 1rem;
        margin: 0px 15px;
        font-weight: 400;
      }

      img {
        /* border: solid #fff 3px; */

        width: 30px;
        height: 30px;
      }
    }
  }
`;

function Footer() {
  const navegate = useNavigate();
  const [SwitchNotif, setSwitchNotif] = useState(false);

  const handlerSwitchNotif = (e) => {
    e.preventDefault();
    /* !isAuthenticated() && alert("Debes iniciar sesi??n para hacer esto");
    isAuthenticated() ? setSwitchNotif(!SwitchNotif) : navegate("/iniciarsesion"); */
    if (!isAuthenticated()) {
      toast.remove();
      toast.error((t) => (
        <span>
          Debes iniciar sesi??n para hacer esto
          <button
            type="button"
            onClick={() => {
              navegate("/iniciarsesion");
            }}
          >
            Iniciar sesi??n
          </button>
        </span>
      ));
    } else setSwitchNotif(!SwitchNotif);
  };

  return (
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
      <div className="colaboradoresCont">
        <div className="colaboradoresTitle">
          <img src={LogoGithub} alt="Git Hub" />
          <h2>Colaboradores</h2>
        </div>
        <div className="colaboradoresLi">
          <ul>
            <a href="https://github.com/SnowMoon272" target="_blank" rel="noreferrer">
              <li>Manuel Serrano</li>
            </a>
            <a href="https://github.com/mgstraface" target="_blank" rel="noreferrer">
              <li>Mat??as Straface</li>
            </a>
            <a href="https://github.com/federicosilvaflores" target="_blank" rel="noreferrer">
              <li>Federico Silva</li>
            </a>
            <a href="https://github.com/FacuForsyth" target="_blank" rel="noreferrer">
              <li>Facundo Ramirez</li>
            </a>
            <a href="https://github.com/alann03" target="_blank" rel="noreferrer">
              <li>Alan Huismann</li>
            </a>
            <a href="https://github.com/Sebastian-pz" target="_blank" rel="noreferrer">
              <li>Sebasti??n P??rez</li>
            </a>
            <a href="http://github.com/Charlie1203" target="_blank" rel="noreferrer">
              <li>Carlos Laprida</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="centralCont">
        <button
          type="button"
          onClick={(e) => {
            handlerSwitchNotif(e);
          }}
          className="contactanos"
        >
          <img src={Envelope} alt="Contactanos" />
          <h5>Cont??ctanos</h5>
        </button>
        {SwitchNotif ? (
          <div className="NotifCont">
            <ContactUs Fondo FondoN setSwitchNotif={setSwitchNotif} />
          </div>
        ) : (
          <div className="tecnologias">
            <h2>Tecnolog??as utilizadas</h2>
            <img src={LogosTecnologias} alt="tecnologias utilizadas" />
          </div>
        )}
        <div className="henry">
          <h6>Este proyecto fue realizado en el bootcamp de soyHenry, durante el a??o 2022</h6>
          <img src={LogoHenry} alt="soyHenry" />
        </div>
      </div>
    </HomeStyleCont>
  );
}

export default Footer;
