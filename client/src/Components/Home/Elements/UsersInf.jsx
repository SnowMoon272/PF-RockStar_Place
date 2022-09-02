/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import axios from "axios";
import Colors from "../../../Utils/colors";
import LoaderComponent from "../../Loader/Loading";
import ModoNotificar from "./ModoNotificar";
import ModoEditar from "./ModoEditar";
import Notificar from "./Notificar";
import IMGLogo from "../../../Assets/img/LogoCircular.png";

const ContainerGralStyled = styled.div`
  /* border: red solid 3px; */

  /* padding-top: 150px; */
  box-sizing: border-box;
  width: 100%;
  height: fit-content;

  .Container {
    /* border: #ff0000 solid 3px; */

    box-sizing: border-box;
    width: 100%;
    height: fit-content;

    & .SwitchyLogo {
      /* border: #001eff solid 3px; */

      position: relative;
      display: flex;
      justify-content: space-between;

      .SwitchCont {
        position: relative;
        top: 45px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: fit-content;
        align-self: center;
        /* border: solid white 1px; */
        border-radius: 10px;
        padding: 0px 30px;
        background-color: #010101e2;

        p {
          font-family: "New Rocker", cursive;
          color: white;
          font-size: 2rem;
        }

        label {
          display: inline-block;
          width: 65px;
          height: 33px;
          background-color: ${Colors.Oxford_Blue};
          border-radius: 100px;
          position: relative;
          transition: 0.2s;
          margin: 0px 20px 0px 20px;
          cursor: pointer;
          ::after {
            content: "";
            display: block;
            width: 25px;
            height: 25px;
            background-color: ${Colors.Blue_Vivid};
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
          background-color: ${Colors.Platinum};
        }

        #switch {
          display: none;
        }
      }

      img {
        position: relative;
        width: 170px;
        height: 170px;
        top: 100px;
        left: 70px;
        z-index: 25;
      }
    }

    .ContenedorDeArriba {
      /* border: #00ff08 solid 3px; */

      background-color: ${Colors.Oxford_Blue_transparent};
      width: 100%;
      height: ${({ Switch }) => (Switch ? "fit-content" : "450px")};
      box-sizing: border-box;
      position: relative;
      z-index: 20;
    }

    .divContainerdeAbajo {
      /* border: #ff0000 solid 3px; */

      position: relative;
      z-index: 20;
      margin-top: 130px;
      box-sizing: border-box;
      width: 100%;
      display: flex;
      justify-content: center;

      .ContLeftRigth {
        /* border: #4dff00 solid 3px; */

        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 150px;

        .ContainerLocBan {
          /* border: blue solid; */
          width: 45%;

          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: ${Colors.Oxford_Blue_transparent};
          height: auto;
          padding-bottom: 50px;

          h1 {
            /* border: red solid; */

            font-family: "New Rocker";
            font-weight: 400;
            font-size: 4rem;
            color: ${Colors.Platinum};
            margin: 30px;
          }

          .divsSmallConfirmados {
            /* border: red solid 3px; */

            display: flex;
            background-color: #264380;
            justify-content: space-between;
            margin: 10px;
            align-items: center;
            width: 80%;
            border-radius: 10px;

            p {
              font-family: "RocknRoll One";
              font-weight: 400;
              font-size: 1.5rem;
              color: ${Colors.Platinum};
              padding: 5px 15px;
            }

            .BTNDetalle {
              /* border: red solid 3px; */

              width: 70px;
              height: 3rem;
              margin-right: 15px;
              background: ${Colors.Platinum};
              color: ${Colors.Dark_Cornflower_blue};
              border: none;
              border-radius: 8px;
              font-size: 1.5rem;
              font-weight: bold;
              cursor: pointer;
              transition: all 0.5s ease;

              :hover {
                cursor: pointer;
                transform: scale(1.2);
              }
            }
          }
        }
      }
    }
  }
`;

function UsersInf() {
  const [loading, setLoading] = useState(false);
  const [Switch, setSwitch] = useState(false);
  const [SwitchNotif, setSwitchNotif] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  function handleCheckBox(e) {
    setSwitch(!Switch);
    setSwitchNotif(false);
  }

  function handleClickDetallesBanda(e) {
    // Algo va pasar
  }
  function handleClickDetallesLocal(e) {
    // Algo va pasar
  }

  return (
    <div>
      {loading ? (
        <ContainerGralStyled Switch={Switch}>
          <div className="Container">
            <div className="SwitchyLogo">
              <div className="SwitchCont">
                <p>Notificar</p>
                <input value={Switch} id="switch" type="checkbox" onChange={(e) => handleCheckBox(e)} />
                <label htmlFor="switch" className="label" />
                <p>Editar</p>
              </div>
              <img src={IMGLogo} alt="" />
            </div>
            <div className="ContenedorDeArriba">
              {Switch ? <ModoEditar /> : <ModoNotificar setSwitchNotif={setSwitchNotif} SwitchNotif={SwitchNotif} />}
            </div>
            {SwitchNotif && <Notificar Fondo />}
            <div className="divContainerdeAbajo">
              <div className="ContLeftRigth">
                <div className="ContainerLocBan">
                  <h1>Bandas</h1>
                  <div key="5" className="divsSmallConfirmados">
                    <p>Los autenticos Asiaticos Locos</p>
                    <button onClick={(e) => handleClickDetallesBanda(e)} type="button" className="BTNDetalle">
                      Detalle
                    </button>
                  </div>
                </div>
                <div className="ContainerLocBan">
                  <h1>Locales</h1>
                  <div key="5" className="divsSmallConfirmados">
                    <p>Bar los pitufos locos.</p>
                    <button onClick={(e) => handleClickDetallesLocal(e)} type="button" className="BTNDetalle">
                      Detalle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerGralStyled>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}

export default UsersInf;
