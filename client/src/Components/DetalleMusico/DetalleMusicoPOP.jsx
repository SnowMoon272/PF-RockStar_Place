/* eslint-disable no-prototype-builtins */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-confusing-arrow */
import React, { useState } from "react";
import styled from "styled-components";
import Colors from "../../Utils/colors";
import ImgLogo from "../../Assets/img/logo3.png";
import ReseñasOpinion from "./ReseñasOpinion";
import LogoYouTube from "../../Assets/svg/YouTube.svg";
import LogoSpotify from "../../Assets/svg/Spotyfy.svg";
import LogoInstagram from "../../Assets/svg/Instagram.svg";
import SVGCerrar from "../../Assets/svg/Cerrar.svg";

const EditStyledCont = styled.div`
  box-sizing: border-box;
  border: solid 3px white;
  border-radius: 15px;
  background-color: ${Colors.Erie_Black};
  position: relative;

  .BTNCerrar {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: ${Colors.Erie_Black};
    border: none;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 32px;
      height: 32px;
    }
  }

  .VewContainer {
    /* border: solid 3px blue; */
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 50px;

    .InfoBandaCont {
      /* border: solid 3px yellow; */
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: ${Colors.Oxford_Blue_transparent};
      width: 34%;
      height: 95%;
      padding: 25px 35px;
      margin-right: 50px;

      .TitleA {
        /* border: solid 3px yellow; */
        font-family: "New Rocker";
        font-weight: 400;
        font-size: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${Colors.Platinum};
        margin: 0px 0px 25px 0px;
        width: 100%;
      }

      #ImgPerfil {
        border: white solid 1px;
        object-fit: cover;
        width: 100%;
        height: 30%;
      }

      .divContenedorDescripcion {
        /* border: solid 3px red; */

        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        padding: 10px;

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

        .divsDescripcionCont {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: fit-content;

          .divsDescripcion {
            /* border: solid 3px green; */

            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            width: 100%;
            height: fit-content;
            margin: 4px 0px;

            .Azules {
              /* border: solid 3px purple; */
              font-family: "RocknRoll One";
              letter-spacing: -1px;
              font-weight: 400;
              font-size: 2.3rem;
              color: ${Colors.Blue_Vivid};
              margin: 0px 5px 0px 0px;
              height: fit-content;
            }
            .Blancos {
              /* border: solid 3px palegreen; */

              font-family: "RocknRoll One";
              font-weight: 400;
              font-size: 1.8rem;
              margin: 6px 0px 0px 0px;
              color: ${Colors.Platinum};
              height: fit-content;
            }
          }
        }

        .RedesyEditarCont {
          /* border: solid 3px purple; */
          display: flex;
          justify-content: space-between;
          align-items: center;

          .RedesCont {
            /* border: solid 3px orange; */
            height: auto;
            width: 50%;
            padding: 10px;
            display: flex;
            justify-content: center;

            a {
              /* border: solid 3px purple; */
              display: flex;
              justify-content: center;
              align-items: center;
              width: 46px;
              height: 46px;
              border-radius: 50px;
              margin: 0px 5%;

              .ImglogosRedes {
                width: 40px;
                height: 40px;
                padding: 4px;
                border-radius: 50px;
                background-color: white;
                margin: 0px 20px;
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

    .ReseñasLogoCont {
      /* border: solid 3px gray; */

      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 70%;
      height: 102.5%;

      .divImgLogo {
        /* border: solid 3px blue; */

        display: flex;
        justify-content: center;
        width: 100%;

        #imgLogo {
          /* border: solid 3px blueviolet; */
          width: 36%;
          margin: 0px;
        }
      }
      .BotonOpinion {
        position: relative;
        left: 79%;
        top: 9%;
        border: none;
        font-family: "New Rocker";
        font-weight: 400;
        font-size: 2rem;
        border-radius: 10px;
        background-color: ${Colors.Blue_life};
        width: 15%;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${Colors.Platinum};
        text-decoration: none;
        margin-top: 20px;
        transition: all 0.5s ease;

        :hover {
          cursor: pointer;
          transform: scale(1.2);
        }
      }
    }
  }
`;

export default function DetalleMusicoPOP({ setzIndex, zIndex, musicBand }) {
  const handlerSubmintCloseSearch = (e) => {
    e.preventDefault();
    setzIndex(!zIndex);
  };

  const [stateReseña, setStateReseña] = useState(false);

  const handlerSwitch = (e) => {
    e.preventDefault();
    setStateReseña(!stateReseña);
  };

  return (
    <EditStyledCont>
      <button
        name="Search"
        onClick={(e) => handlerSubmintCloseSearch(e)}
        type="button"
        className="BTNCerrar"
      >
        <img src={SVGCerrar} alt="" />
      </button>

      <div className="VewContainer">
        <div className="InfoBandaCont">
          <h1 className="TitleA">{musicBand.name}</h1>
          <img id="ImgPerfil" src={musicBand.profilePicture} alt="Foto Perfil" />
          <div className="divContenedorDescripcion">
            <div className="divsDescripcionCont">
              <div className="divsDescripcion">
                <span className="Azules">Persona a Cargo:</span>
                <h3 className="Blancos">{musicBand.personInCharge}</h3>
              </div>
              <div className="divsDescripcion">
                <span className="Azules">Email:</span>
                <h3 className="Blancos">{musicBand.email}</h3>
              </div>
              <div className="divsDescripcion">
                <span className="Azules">Telefono:</span>
                <h3 className="Blancos">{musicBand.phoneNumber}</h3>
              </div>
              <div className="divsDescripcion">
                <h3 className="Blancos">
                  <span className="Azules">Descripción:</span>
                  {musicBand.description}
                </h3>
              </div>
              <div className="divsDescripcion">
                <span className="Azules">Rating:</span>
                <h3 className="Blancos">⭐{musicBand.rating}</h3>
              </div>
            </div>
            <div>
              <div className="RedesyEditarCont">
                <div className="RedesCont">
                  {musicBand.socialMedia && musicBand.socialMedia.youtube !== "" ? (
                    <a target="_blank" href={musicBand.socialMedia.youtube} rel="noreferrer">
                      <img className="ImglogosRedes" src={LogoYouTube} alt="" />
                    </a>
                  ) : null}
                  {musicBand.socialMedia && musicBand.socialMedia.spotify !== "" ? (
                    <a target="_blank" href={musicBand.socialMedia.spotify} rel="noreferrer">
                      <img className="ImglogosRedes" src={LogoSpotify} alt="" />
                    </a>
                  ) : null}
                  {musicBand.socialMedia && musicBand.socialMedia.instagram !== "" ? (
                    <a target="_blank" href={musicBand.socialMedia.instagram} rel="noreferrer">
                      <img className="ImglogosRedes" src={LogoInstagram} alt="" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ReseñasLogoCont">
          <div className="divImgLogo">
            <img id="imgLogo" src={ImgLogo} alt="" />
          </div>
          <button
            onClick={(e) => {
              handlerSwitch(e);
            }}
            className="BotonOpinion"
            type="button"
          >
            {stateReseña ? "Reseñas" : "Opinion"}
          </button>
          <ReseñasOpinion Opinion={stateReseña} setOpinion={setStateReseña} musicBand={musicBand} />
        </div>
      </div>
    </EditStyledCont>
  );
}
