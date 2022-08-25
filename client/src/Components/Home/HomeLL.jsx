/* eslint-disable no-confusing-arrow */
/* React stuff */
import React from "react";

/* Modules */
import styled from "styled-components";
import { Link } from "react-router-dom";

/* Components & Actions */
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";

/* Form Img & SVG */
import BGHome from "../../Assets/img/hostile-gae60db101_1920.jpg";
import IMGLogoA from "../../Assets/img/logo3.png";
import IMGBand from "../../Assets/img/ROLLING STONES.jpg";
import IMGLocal from "../../Assets/img/upload_7xCMVkX.png";
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
      font-weight: 400;
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
    font-weight: 400;
    padding: 40px;

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
          font-weight: 400;
        }

        & p {
          margin-top: 20px;
          font-size: 1.6rem;
          line-height: 27px;
          max-width: 420px;
          font-weight: 400;

          & span {
            color: ${Colors.Blue_Vivid};
            font-size: 2.4rem;
            font-weight: 400;
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
            font-weight: 400;
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

const SecondStyleCont = styled.section`
  /* border: solid red 3px; */

  box-sizing: border-box;
  width: 75%;
  height: fit-content;
  margin-bottom: 100px;
  background-color: ${Colors.Oxford_Blue_transparent};
  margin-top: 160px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h4 {
    margin-bottom: 30px;
    color: ${Colors.Platinum};
    font-family: "New Rocker", cursive;
    font-size: 7rem;
    font-weight: 400;
  }

  & .FechasCont {
    /* border: solid blue 3px; */

    box-sizing: border-box;
    width: 85%;
    height: fit-content;

    & .TusFechas {
      /* border: solid green 3px; */

      color: ${Colors.Platinum};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & h5 {
        /* border: solid yellow 3px; */

        font-family: "New Rocker", cursive;
        font-size: 4rem;
        font-weight: 400;
        margin: 0px;
        padding-bottom: 10px;
        width: 100%;
      }
      & .Carusel {
        /* border: solid yellow 3px; */

        width: 100%;
        height: 170px;
        font-weight: 400;
        background-color: #cc303060;
        display: flex;
        justify-content: center;
        align-items: center;
        & p {
          color: black;
          font-size: 2.5rem;
          transform: rotate(-25deg);
          border-bottom: 3px solid black;
          border-top: 3px solid black;
          background-color: #cc8e3054;
        }
      }

      & .AddFecha {
        border-bottom: solid white 3px;

        box-sizing: border-box;
        width: 100%;
        padding: 15px 10px 35px 10px;
        display: flex;
        align-items: center;

        & label {
          font-size: 2rem;
          font-weight: 400;

          & input {
            margin-left: 10px;
            font-size: 2rem;
            color: ${Colors.Platinum};
            background-color: ${Colors.Blue_life};
            /* border: 1px solid white; */
            outline: none;
            padding: 4px 8px;
            cursor: pointer;
            border-radius: 5px;
          }
        }
      }
    }
  }

  & .SolicitudesCont {
    /* border: solid red 3px; */
    box-sizing: border-box;
    margin-bottom: 70px;

    color: ${Colors.Platinum};
    & h5 {
      /* border: solid yellow 3px; */
      box-sizing: border-box;

      font-family: "New Rocker", cursive;
      font-size: 4rem;
      font-weight: 400;
      margin: 55px 0px 10px 0px;
      padding-bottom: 10px;
      width: 100%;
    }

    & .SolicitudesContJr {
      /* border: solid green 3px; */

      box-sizing: border-box;
      display: flex;
      flex-direction: column;

      & .Solicitud {
        /* border: solid blue 3px; */

        display: flex;
        justify-content: space-between;
        margin: 10px 0px;
        width: 100%;
        background-color: ${Colors.Blue_life};

        & .Left {
          /* border: solid orange 3px; */

          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 70%;
          & p {
            font-size: 1.6rem;
            font-weight: 400;
          }
          & button {
            font-family: "RocknRoll One", sans-serif;

            width: 100px;
            height: 35px;
            font-size: 1.5rem;
            border: none;
            color: ${Colors.Platinum};
            border-radius: 8px;
            background-color: ${Colors.Oxford_Blue};
            letter-spacing: 1px;
            transition: all 0.5s ease;

            :hover {
              transform: scale(1.2);
              cursor: pointer;
            }
          }
        }

        & .Rigth {
          /* border: solid purple 3px; */

          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 30%;
          margin-left: 150px;

          & button {
            font-family: "RocknRoll One", sans-serif;

            width: 100px;
            height: 35px;
            font-size: 1.5rem;
            font-weight: bold;
            border: none;
            color: ${Colors.Oxford_Blue};
            border-radius: 8px;
            background-color: ${Colors.Platinum};
            letter-spacing: 1px;
            transition: all 0.5s ease;
            margin: 0px 10px;

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

const FooterStyle = styled.section`
  box-sizing: border-box;
  position: relative;
  background-color: ${Colors.Erie_Black};
  width: 100%;
  height: 80px;
  z-index: 27;
  color: white;
  padding-left: 75px;
`;

/* * * * * * * * * * * React Component Function  * * * * * * * * * * */
function HomeBL() {
  /* * * * * * * * * * * React JSX * * * * * * * * * * */
  return (
    <HomeStyleCont>
      <NavBar Eventos Perfil HelpLog UserLog />

      <FirtVewStyleCont>
        <div className="ImgContainer">
          <img src={BGHome} alt="Background" />
        </div>
        <div className="Heder">
          <img className="Logo" src={IMGLogoA} alt="" />
          <h1 className="Title">Nombre de el Local</h1>
          <button type="button" className="Notificacion">
            <img src="" alt="" />
          </button>
        </div>
        <div className="CardUnicaCont">
          <div className="ImgBanda">
            <img src={IMGLocal} alt="Banda" />
          </div>
          <div className="ProximoInfCont">
            <div className="ProximoInf">
              <h4>Proximo Evento</h4>
              <p>
                <span>Banda: </span>Los Autenticos Tlacuaches <br />
                <span>Fecha: </span>Sabado 27 de Marzo. <br />
                <span>Contacto: </span>Dimitri Gomez Plata <br />
                <span>Telefono: </span> (+52) 55 6192 2596 <br />
                <span>Direccion: </span> Av. Siempre Viva #54 interior 12 Colonia Las Americas
              </p>
            </div>
            <div className="ProximoIMGyBtn">
              <img src={IMGBand} alt="Local" />
              <Link className="Lynk_Btn" to="/home/band">
                <button type="button">Detalle</button>
              </Link>
            </div>
          </div>
        </div>
      </FirtVewStyleCont>
      <SecondVewStyleCont UserLog id="SecondVewStyleCont">
        <div className="ContenidoPrevio">
          <img src={Logo} alt="Logo" />
        </div>

        <SecondStyleCont>
          <h4 id="Ancla_Titulo">Gestiona tus Eventos</h4>
          <section className="FechasCont">
            <div className="TusFechas">
              <h5>Tus Fechas</h5>
              <div className="Carusel">
                <p>!Proximamente Carrusel¡</p>
                <p>!Proximamente Carrusel¡</p>
                <p>!Proximamente Carrusel¡</p>
              </div>
              <div className="AddFecha">
                <label htmlFor="start">
                  Añadir Fecha:
                  <input
                    type="date"
                    id="start"
                    // value="2022-08-25"
                    // min="2022-08-25"
                    // max="2024-12-31"
                  />
                </label>
              </div>
            </div>

            <div className="SolicitudesCont">
              <h5>Solicitudes</h5>
              <div className="SolicitudesContJr">
                <div className="Solicitud">
                  <div className="Left">
                    <p>25/08/2022</p>
                    <p>Los Angeles Azules</p>
                    <button type="button">Detalle</button>
                  </div>
                  <div className="Rigth">
                    <button type="button">Aceptar</button>
                    <button type="button">Rechazar</button>
                  </div>
                </div>
                <div className="Solicitud">
                  <div className="Left">
                    <p>25/08/2022</p>
                    <p>Los Angeles Azules</p>
                    <button type="button">Detalle</button>
                  </div>
                  <div className="Rigth">
                    <button type="button">Aceptar</button>
                    <button type="button">Rechazar</button>
                  </div>
                </div>
                <div className="Solicitud">
                  <div className="Left">
                    <p>25/08/2022</p>
                    <p>Los Angeles Azules</p>
                    <button type="button">Detalle</button>
                  </div>
                  <div className="Rigth">
                    <button type="button">Aceptar</button>
                    <button type="button">Rechazar</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SecondStyleCont>
      </SecondVewStyleCont>

      <FooterStyle>
        Fotter
        asdlfjkhgasdkjfughkaduisfhgiluadhfligushjdofiughjoadipufghjlsikdufjvblskdfjgpiijfghoiusjfñboisjdlfbkjsrñftogbjslfifdjnmg
        sdlifdjgsld iolsidfurtdhjg isufdfhopiu sdlfiu ghsldi uh
      </FooterStyle>
    </HomeStyleCont>
  );
}

export default HomeBL;
