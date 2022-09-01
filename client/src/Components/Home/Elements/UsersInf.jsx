/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import Colors from "../../../Utils/colors";
import { getDetailMusicBand, getDetailPlaceByEmail } from "../../../Redux/actions";
import ImgBanda from "../../../Assets/img/ROLLING STONES.jpg";
import LoaderComponent from "../../Loader/Loading";

const ContainerGralStyled = styled.div`
  /* border: red solid 3px; */

  box-sizing: border-box;
  width: 100%;
  height: fit-content;

  .Container {
    /* border: #ff0000 solid 3px; */

    box-sizing: border-box;
    width: 100%;
    height: fit-content;

    .ContenedorDeArriba {
      /* border: #00ff08 solid 3px; */

      background-color: ${Colors.Oxford_Blue_transparent};
      text-align: center;
      width: 100%;
      height: 450px;
      box-sizing: border-box;
      position: relative;
      z-index: 20;
      display: flex;
      flex-direction: column;
      align-items: center;
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

  useEffect(() => {
    setLoading(true);
  }, []);

  function handleClickDetalles(e) {
    // Algo va pasar
  }

  return (
    <div>
      {loading ? (
        <div>
          <ContainerGralStyled>
            <div className="Container">
              <div className="ContenedorDeArriba">
                <h1>Contenedor de Arriba</h1>
              </div>
              <div className="divContainerdeAbajo">
                <div className="ContLeftRigth">
                  <div className="ContainerLocBan">
                    <h1>Bandas</h1>
                    <div key="5" className="divsSmallConfirmados">
                      <p>Los autenticos Asiaticos Locos</p>
                      <button
                        onClick={(e) => handleClickDetalles(e)}
                        type="button"
                        className="BTNDetalle"
                      >
                        Detalle
                      </button>
                    </div>
                  </div>
                  <div className="ContainerLocBan">
                    <h1>Locales</h1>
                    <div key="5" className="divsSmallConfirmados">
                      <p>Bar los pitufos locos.</p>
                      <button
                        onClick={(e) => handleClickDetalles(e)}
                        type="button"
                        className="BTNDetalle"
                      >
                        Detalle
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContainerGralStyled>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}

export default UsersInf;
