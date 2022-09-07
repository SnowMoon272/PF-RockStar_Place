/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import Colors from "../../../Utils/colors";
import LoaderComponent from "../../Loader/Loading";
import ModoNotificar from "./ModoNotificar";
import ModoEditar from "./ModoEditar";
import Notificar from "./Notificar";
import IMGLogo from "../../../Assets/img/LogoCircular.png";
import {
  adminClickBanda,
  adminClickLocal,
  getDetailMusicBandByEmail,
  getDetailPlaceByEmail,
  getMusicOrPlacesByName,
  getMusicBands,
  getPlaces,
} from "../../../Redux/actions";

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

    & .SwitchySearchyLogo {
      /* border: #001eff solid 3px; */

      position: relative;
      display: flex;
      justify-content: space-between;

      .SwitchySearch {
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

        .Search {
          margin-left: 30px;
          position: relative;
          top: 45px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 400px;
          height: 65px;
          align-self: center;
          border-radius: 10px;
          padding: 0px 30px;
          background-color: #010101e2;

          & label {
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-family: "New Rocker", cursive;
            color: white;
            font-size: 2.5rem;
            width: 100%;

            & input {
              width: 75%;
              border-radius: 5px;
              height: 30px;
              border: none;
              outline: none;
              padding: 0px 15px;
              font-size: 2rem;
            }

            & button {
              margin-left: 20px;
              height: 30px;
              padding: 0px 15px;
              border-radius: 5px;
              border: none;
              background-color: ${Colors.Blue_life};
              color: ${Colors.Platinum};
              font-family: "New Rocker", cursive;
              font-size: 1.8rem;
              transition: all 0.5s ease;

              :hover {
                cursor: pointer;
                transform: scale(1.2);
              }
            }
          }
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

      .divLoader {
        //border: red solid;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 600px;
        justify-content: center;

        h4 {
          font-size: 16px;
        }
      }
    }

    .divContainerdeAbajo {
      /* border: #ff0000 solid 3px; */

      position: relative;
      z-index: 20;
      margin-top: 50px;
      box-sizing: border-box;
      width: 100%;
      display: flex;
      justify-content: center;

      .ContLeftRigth {
        /* border: #4dff00 solid 3px; */

        display: flex;
        width: 100%;
        justify-content: space-between;

        .ContainerLocBan {
          /* border: blue solid; */
          width: 45%;

          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: ${Colors.Oxford_Blue_transparent};
          height: 400px;
          padding-bottom: 50px;

          h1 {
            /* border: red solid; */

            font-family: "New Rocker";
            font-weight: 400;
            font-size: 4rem;
            color: ${Colors.Platinum};
            margin: 30px;
          }

          .CardContair {
            /* border: purple solid; */
            width: 100%;

            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 50px;

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
  }
`;

function UsersInf() {
  function SortArray(x, y) {
    if (x.name.charAt(0).toLowerCase() < y.name.charAt(0).toLowerCase()) return -1;
    if (x.name.charAt(0).toLowerCase() > y.name.charAt(0).toLowerCase()) return 1;
    return 0;
  }

  const [loading, setLoading] = useState(false);
  const [Switch, setSwitch] = useState(false);
  const [SwitchNotif, setSwitchNotif] = useState(false);
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places).sort(SortArray);
  const musicBands = useSelector((state) => state.musicBands).sort(SortArray);
  const searchPlace = useSelector((state) => state.searchPlace).sort(SortArray);
  const searchMusicBand = useSelector((state) => state.searchMusicBand).sort(SortArray);
  const [name, setName] = useState("");

  useEffect(() => {
    setLoading(true);
    dispatch(getMusicBands());
    dispatch(getPlaces());
  }, []);

  function handleCheckBox(e) {
    setSwitch(!Switch);
    setSwitchNotif(false);
  }

  function handleClickDetallesBanda(e) {
    e.preventDefault();
    dispatch(getDetailMusicBandByEmail(e.target.value));
    dispatch(adminClickBanda(e.target.name));
  }

  function handleClickDetallesLocal(e) {
    e.preventDefault();
    dispatch(getDetailPlaceByEmail(e.target.value));
    dispatch(adminClickLocal(e.target.name));
  }

  async function handlerSearch(e) {
    e.preventDefault();
    dispatch(getMusicOrPlacesByName(name));
    setName("");
  }

  const handlerInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <div>
      {loading ? (
        <ContainerGralStyled Switch={Switch}>
          <div className="Container">
            <div className="SwitchySearchyLogo">
              <div className="SwitchySearch">
                <div className="SwitchCont">
                  <p>Perfil</p>
                  <input value={Switch} id="switch" type="checkbox" onChange={(e) => handleCheckBox(e)} />
                  <label htmlFor="switch" className="label" />
                  <p>Editar</p>
                </div>
                <div className="Search">
                  <label htmlFor="Search">
                    <input id="Search" type="text" value={name} onChange={(e) => handlerInputChange(e)} />
                    <button onClick={(e) => handlerSearch(e)} type="submit">
                      Buscar
                    </button>
                  </label>
                </div>
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
                  <div className="CardContair">
                    {searchMusicBand.length >= 1
                      ? searchMusicBand.map((musicBand) => {
                          return (
                            <div key={musicBand._id} className="divsSmallConfirmados">
                              <p>{musicBand.name}</p>
                              <button
                                value={musicBand.email}
                                name="banda"
                                onClick={(e) => handleClickDetallesBanda(e)}
                                type="button"
                                className="BTNDetalle"
                              >
                                Detalle
                              </button>
                            </div>
                          );
                        })
                      : musicBands.map((musicBand) => {
                          return (
                            <div key={musicBand._id} className="divsSmallConfirmados">
                              <p>{musicBand.name}</p>
                              <button
                                value={musicBand.email}
                                name="banda"
                                onClick={(e) => handleClickDetallesBanda(e)}
                                type="button"
                                className="BTNDetalle"
                              >
                                Detalle
                              </button>
                            </div>
                          );
                        })}
                  </div>
                </div>
                <div className="ContainerLocBan">
                  <h1>Locales</h1>
                  <div className="CardContair">
                    {searchPlace.length >= 1
                      ? searchPlace.map((place) => {
                          return (
                            <div key={place._id} className="divsSmallConfirmados">
                              <p>{place.name}</p>
                              <button
                                value={place.email}
                                name="local"
                                onClick={(e) => handleClickDetallesLocal(e)}
                                type="button"
                                className="BTNDetalle"
                              >
                                Detalle
                              </button>
                            </div>
                          );
                        })
                      : places &&
                        places.map((place) => {
                          return (
                            <div key={place._id} className="divsSmallConfirmados">
                              <p>{place.name}</p>
                              <button
                                value={place.email}
                                name="local"
                                onClick={(e) => handleClickDetallesLocal(e)}
                                type="button"
                                className="BTNDetalle"
                              >
                                Detalle
                              </button>
                            </div>
                          );
                        })}
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
